import React, { useState } from 'react';
import { Phone, MessageSquare, BookOpen, MapPin, Menu, X } from 'lucide-react';
import { ActiveTab } from '../types';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  onCheckAvailabilityClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, onCheckAvailabilityClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (tab: ActiveTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FFFFFF] border-b border-[#E5E7EB] shadow-xs">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Business Title */}
        <button
          onClick={() => handleNavClick('home')}
          className="text-left focus-visible:outline-2 focus-visible:outline-[#2563EB] rounded-sm transition-opacity hover:opacity-90"
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-[#2563EB] flex items-center justify-center text-white font-serif font-bold text-lg">
              B
            </div>
            <div>
              <span className="block font-serif font-bold text-base sm:text-lg text-[#1F2937] leading-tight">
                Bright Minds Tutors
              </span>
              <span className="block text-xs text-[#6B7280] font-sans">
                Private Tuition • London SW15
              </span>
            </div>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 font-sans text-sm font-medium">
          <button
            onClick={() => handleNavClick('home')}
            className={`px-3 py-1.5 rounded transition-colors ${
              activeTab === 'home'
                ? 'bg-[#F9FAFB] text-[#2563EB] font-semibold border-b-2 border-[#2563EB]'
                : 'text-[#1F2937] hover:text-[#2563EB] hover:bg-[#F9FAFB]'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('subjects')}
            className={`px-3 py-1.5 rounded transition-colors ${
              activeTab === 'subjects'
                ? 'bg-[#F9FAFB] text-[#2563EB] font-semibold border-b-2 border-[#2563EB]'
                : 'text-[#1F2937] hover:text-[#2563EB] hover:bg-[#F9FAFB]'
            }`}
          >
            Subjects & Approach
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className={`px-3 py-1.5 rounded transition-colors ${
              activeTab === 'contact'
                ? 'bg-[#F9FAFB] text-[#2563EB] font-semibold border-b-2 border-[#2563EB]'
                : 'text-[#1F2937] hover:text-[#2563EB] hover:bg-[#F9FAFB]'
            }`}
          >
            Contact
          </button>
        </nav>

        {/* Desktop Direct Call & CTA */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href="tel:+447988324518"
            className="flex items-center gap-1.5 text-xs font-semibold text-[#1F2937] hover:text-[#2563EB] px-2.5 py-1.5 rounded border border-[#E5E7EB] bg-[#FFFFFF] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#2563EB]" />
            <span className="font-tabular">+44 7988 324518</span>
          </a>
          <button
            onClick={onCheckAvailabilityClick}
            className="text-xs font-semibold bg-[#2563EB] hover:bg-[#1D4ED8] active:bg-[#1E40AF] text-white px-3 py-1.5 rounded transition-colors"
          >
            Check Availability
          </button>
        </div>

        {/* Mobile Hamburger toggle */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="tel:+447988324518"
            className="p-2 rounded border border-[#E5E7EB] text-[#2563EB] bg-[#FFFFFF]"
            aria-label="Call Bright Minds Tutors"
          >
            <Phone className="w-4 h-4" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded border border-[#E5E7EB] text-[#1F2937]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FFFFFF] border-t border-[#E5E7EB] px-4 py-3 space-y-2">
          <button
            onClick={() => handleNavClick('home')}
            className={`w-full text-left px-3 py-2 rounded text-base font-medium ${
              activeTab === 'home' ? 'bg-[#F9FAFB] text-[#2563EB] font-semibold' : 'text-[#1F2937]'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('subjects')}
            className={`w-full text-left px-3 py-2 rounded text-base font-medium ${
              activeTab === 'subjects' ? 'bg-[#F9FAFB] text-[#2563EB] font-semibold' : 'text-[#1F2937]'
            }`}
          >
            Subjects & Approach
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className={`w-full text-left px-3 py-2 rounded text-base font-medium ${
              activeTab === 'contact' ? 'bg-[#F9FAFB] text-[#2563EB] font-semibold' : 'text-[#1F2937]'
            }`}
          >
            Contact
          </button>
          <div className="pt-2 border-t border-[#E5E7EB] flex flex-col gap-2">
            <a
              href="tel:+447988324518"
              className="flex items-center justify-center gap-2 py-2 text-sm font-semibold text-[#1F2937] border border-[#E5E7EB] rounded"
            >
              <Phone className="w-4 h-4 text-[#2563EB]" />
              <span>Call: +44 7988 324518</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onCheckAvailabilityClick();
              }}
              className="w-full text-center py-2 text-sm font-semibold bg-[#2563EB] text-white rounded"
            >
              Check Tutor Availability
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
