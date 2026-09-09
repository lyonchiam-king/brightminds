import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MessageSquare } from 'lucide-react';

interface MobileFloatingBarProps {
  onAvailabilityClick: () => void;
}

export const MobileFloatingBar: React.FC<MobileFloatingBarProps> = ({ onAvailabilityClick }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show once scrolled past hero (~350px)
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const rawWhatsAppText = "Hello Bright Minds Tutors! I am looking for private tuition in London SW15 for my child. Please let me know your tutor availability.";
  const whatsappUrl = `https://wa.me/447988324518?text=${encodeURIComponent(rawWhatsAppText)}`;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#FFFFFF] border-t border-[#E5E7EB] shadow-lg px-4 py-2.5"
          style={{ paddingBottom: 'calc(0.625rem + env(safe-area-inset-bottom, 0px))' }}
        >
          <div className="max-w-[800px] mx-auto flex items-center gap-2">
            
            {/* Direct Call Button */}
            <a
              href="tel:+447988324518"
              className="flex-1 bg-[#FFFFFF] border border-[#E5E7EB] hover:bg-[#F9FAFB] active:bg-gray-100 text-[#1F2937] font-semibold text-xs sm:text-sm py-2.5 px-3 rounded-card flex items-center justify-center gap-1.5 transition-colors shadow-xs"
            >
              <Phone className="w-4 h-4 text-[#2563EB] shrink-0" />
              <span className="font-tabular">Call Tutor</span>
            </a>

            {/* WhatsApp Chat Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-xs sm:text-sm py-2.5 px-3 rounded-card flex items-center justify-center gap-1.5 transition-colors shadow-xs"
            >
              <MessageSquare className="w-4 h-4 fill-white shrink-0" />
              <span>WhatsApp Chat</span>
            </a>

            {/* Availability Check CTA */}
            <button
              onClick={onAvailabilityClick}
              className="bg-[#2563EB] hover:bg-[#1D4ED8] active:bg-[#1E40AF] text-white font-semibold text-xs py-2.5 px-3 rounded-card transition-colors shrink-0"
            >
              Check Availability
            </button>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
