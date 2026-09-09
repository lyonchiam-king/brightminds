import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_DIR = path.join(__dirname, 'data');
const INQUIRIES_FILE = path.join(DATA_DIR, 'inquiries.json');

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

if (!fs.existsSync(INQUIRIES_FILE)) {
  fs.writeFileSync(INQUIRIES_FILE, JSON.stringify([], null, 2));
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API endpoint for inquiry submission
  app.post('/api/inquiry', (req, res) => {
    try {
      const { name, phone, yearGroup, subject, goal, notes } = req.body;
      const timestamp = new Date().toISOString();
      
      const newInquiry = {
        id: `INQ-${Date.now()}`,
        timestamp,
        name: name || 'Parent Inquiry',
        phone: phone || '[Not provided]',
        yearGroup: yearGroup || 'General',
        subject: subject || 'General Tuition',
        goal: goal || 'Improvement',
        notes: notes || '',
      };

      let currentInquiries = [];
      try {
        const fileContent = fs.readFileSync(INQUIRIES_FILE, 'utf-8');
        currentInquiries = JSON.parse(fileContent);
      } catch (err) {
        currentInquiries = [];
      }

      currentInquiries.unshift(newInquiry);
      fs.writeFileSync(INQUIRIES_FILE, JSON.stringify(currentInquiries, null, 2));

      res.status(200).json({
        success: true,
        message: 'Inquiry recorded successfully',
        inquiry: newInquiry,
      });
    } catch (error) {
      console.error('Error saving inquiry:', error);
      res.status(500).json({ success: false, error: 'Failed to record inquiry' });
    }
  });

  // Export CSV endpoint for Google Sheets / Excel import
  app.get('/api/inquiries/export', (req, res) => {
    try {
      let currentInquiries = [];
      if (fs.existsSync(INQUIRIES_FILE)) {
        currentInquiries = JSON.parse(fs.readFileSync(INQUIRIES_FILE, 'utf-8'));
      }

      const headers = ['Timestamp', 'ID', 'Name', 'Phone', 'Year Group', 'Subject', 'Goal', 'Notes'];
      const rows = currentInquiries.map((inq: any) => [
        `"${inq.timestamp}"`,
        `"${inq.id}"`,
        `"${(inq.name || '').replace(/"/g, '""')}"`,
        `"${(inq.phone || '').replace(/"/g, '""')}"`,
        `"${(inq.yearGroup || '').replace(/"/g, '""')}"`,
        `"${(inq.subject || '').replace(/"/g, '""')}"`,
        `"${(inq.goal || '').replace(/"/g, '""')}"`,
        `"${(inq.notes || '').replace(/"/g, '""')}"`
      ]);

      const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
      
      res.setHeader('Content-Type', 'text/csv');
      res.setHeader('Content-Disposition', 'attachment; filename="bright_minds_inquiries.csv"');
      res.status(200).send(csvContent);
    } catch (error) {
      res.status(500).json({ error: 'Failed to export CSV' });
    }
  });

  // Health check endpoint
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', business: 'Bright Minds Tutors - London SW15' });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Bright Minds Tutors server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
});
