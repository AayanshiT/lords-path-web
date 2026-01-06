'use client';

import { useState } from 'react';
import HealthiansOTP from '@/components/Login/otp';
import TopBar from '@/components/TopBar';
import Footer from '@/components/Footer';
import FooterSection from '@/components/FooterSection';
import Bottom from '@/components/bottom';

export default function LoginPage() {
  const [showOTP, setShowOTP] = useState(false);
  const [mobileNumber, setMobileNumber] = useState('+91');
  const [generatedOTP, setGeneratedOTP] = useState('');


  return (
    <>
      <TopBar />
        <HealthiansOTP
          phone={mobileNumber}
          generatedOTP={generatedOTP} 
          onBack={() => setShowOTP(false)} // Go back to number input
        />
      <FooterSection />
      <Footer />
      <Bottom />
    </>
  );
}
