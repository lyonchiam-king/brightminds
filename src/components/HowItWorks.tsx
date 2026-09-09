import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'motion/react';
import { MessageSquareText, CalendarCheck, TrendingUp, CheckCircle, Sparkles } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Scroll tracking for Signature Moment: The Confidence Meter
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 70%', 'end 50%']
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });
  const meterWidth = useTransform(smoothProgress, [0, 1], ['5%', '100%']);
  const meterPercentage = useTransform(smoothProgress, [0, 1], [10, 100]);

  const steps = [
    {
      num: '01',
      title: 'Check Tutor Availability & Share Needs',
      description: 'Select your child’s Year Group, Subject, and specific study goal. It takes less than 60 seconds.',
      icon: MessageSquareText,
      tag: 'Step 1: Contact'
    },
    {
      num: '02',
      title: 'Organized Tailored Study Plan',
      description: 'We match your child with a patient tutor who maps out clear, structured weekly topic objectives.',
      icon: CalendarCheck,
      tag: 'Step 2: Plan'
    },
    {
      num: '03',
      title: 'Visible Improvement & Exam Confidence',
      description: 'Clear explanations lead to measurable progress in school marks, topic understanding, and exam readiness.',
      icon: TrendingUp,
      tag: 'Step 3: Growth'
    }
  ];

  return (
    <section className="py-12 bg-[#F9FAFB] border-b border-[#E5E7EB]" id="how-it-works" ref={containerRef}>
      <div className="max-w-[800px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-6 text-left">
          <span className="text-xs font-semibold text-[#2563EB] uppercase tracking-wider block mb-1">
            Simple 3-Step Process
          </span>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#1F2937]">
            How It Works
          </h2>
          <p className="text-sm sm:text-base text-[#6B7280] font-sans mt-1">
            From your first inquiry to visible academic confidence in London SW15.
          </p>
        </div>

        {/* SIGNATURE MOMENT: The Confidence Meter */}
        <div className="sticky top-16 z-20 bg-[#FFFFFF] border border-[#E5E7EB] rounded-card p-3.5 mb-8 shadow-xs">
          <div className="flex items-center justify-between text-xs font-bold text-[#1F2937] mb-2">
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#2563EB]" />
              <span>SIGNATURE METHOD: The Confidence Meter</span>
            </div>
            <span className="text-[#2563EB] font-tabular">
              {shouldReduceMotion ? '100% Progress' : 'Visible Improvement'}
            </span>
          </div>
          
          {/* Progress track */}
          <div className="w-full h-3 bg-[#F9FAFB] border border-[#E5E7EB] rounded-full overflow-hidden relative">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 to-[#2563EB] rounded-full"
              style={{ width: shouldReduceMotion ? '100%' : meterWidth }}
            />
          </div>

          <div className="flex justify-between items-center text-[11px] text-[#6B7280] mt-1.5 font-medium">
            <span>1. Initial Inquiry</span>
            <span>2. Structured Plan</span>
            <span className="text-[#2563EB] font-bold">3. Visible Mastery</span>
          </div>
        </div>

        {/* Timeline Steps */}
        <div className="space-y-4 relative">
          {/* Vertical connecting line */}
          <div className="absolute left-[23px] top-6 bottom-6 w-0.5 bg-[#E5E7EB] hidden sm:block" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.25, delay: index * 0.08 }}
                className="relative bg-[#FFFFFF] border border-[#E5E7EB] rounded-card p-5 sm:p-6 flex flex-col sm:flex-row items-start gap-4"
              >
                {/* Step Number Icon */}
                <div className="shrink-0 w-12 h-12 rounded-card bg-blue-50 border border-blue-100 flex items-center justify-center text-[#2563EB] font-serif font-bold text-lg z-10">
                  {step.num}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[#F9FAFB] text-[#2563EB] border border-[#E5E7EB]">
                      {step.tag}
                    </span>
                    <Icon className="w-4 h-4 text-[#6B7280]" />
                  </div>
                  <h3 className="font-serif font-bold text-lg text-[#1F2937] mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#6B7280] font-sans leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
