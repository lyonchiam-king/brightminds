import React from 'react';
import { MapPin, Phone, Award, ShieldCheck, CheckCircle2 } from 'lucide-react';
import heroImg from '../assets/images/bright_minds_hero_1788971662085.jpg';

interface HeroProps {
  onCheckAvailability: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCheckAvailability }) => {
  return (
    <section className="relative w-full bg-[#FFFFFF] border-b border-[#E5E7EB]">
      {/* 800px max-width container as mandated for worksheet measure */}
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 pt-6 pb-8">
        
        {/* Top Badges Row */}
        <div className="flex flex-wrap items-center gap-2 mb-4 text-xs font-medium text-[#6B7280]">
          <span className="inline-flex items-center gap-1 bg-[#F9FAFB] border border-[#E5E7EB] px-2.5 py-1 rounded text-[#1F2937]">
            <MapPin className="w-3.5 h-3.5 text-[#2563EB]" />
            <span>London SW15 (6A Frensham Dr)</span>
          </span>
          <span className="inline-flex items-center gap-1 bg-[#F9FAFB] border border-[#E5E7EB] px-2.5 py-1 rounded text-[#1F2937]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#2563EB]" />
            <span>SW15 Private Tuition Centre</span>
          </span>
        </div>

        {/* Hero Image Container - Static, crisp image with overlay */}
        <div className="relative rounded-card border border-[#E5E7EB] overflow-hidden mb-6 aspect-[16/9] sm:aspect-[2/1] bg-[#F9FAFB]">
          <img
            src={heroImg}
            alt="Bright Minds Tutors London SW15 study space"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
            loading="eager"
            fetchPriority="high"
          />
          {/* Subtle dark gradient overlay for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent flex flex-col justify-end p-5 sm:p-7 text-white">
            <span className="text-xs font-bold tracking-wider uppercase text-blue-200 mb-1">
              Bright Minds Tutors • SW15
            </span>
            <h1 className="font-serif font-bold text-2xl sm:text-3xl lg:text-[40px] text-white leading-tight mb-2">
              Patient tutoring that actually clicks.
            </h1>
            <p className="text-sm sm:text-base text-gray-100 max-w-xl font-sans font-normal leading-relaxed">
              Private tuition in London SW15 where clear explanations lead to visible improvement in subject knowledge.
            </p>
          </div>
        </div>

        {/* Hero Call To Action Block */}
        <div className="bg-[#FFFFFF] border border-[#E5E7EB] rounded-card p-5 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div>
            <h2 className="font-serif font-bold text-lg text-[#1F2937]">
              Help your child build confidence & subject mastery
            </h2>
            <p className="text-sm text-[#6B7280]">
              Key Stage 2, KS3, GCSE & A-Level specialist tuition in SW15.
            </p>
          </div>
          <button
            onClick={onCheckAvailability}
            className="w-full sm:w-auto shrink-0 bg-[#2563EB] hover:bg-[#1D4ED8] active:bg-[#1E40AF] text-white font-semibold text-base px-6 py-3 rounded-card transition-colors shadow-xs active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#2563EB]"
          >
            Check Tutor Availability
          </button>
        </div>

        {/* HIGHLIGHTS STRIP (directly under hero, one row of badges) */}
        <div className="mt-6 pt-5 border-t border-[#E5E7EB]">
          <span className="block text-xs font-semibold text-[#6B7280] uppercase tracking-wider mb-2.5">
            Key Highlights
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            <div className="flex items-center gap-2 bg-[#FFFFFF] border border-[#E5E7EB] px-3 py-2.5 rounded-card">
              <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
              <span className="text-sm font-medium text-[#1F2937]">Patient Teaching Style</span>
            </div>
            <div className="flex items-center gap-2 bg-[#FFFFFF] border border-[#E5E7EB] px-3 py-2.5 rounded-card">
              <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
              <span className="text-sm font-medium text-[#1F2937]">Organized Lessons</span>
            </div>
            <div className="flex items-center gap-2 bg-[#FFFFFF] border border-[#E5E7EB] px-3 py-2.5 rounded-card">
              <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
              <span className="text-sm font-medium text-[#1F2937]">Home Learning Support</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
