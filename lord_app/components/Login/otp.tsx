'use client';
import { useState, useRef, useEffect } from 'react';
import { useRouter } from "next/navigation";


// Define props interface
interface HealthiansOTPProps {
  phone: string;
  generatedOTP: string;
  onBack: () => void;
}


export default function HealthiansOTP({ phone, generatedOTP, onBack }: HealthiansOTPProps) {

  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(28);
  const [whatsappAlerts, setWhatsappAlerts] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const slides = [
    { title: 'Cost Effective', subtitle: 'Honest Price Guaranteed', icon: '💰' },
    { title: 'Convenient', subtitle: 'Free Home Sample Collection', icon: '🚑' },
    { title: 'Reliable', subtitle: 'NABL Certified Labs', icon: '✓' },
    { title: 'Fast', subtitle: 'Reports in 24-48 Hours', icon: '⚡' }
  ];

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  useEffect(() => {
    if (generatedOTP) {
      setOtp(generatedOTP.split(""));
    }
  }, [generatedOTP]);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) value = value.slice(-1);

    if (/^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 5) inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLDivElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 6);
    if (/^\d+$/.test(pastedData)) {
      const newOtp = pastedData.split('').concat(Array(6).fill('')).slice(0, 6);
      setOtp(newOtp);
      const nextEmpty = newOtp.findIndex((val) => !val);
      inputRefs.current[nextEmpty !== -1 ? nextEmpty : 5]?.focus();
    }
  };

  // const handleSubmit = () => {
  //   const otpValue = otp.join('');
  //   if (otpValue.length === 6) {
  //     console.log('Verifying OTP:', otpValue);
  //     // Add your OTP verification logic here
  //   } else {
  //     alert('Please enter complete 6-digit OTP');
  //   }
  // };

  // const handleSubmit = () => {
  //   const enteredOtp = otp.join('');

  //   if (enteredOtp === generatedOTP) {
  //     alert('OTP Verified ✅ Login Success');
  //     router.push('/');
  //   } else {
  //     alert('Invalid OTP ❌');
  //   }
  // };

  const handleSubmit = async () => {
    const enteredOtp = otp.join("");

    // 1️⃣ OTP check (frontend only)
    if (enteredOtp !== generatedOTP) {
      alert("Invalid OTP ❌");
      return;
    }
    try {
      // 2️⃣ Call backend to check user exist or not
      const res = await fetch("/api/check-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phone }),
      });

      if (!res.ok) {
        throw new Error("API failed");
      }

      const data: { exists: boolean } = await res.json();
      console.log("User existence:", data.exists);
      console.log("User ", res);

      // 3️⃣ Route based on existence
      // if (data.exists) {
      //   router.push("/");
      // } else {
      //   router.push(`/signup`);
      // }

      if (data.exists) {
        router.push("/");
      } else {
        router.push(`/signup?phone=${encodeURIComponent(phone)}`);
      }

    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    }
  };

  const handleResend = () => {
    setTimer(28);
    setOtp(['', '', '', '', '', '']);
    inputRefs.current[0]?.focus();
    console.log('Resending OTP...');
  };

  return (
    <div className="p-12 flex flex-col justify-center w-full">

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Verify OTP
        </h1>

        <p className="text-center text-gray-600 mb-2">
          Please enter verification code (OTP) sent to
        </p>
        <p className="text-center text-gray-900 font-semibold text-lg">
          {phone}
        </p>

        <button
          onClick={onBack}
          className="mt-2 text-sm text-gray-500 underline"
        >
          Change Number
        </button>
      </div>

      {/* OTP inputs */}
      <div className="mb-4">
        <div className="flex gap-2 justify-center" onPaste={handlePaste}>
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el: any) => (inputRefs.current[index] = el)}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              maxLength={1}
              className="w-12 h-14 text-center text-2xl font-semibold border rounded-lg"
            />
          ))}
        </div>
      </div>

      {/* Timer */}
      <div className="text-center mb-6">
        {timer > 0 ? (
          <p>Resend OTP in {timer}s</p>
        ) : (
          <button onClick={handleResend} className="underline">
            Resend OTP
          </button>
        )}
      </div>

      {/* Submit */}
      <button
        onClick={handleSubmit}
        className="w-full bg-red-500 text-white py-3 rounded-lg"
      >
        Submit
      </button>
    </div>
  );

}
