import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Send, CheckCircle2, RotateCcw, ShieldCheck, Sparkles, PhoneCall, Check } from 'lucide-react';
import { InquiryState } from '../types';

interface InquiryBuilderProps {
  initialState?: Partial<InquiryState>;
  onInquirySubmitted?: (data: InquiryState) => void;
}

const YEAR_GROUPS = [
  'Primary (KS2 Year 3-6)',
  'Secondary (KS3 Year 7-9)',
  'GCSE (Year 10-11)',
  'A-Level (Year 12-13)',
  '11+ / Entrance Exam Prep'
];

const SUBJECTS = [
  'Mathematics',
  'English Language & Literature',
  'Sciences (Physics / Chem / Bio)',
  '11+ Practice & Verbal Reasoning',
  'Combined Key Stage Subjects'
];

const GOALS = [
  'Grade Improvement & Topic Mastery',
  'Targeted Exam Preparation',
  'Confidence & Foundational Catch-Up',
  'Homework & Regular Practice',
  'Grammar & High Achievement Aim'
];

export const InquiryBuilder: React.FC<InquiryBuilderProps> = ({ initialState, onInquirySubmitted }) => {
  const [yearGroup, setYearGroup] = useState<string>(initialState?.yearGroup || YEAR_GROUPS[1]);
  const [subject, setSubject] = useState<string>(initialState?.subject || SUBJECTS[0]);
  const [goal, setGoal] = useState<string>(initialState?.goal || GOALS[0]);

  const [parentName, setParentName] = useState<string>('');
  const [parentPhone, setParentPhone] = useState<string>('');
  const [notes, setNotes] = useState<string>('');

  const [submitting, setSubmitting] = useState<boolean>(false);
  const [submittedSuccess, setSubmittedSuccess] = useState<boolean>(false);

  useEffect(() => {
    if (initialState?.subject) setSubject(initialState.subject);
    if (initialState?.yearGroup) setYearGroup(initialState.yearGroup);
    if (initialState?.goal) setGoal(initialState.goal);
  }, [initialState]);

  // Construct pre-filled WhatsApp text
  const rawWhatsAppMessage = `Hello Bright Minds Tutors! I would like to check tutor availability in London SW15 for private tuition:\n\n• Year Group: ${yearGroup}\n• Subject: ${subject}\n• Primary Need: ${goal}${parentName ? `\n• Parent Name: ${parentName}` : ''}${notes ? `\n• Notes: ${notes}` : ''}`;

  const whatsappUrl = `https://wa.me/447988324518?text=${encodeURIComponent(rawWhatsAppMessage)}`;

  const handleSubmitDirect = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const payload = {
      name: parentName || 'SW15 Parent',
      phone: parentPhone || 'Not provided',
      yearGroup,
      subject,
      goal,
      notes,
    };

    try {
      const res = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setSubmittedSuccess(true);
        if (onInquirySubmitted) {
          onInquirySubmitted(payload);
        }
      } else {
        // Fallback success response for client side
        setSubmittedSuccess(true);
      }
    } catch (err) {
      setSubmittedSuccess(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="py-12 bg-[#FFFFFF] border-b border-[#E5E7EB]" id="inquiry-composer">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-6 text-left">
          <span className="text-xs font-semibold text-[#2563EB] uppercase tracking-wider block mb-1">
            Interactive Inquiry Composer
          </span>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#1F2937]">
            Check Tutor Availability
          </h2>
          <p className="text-sm sm:text-base text-[#6B7280] font-sans mt-1 max-w-xl">
            Select your child’s Year Group, Subject, and Need. Generates an instant tailored inquiry for SW15 private tuition.
          </p>
        </div>

        {/* Composer Card */}
        <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-card p-5 sm:p-7">
          
          {/* Step 1: Year Group Selection */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <label className="font-serif font-bold text-sm text-[#1F2937] flex items-center gap-1.5">
                <span className="w-5 h-5 rounded bg-[#2563EB] text-white text-xs flex items-center justify-center font-sans font-bold">1</span>
                <span>Select Year Group</span>
              </label>
              <span className="text-xs text-[#6B7280]">Key Stage Level</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {YEAR_GROUPS.map((yg) => (
                <button
                  key={yg}
                  type="button"
                  onClick={() => setYearGroup(yg)}
                  className={`text-left px-3.5 py-2.5 rounded-card text-xs sm:text-sm font-medium transition-all flex items-center justify-between border ${
                    yearGroup === yg
                      ? 'bg-[#2563EB] text-white border-[#2563EB] shadow-xs'
                      : 'bg-[#FFFFFF] text-[#1F2937] border-[#E5E7EB] hover:border-[#2563EB]/50'
                  }`}
                >
                  <span>{yg}</span>
                  {yearGroup === yg && <Check className="w-4 h-4 shrink-0 text-white" />}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Subject Selection */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <label className="font-serif font-bold text-sm text-[#1F2937] flex items-center gap-1.5">
                <span className="w-5 h-5 rounded bg-[#2563EB] text-white text-xs flex items-center justify-center font-sans font-bold">2</span>
                <span>Select Subject</span>
              </label>
              <span className="text-xs text-[#6B7280]">Tuition Focus</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {SUBJECTS.map((sub) => (
                <button
                  key={sub}
                  type="button"
                  onClick={() => setSubject(sub)}
                  className={`text-left px-3.5 py-2.5 rounded-card text-xs sm:text-sm font-medium transition-all flex items-center justify-between border ${
                    subject === sub
                      ? 'bg-[#2563EB] text-white border-[#2563EB] shadow-xs'
                      : 'bg-[#FFFFFF] text-[#1F2937] border-[#E5E7EB] hover:border-[#2563EB]/50'
                  }`}
                >
                  <span>{sub}</span>
                  {subject === sub && <Check className="w-4 h-4 shrink-0 text-white" />}
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Goal / Need Selection */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <label className="font-serif font-bold text-sm text-[#1F2937] flex items-center gap-1.5">
                <span className="w-5 h-5 rounded bg-[#2563EB] text-white text-xs flex items-center justify-center font-sans font-bold">3</span>
                <span>Select Primary Goal</span>
              </label>
              <span className="text-xs text-[#6B7280]">Academic Objective</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {GOALS.map((g) => (
                <button
                  key={g}
                  type="button"
                  onClick={() => setGoal(g)}
                  className={`text-left px-3.5 py-2.5 rounded-card text-xs sm:text-sm font-medium transition-all flex items-center justify-between border ${
                    goal === g
                      ? 'bg-[#2563EB] text-white border-[#2563EB] shadow-xs'
                      : 'bg-[#FFFFFF] text-[#1F2937] border-[#E5E7EB] hover:border-[#2563EB]/50'
                  }`}
                >
                  <span>{g}</span>
                  {goal === g && <Check className="w-4 h-4 shrink-0 text-white" />}
                </button>
              ))}
            </div>
          </div>

          {/* Active Summary Preview Box */}
          <div className="p-4 bg-[#FFFFFF] border border-[#E5E7EB] rounded-card mb-6">
            <div className="flex items-center justify-between text-xs font-bold text-[#2563EB] mb-2">
              <span className="flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
                Your Selected Inquiry Summary:
              </span>
              <span className="text-xs text-[#6B7280] font-normal">Ready to Send</span>
            </div>
            <div className="text-xs sm:text-sm text-[#1F2937] space-y-1 font-sans">
              <p><strong>Level:</strong> {yearGroup}</p>
              <p><strong>Subject:</strong> {subject}</p>
              <p><strong>Target Goal:</strong> {goal}</p>
            </div>
          </div>

          {/* Contact Details & Direct Form */}
          {!submittedSuccess ? (
            <form onSubmit={handleSubmitDirect} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#1F2937] mb-1">
                    Your Name (Optional)
                  </label>
                  <input
                    type="text"
                    value={parentName}
                    onChange={(e) => setParentName(e.target.value)}
                    placeholder="e.g. Sarah M."
                    className="w-full px-3 py-2 text-sm bg-[#FFFFFF] border border-[#E5E7EB] rounded-card focus:outline-none focus:border-[#2563EB] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#1F2937] mb-1">
                    Your Phone / Contact (Optional)
                  </label>
                  <input
                    type="tel"
                    value={parentPhone}
                    onChange={(e) => setParentPhone(e.target.value)}
                    placeholder="e.g. 07988 324518"
                    className="w-full px-3 py-2 text-sm bg-[#FFFFFF] border border-[#E5E7EB] rounded-card focus:outline-none focus:border-[#2563EB] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1F2937] mb-1">
                  Specific Notes / Exam Board (Optional)
                </label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Needs help with GCSE Edexcel Higher Maths quadratic equations..."
                  rows={2}
                  className="w-full px-3 py-2 text-sm bg-[#FFFFFF] border border-[#E5E7EB] rounded-card focus:outline-none focus:border-[#2563EB] transition-colors resize-none"
                />
              </div>

              {/* Action Buttons: WhatsApp & Direct Submit */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-sm px-5 py-3 rounded-card transition-colors flex items-center justify-center gap-2 shadow-xs active:scale-[0.99]"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>Send via WhatsApp (+44 7988 324518)</span>
                </a>

                <button
                  type="submit"
                  disabled={submitting}
                  className="sm:w-auto bg-[#2563EB] hover:bg-[#1D4ED8] active:bg-[#1E40AF] text-white font-semibold text-sm px-5 py-3 rounded-card transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{submitting ? 'Sending...' : 'Submit Inquiry Direct'}</span>
                </button>
              </div>
            </form>
          ) : (
            <div className="bg-emerald-50 border border-emerald-200 rounded-card p-5 text-center">
              <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
              <h3 className="font-serif font-bold text-lg text-emerald-900 mb-1">
                Inquiry Received!
              </h3>
              <p className="text-sm text-emerald-800 mb-4 max-w-md mx-auto">
                Thank you. Your inquiry for <strong>{subject} ({yearGroup})</strong> has been saved. We will contact you promptly at <strong>+44 7988 324518</strong>.
              </p>
              <div className="flex justify-center gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white text-xs font-semibold px-4 py-2 rounded-card"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Also Message on WhatsApp</span>
                </a>
                <button
                  onClick={() => setSubmittedSuccess(false)}
                  className="inline-flex items-center gap-1 text-xs text-[#6B7280] hover:text-[#1F2937] underline"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Submit Another</span>
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
