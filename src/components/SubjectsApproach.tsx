import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, CheckCircle2, Shield, Sparkles, Target, Users } from 'lucide-react';

interface SubjectsApproachProps {
  onCheckAvailabilityClick: () => void;
}

export const SubjectsApproach: React.FC<SubjectsApproachProps> = ({ onCheckAvailabilityClick }) => {
  const subjectList = [
    {
      name: 'Mathematics',
      levels: 'Key Stage 2, Key Stage 3, GCSE & A-Level',
      details: 'From basic arithmetic confidence to advanced algebraic proofs, calculus, trigonometry, and exam mechanics.',
      points: ['Step-by-step problem solving', 'Past paper exam technique', 'Overcoming math anxiety']
    },
    {
      name: 'English Language & Literature',
      levels: 'Key Stage 2, KS3 & GCSE',
      details: 'Structuring essays, critical reading comprehension, creative writing technique, and set text analysis.',
      points: ['Grammar & vocabulary building', 'Structured essay writing frameworks', 'Poetry and prose analytical breakdown']
    },
    {
      name: 'Sciences (Physics, Chemistry & Biology)',
      levels: 'Key Stage 3 & GCSE (Combined & Triple)',
      details: 'Breaking down complex chemical reactions, biological cycles, and physical formulas into logical steps.',
      points: ['Core scientific concepts explained simply', 'Formula and calculation mastery', 'Practical question preparation']
    },
    {
      name: '11+ & Entrance Exam Preparation',
      levels: 'Primary Year 4 & Year 5',
      details: 'Comprehensive prep for Southwest London grammar and independent school entry exams.',
      points: ['Verbal & Non-Verbal Reasoning', 'Timed exam practice', 'Confidence under exam conditions']
    }
  ];

  return (
    <section className="py-12 bg-[#FFFFFF] border-b border-[#E5E7EB]" id="subjects-approach">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-8 text-left">
          <span className="text-xs font-semibold text-[#2563EB] uppercase tracking-wider block mb-1">
            Academic Method & Syllabus
          </span>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#1F2937]">
            Subjects & Approach
          </h2>
          <p className="text-sm sm:text-base text-[#6B7280] font-sans mt-1 max-w-xl">
            Where clear explanations lead to visible improvement in subject knowledge across London SW15.
          </p>
        </div>

        {/* Core Teaching Philosophy Box */}
        <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-card p-6 mb-8">
          <div className="flex items-center gap-2 text-xs font-bold text-[#2563EB] mb-2">
            <Sparkles className="w-4 h-4 text-[#2563EB]" />
            <span>The Bright Minds Teaching Philosophy</span>
          </div>
          <h3 className="font-serif font-bold text-xl text-[#1F2937] mb-3">
            Patient Explanation First, Mastery Second
          </h3>
          <p className="text-sm text-[#1F2937] leading-relaxed mb-4">
            We believe no student is "bad at a subject" — they simply haven't had the topic explained in a way that aligns with how they process information. At our SW15 tuition centre, we take the time to find the exact point where understanding breaks down, rebuild foundational knowledge patiently, and then practice until problem-solving becomes second nature.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-[#E5E7EB]">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
              <span className="text-xs font-medium text-[#1F2937]">Zero rush, patient individual pace</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
              <span className="text-xs font-medium text-[#1F2937]">Structured weekly exercise review</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
              <span className="text-xs font-medium text-[#1F2937]">Regular transparent parent updates</span>
            </div>
          </div>
        </div>

        {/* Subjects Grid */}
        <div className="space-y-4 mb-8">
          <h3 className="font-serif font-bold text-xl text-[#1F2937] mb-4">
            Subjects Taught
          </h3>
          
          {subjectList.map((subject, idx) => (
            <div
              key={idx}
              className="bg-[#FFFFFF] border border-[#E5E7EB] rounded-card p-5 hover:border-[#2563EB]/40 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                <h4 className="font-serif font-bold text-lg text-[#1F2937]">
                  {subject.name}
                </h4>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-blue-50 text-[#2563EB] border border-blue-100 self-start sm:self-auto">
                  {subject.levels}
                </span>
              </div>
              <p className="text-sm text-[#6B7280] font-sans mb-3 leading-relaxed">
                {subject.details}
              </p>
              <div className="flex flex-wrap gap-2 pt-2 border-t border-[#E5E7EB]">
                {subject.points.map((pt, pIdx) => (
                  <span
                    key={pIdx}
                    className="text-xs bg-[#F9FAFB] text-[#1F2937] border border-[#E5E7EB] px-2.5 py-1 rounded"
                  >
                    • {pt}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Box */}
        <div className="bg-[#FFFFFF] border border-[#E5E7EB] rounded-card p-6 text-center">
          <h3 className="font-serif font-bold text-xl text-[#1F2937] mb-2">
            Ready to give your child clear, patient guidance?
          </h3>
          <p className="text-sm text-[#6B7280] mb-4 max-w-md mx-auto">
            Book a consultation or check tutor availability for your specific subject requirements in SW15.
          </p>
          <button
            onClick={onCheckAvailabilityClick}
            className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold text-sm px-6 py-3 rounded-card transition-colors"
          >
            Check Tutor Availability
          </button>
        </div>

      </div>
    </section>
  );
};
