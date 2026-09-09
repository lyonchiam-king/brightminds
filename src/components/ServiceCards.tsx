import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { serviceOfferings } from '../data/offerings';
import { ServiceOffering } from '../types';
import { ServiceModal } from './ServiceModal';

interface ServiceCardsProps {
  onInquireClick: (offeringName: string) => void;
}

export const ServiceCards: React.FC<ServiceCardsProps> = ({ onInquireClick }) => {
  const [selectedOffering, setSelectedOffering] = useState<ServiceOffering | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.25,
        ease: [0.25, 0.1, 0.25, 1],
        staggerChildren: 0.08
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.25 } }
  };

  return (
    <section className="py-12 bg-[#FFFFFF] border-b border-[#E5E7EB]" id="what-we-offer">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6">
        
        {/* Section Title */}
        <div className="mb-8 text-left">
          <span className="text-xs font-semibold text-[#2563EB] uppercase tracking-wider block mb-1">
            Structured Tuition Services
          </span>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#1F2937]">
            What We Offer
          </h2>
          <p className="text-sm sm:text-base text-[#6B7280] font-sans mt-1 max-w-xl">
            Targeted academic tuition tailored to SW15 students, delivering measurable grade progress and confidence.
          </p>
        </div>

        {/* 3 Service Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {serviceOfferings.map((offering) => (
            <motion.div
              key={offering.id}
              layoutId={`card-container-${offering.id}`}
              variants={cardVariants}
              onClick={() => setSelectedOffering(offering)}
              className="group cursor-pointer bg-[#FFFFFF] border border-[#E5E7EB] rounded-card overflow-hidden flex flex-col justify-between transition-all hover:border-[#2563EB]/60 focus-within:ring-2 focus-within:ring-[#2563EB]"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedOffering(offering);
                }
              }}
              role="button"
              aria-label={`View details for ${offering.name}`}
            >
              <div>
                {/* Image Area - Real generated photography */}
                <div className="aspect-[4/3] w-full overflow-hidden bg-[#F9FAFB] border-b border-[#E5E7EB] relative">
                  <img
                    src={offering.image}
                    alt={offering.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-103"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>

                {/* Card Content */}
                <div className="p-4">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="font-serif font-bold text-lg text-[#1F2937] group-hover:text-[#2563EB] transition-colors">
                      {offering.name}
                    </h3>
                    <ArrowUpRight className="w-4 h-4 text-[#6B7280] group-hover:text-[#2563EB] transition-colors shrink-0" />
                  </div>

                  <p className="text-xs text-[#6B7280] font-sans mb-3 line-clamp-2">
                    {offering.subtitle}
                  </p>

                  {/* Tags as Small Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {offering.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-medium px-2 py-0.5 rounded bg-[#F9FAFB] text-[#1F2937] border border-[#E5E7EB]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Tap Target */}
              <div className="px-4 py-2.5 bg-[#F9FAFB] border-t border-[#E5E7EB] flex items-center justify-between text-xs font-semibold text-[#2563EB]">
                <span>Tap for details & syllabus</span>
                <span className="underline group-hover:no-underline">More info &rarr;</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* Expanded Modal */}
      <ServiceModal
        offering={selectedOffering}
        onClose={() => setSelectedOffering(null)}
        onInquireClick={onInquireClick}
      />
    </section>
  );
};
