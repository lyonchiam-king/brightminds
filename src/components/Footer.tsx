import React from 'react';
import { Download, Phone, MapPin, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onNavClick: (tab: 'home' | 'subjects' | 'contact') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavClick }) => {
  return (
    <footer className="bg-[#FFFFFF] border-t border-[#E5E7EB] pt-10 pb-20 md:pb-12 text-[#1F2937]">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
          {/* Col 1: Business Details */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 rounded bg-[#2563EB] flex items-center justify-center text-white font-serif font-bold text-sm">
                B
              </div>
              <span className="font-serif font-bold text-base text-[#1F2937]">
                Bright Minds Tutors
              </span>
            </div>
            <p className="text-xs text-[#6B7280] font-sans leading-relaxed mb-3">
              Private Tuition Centre in London SW15. Patient 1-on-1 and small group tuition built around clear explanations and visible subject knowledge growth.
            </p>
            <p className="text-xs text-[#1F2937] font-medium flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#2563EB]" />
              <span>6A Frensham Dr, London SW15 3EA, UK</span>
            </p>
            <p className="text-xs text-[#1F2937] font-medium flex items-center gap-1 mt-1">
              <Phone className="w-3.5 h-3.5 text-[#2563EB]" />
              <a href="tel:+447988324518" className="hover:underline font-tabular">+44 7988 324518</a>
            </p>
          </div>

          {/* Col 2: Navigation & Owner Tools */}
          <div className="sm:text-right flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-[#1F2937] uppercase tracking-wider block mb-2">
                Navigation
              </span>
              <ul className="space-y-1.5 text-xs text-[#6B7280]">
                <li>
                  <button onClick={() => onNavClick('home')} className="hover:text-[#2563EB] transition-colors">
                    Home
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavClick('subjects')} className="hover:text-[#2563EB] transition-colors">
                    Subjects & Approach
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavClick('contact')} className="hover:text-[#2563EB] transition-colors">
                    Location & Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Owner Spreadsheet CSV Download Link */}
            <div className="mt-4 pt-3 border-t border-[#E5E7EB] sm:inline-self-end">
              <span className="text-[11px] text-[#6B7280] block mb-1">Centre Owner Shortcut:</span>
              <a
                href="/api/inquiries/export"
                download="bright_minds_inquiries.csv"
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded bg-[#F9FAFB] border border-[#E5E7EB] text-[#1F2937] hover:bg-white hover:border-[#2563EB] transition-colors"
              >
                <Download className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>Export Inquiries Spreadsheet (CSV)</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 border-t border-[#E5E7EB] flex flex-col sm:flex-row items-center justify-between text-xs text-[#6B7280] gap-2">
          <span>&copy; {new Date().getFullYear()} Bright Minds Tutors - Private Tuition Centre. All rights reserved.</span>
          <span>London SW15 Private Tuition</span>
        </div>

      </div>
    </footer>
  );
};
