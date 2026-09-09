import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, ArrowRight, ShieldCheck } from 'lucide-react';
import { ServiceOffering } from '../types';

interface ServiceModalProps {
  offering: ServiceOffering | null;
  onClose: () => void;
  onInquireClick: (offeringName: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ offering, onClose, onInquireClick }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (offering) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [offering, onClose]);

  return (
    <AnimatePresence>
      {offering && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
          />

          {/* Modal Container */}
          <motion.div
            layoutId={`card-container-${offering.id}`}
            className="relative w-full max-w-[600px] bg-[#FFFFFF] border border-[#E5E7EB] rounded-card shadow-xl overflow-hidden z-10 my-auto"
          >
            {/* Header Image */}
            <div className="relative aspect-[16/9] w-full bg-[#F9FAFB] border-b border-[#E5E7EB]">
              <img
                src={offering.image}
                alt={offering.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <button
                onClick={onClose}
                className="absolute top-3 right-3 p-2 rounded-full bg-white/90 text-[#1F2937] hover:bg-white shadow-xs transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
                {offering.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-semibold px-2.5 py-0.5 rounded bg-white/90 text-[#2563EB] shadow-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Body Content */}
            <div className="p-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#2563EB] mb-1">
                <ShieldCheck className="w-4 h-4 text-[#2563EB]" />
                <span>Bright Minds SW15 Tuition Service</span>
              </div>
              <h3 className="font-serif font-bold text-2xl text-[#1F2937] mb-2">
                {offering.name}
              </h3>
              <p className="text-base text-[#6B7280] font-sans mb-5 leading-relaxed">
                {offering.description}
              </p>

              <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-card p-4 mb-5">
                <h4 className="font-serif font-bold text-sm text-[#1F2937] uppercase tracking-wider mb-3">
                  What This Includes:
                </h4>
                <ul className="space-y-2 text-sm text-[#1F2937]">
                  {offering.keyPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-3 bg-blue-50/60 border border-blue-100 rounded-card mb-6">
                <p className="text-xs text-[#1F2937]">
                  <strong className="text-[#2563EB]">Ideal for:</strong> {offering.idealFor}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => {
                    onClose();
                    onInquireClick(offering.name);
                  }}
                  className="w-full sm:flex-1 bg-[#2563EB] hover:bg-[#1D4ED8] active:bg-[#1E40AF] text-white font-semibold text-sm px-5 py-2.5 rounded-card transition-colors flex items-center justify-center gap-2"
                >
                  <span>Inquire for {offering.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-card border border-[#E5E7EB] text-sm font-medium text-[#6B7280] hover:text-[#1F2937] hover:bg-[#F9FAFB]"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
