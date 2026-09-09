import React, { useState } from 'react';
import { MapPin, Phone, Clock, Copy, Check, MessageSquare, ExternalLink } from 'lucide-react';

export const LocationContact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const address = "6A Frensham Dr, London SW15 3EA, UK";
  const phone = "+44 7988 324518";
  const mapsUrl = "https://maps.google.com/?cid=1376412234242527827&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA";

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phone);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-12 bg-[#F9FAFB] border-b border-[#E5E7EB]" id="location-contact">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-8 text-left">
          <span className="text-xs font-semibold text-[#2563EB] uppercase tracking-wider block mb-1">
            Tuition Centre Premises
          </span>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#1F2937]">
            Location & Contact
          </h2>
          <p className="text-sm sm:text-base text-[#6B7280] font-sans mt-1">
            Bright Minds Tutors - Private Tuition Centre in London SW15.
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          
          {/* Details Card */}
          <div className="bg-[#FFFFFF] border border-[#E5E7EB] rounded-card p-6 space-y-5">
            
            {/* Address */}
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#6B7280] uppercase tracking-wider mb-1">
                <MapPin className="w-4 h-4 text-[#2563EB]" />
                <span>Centre Address</span>
              </div>
              <p className="font-serif font-bold text-base text-[#1F2937] mb-1">
                Bright Minds Tutors
              </p>
              <p className="text-sm text-[#1F2937] leading-snug">
                {address}
              </p>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#2563EB] hover:underline mt-2"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <hr className="border-[#E5E7EB]" />

            {/* Phone Number with Tap to Copy */}
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#6B7280] uppercase tracking-wider mb-1">
                <Phone className="w-4 h-4 text-[#2563EB]" />
                <span>Direct Telephone</span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={`tel:${phone.replace(/\s+/g, '')}`}
                  className="font-sans font-bold text-lg text-[#1F2937] hover:text-[#2563EB] font-tabular transition-colors"
                >
                  {phone}
                </a>
                <button
                  onClick={handleCopyPhone}
                  className="px-2 py-1 bg-[#F9FAFB] border border-[#E5E7EB] rounded text-xs text-[#6B7280] hover:text-[#1F2937] flex items-center gap-1 transition-colors"
                  aria-label="Copy phone number"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-600 font-semibold">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <p className="text-xs text-[#6B7280] mt-1">
                Tap to call directly or copy number to dial.
              </p>
            </div>

            <hr className="border-[#E5E7EB]" />

            {/* Opening Hours */}
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#6B7280] uppercase tracking-wider mb-2">
                <Clock className="w-4 h-4 text-[#2563EB]" />
                <span>Centre Hours</span>
              </div>
              <ul className="text-xs text-[#1F2937] space-y-1 font-tabular">
                <li className="flex justify-between py-1 border-b border-[#F9FAFB]">
                  <span>Monday - Friday</span>
                  <span className="font-semibold">3:30 PM – 8:00 PM</span>
                </li>
                <li className="flex justify-between py-1 border-b border-[#F9FAFB]">
                  <span>Saturday</span>
                  <span className="font-semibold">9:00 AM – 5:00 PM</span>
                </li>
                <li className="flex justify-between py-1 text-[#6B7280]">
                  <span>Sunday</span>
                  <span>Closed [TO CONFIRM]</span>
                </li>
              </ul>
            </div>

            {/* WhatsApp Quick Link */}
            <div className="pt-2">
              <a
                href={`https://wa.me/447988324518?text=${encodeURIComponent('Hello Bright Minds Tutors! I would like to inquire about private tuition in London SW15.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold px-4 py-2.5 rounded-card flex items-center justify-center gap-2 transition-colors"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp (+44 7988 324518)</span>
              </a>
            </div>

          </div>

          {/* Map View Frame */}
          <div className="bg-[#FFFFFF] border border-[#E5E7EB] rounded-card overflow-hidden h-[380px] flex flex-col">
            <div className="p-3 bg-[#F9FAFB] border-b border-[#E5E7EB] flex items-center justify-between text-xs text-[#6B7280]">
              <span className="font-semibold text-[#1F2937]">London SW15 Map View</span>
              <span>6A Frensham Dr</span>
            </div>
            <div className="flex-1 w-full bg-[#E5E7EB] relative">
              <iframe
                title="Bright Minds Tutors Google Maps Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2486.257361280387!2d-0.2452099!3d51.4533967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760ee022a10659%3A0x131f4a13d74944fb!2s6A%20Frensham%20Dr%2C%20London%20SW15%203EA%2C%20UK!5e0!3m2!1sen!2suk!4v1710000000000!5m2!1sen!2suk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
