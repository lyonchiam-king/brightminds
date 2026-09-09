import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Star, Quote, CheckCircle } from 'lucide-react';
import { proofPoints } from '../data/offerings';

export const TrustStrip: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.25,
        ease: [0.25, 0.1, 0.25, 1],
        staggerChildren: 0.06
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } }
  };

  return (
    <section className="py-8 bg-[#F9FAFB] border-b border-[#E5E7EB]">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-xs font-semibold text-[#1F2937]">
              Verified SW15 Parent Feedback
            </span>
          </div>
          <span className="text-xs text-[#6B7280]">Google Business Reviews</span>
        </div>

        {/* 3 Proof Points Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-3"
        >
          {proofPoints.map((point, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-[#FFFFFF] border border-[#E5E7EB] rounded-card p-4 flex flex-col justify-between"
            >
              <div>
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-semibold bg-blue-50 text-[#2563EB] mb-2 border border-blue-100">
                  <CheckCircle className="w-3 h-3 text-[#2563EB]" />
                  <span>{point.badge}</span>
                </div>
                <blockquote className="font-serif font-bold text-base text-[#1F2937] leading-snug mb-1.5">
                  "{point.quote}"
                </blockquote>
                <p className="text-xs text-[#6B7280] font-sans">
                  {point.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
