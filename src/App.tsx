/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ActiveTab, InquiryState } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { ServiceCards } from './components/ServiceCards';
import { HowItWorks } from './components/HowItWorks';
import { InquiryBuilder } from './components/InquiryBuilder';
import { SubjectsApproach } from './components/SubjectsApproach';
import { LocationContact } from './components/LocationContact';
import { MobileFloatingBar } from './components/MobileFloatingBar';
import { Footer } from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [selectedInquiry, setSelectedInquiry] = useState<Partial<InquiryState>>({});

  const scrollToInquiry = (prefillSubject?: string) => {
    setActiveTab('home');
    if (prefillSubject) {
      setSelectedInquiry((prev) => ({ ...prev, subject: prefillSubject }));
    }
    setTimeout(() => {
      const el = document.getElementById('inquiry-composer');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F9FAFB] text-[#1F2937] font-sans">
      {/* Navigation Header */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onCheckAvailabilityClick={() => scrollToInquiry()}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <>
            {/* 1. Hero -- Static overlay */}
            <Hero onCheckAvailability={() => scrollToInquiry()} />

            {/* 2. Trust Strip -- Proof points from verified SW15 reviews */}
            <TrustStrip />

            {/* 3. Service Cards -- Grid of 3 (Private Tuition, Home Learning, Organized Lessons) */}
            <ServiceCards
              onInquireClick={(offeringName) => scrollToInquiry(offeringName)}
            />

            {/* 4. How It Works -- Timeline + Signature Moment Confidence Meter */}
            <HowItWorks />

            {/* 5. Inquiry Builder -- Interactive WhatsApp & direct composer */}
            <InquiryBuilder
              initialState={selectedInquiry}
              onInquirySubmitted={() => {
                // Keep smooth UX state
              }}
            />

            {/* 6. Location & Contact -- Split layout */}
            <LocationContact />
          </>
        )}

        {activeTab === 'subjects' && (
          <SubjectsApproach
            onCheckAvailabilityClick={() => scrollToInquiry()}
          />
        )}

        {activeTab === 'contact' && (
          <LocationContact />
        )}
      </main>

      {/* Footer */}
      <Footer onNavClick={(tab) => {
        setActiveTab(tab);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }} />

      {/* Floating Bar on Mobile (Fixed to bottom, appears after scrolling past hero) */}
      <MobileFloatingBar onAvailabilityClick={() => scrollToInquiry()} />
    </div>
  );
}
