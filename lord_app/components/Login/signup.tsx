"use client";

import { useRouter } from "next/navigation";
import { useState } from 'react';
import { useSearchParams } from "next/navigation";
import { useUser } from "@/context/UserContext";


export default function MedicalFormComponent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const { setUser } = useUser();
    const phone = searchParams.get("phone");
    console.log("Phone from URL:", phone);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        dateOfBirth: '',
        age: '',
        // phone: phone || '',
        gender: '',
        referralCode: ''
    });

    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        { title: 'Convenient', subtitle: 'Free Home Sample Collection' },
        { title: 'Reliable', subtitle: 'Accurate Test Results' },
        { title: 'Fast', subtitle: 'Quick Report Delivery' },
        { title: 'Affordable', subtitle: 'Best Price Guarantee' },
        { title: 'Professional', subtitle: 'Expert Consultations' }
    ];

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async () => {
        if (!formData.name || !formData.email || !formData.dateOfBirth) {
            alert("Please fill required fields");
            return;
        }

        // if (!phone) {
        //     alert("Phone number missing");
        //     return;
        // }

        try {
            const res = await fetch("/api/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: phone ? `+91${phone}` : "",
                    // gender: formData.gender,
                    // dob: formData.dateOfBirth,
                }),

            });
            console.log("res", res)


            const data = await res.json();
            console.log("Signup response:", data);

            if (!data.success) {
                alert("Signup failed");
                return;
            }

            const userData= {
                id: data.userId,
                name: formData.name,
                email: formData.email,
                phone: phone ? `+91${phone}` : "",
            };

            setUser(userData); 
            localStorage.setItem("token", data.token);

            alert("Signup successful ✅");
            router.push("/"); // or /home
        } catch (err) {
            console.error(err);
            alert("Something went wrong");
        }
    };


    const calculateAge = (dob: any) => {
        if (!dob) return '';
        const birthDate = new Date(dob);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    };

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const dob = e.target.value;

        setFormData(prev => ({
            ...prev,
            dateOfBirth: dob,
            age: calculateAge(dob).toString(),
        }));
    };


    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-center text-gray-600 text-lg mb-8">
                    Fill in the details below so that we can serve you better
                </h2>

                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                    <div className="grid md:grid-cols-2 gap-0">
                        {/* Left Side - Carousel */}
                        <div className="p-12 flex flex-col items-center justify-center relative" style={{ background: 'linear-gradient(to bottom right, #00368C, #002668)' }}>
                            {/* Ambulance Icon */}
                            <div className="bg-white rounded-full w-48 h-48 flex items-center justify-center mb-8 shadow-lg">
                                <div className="text-center">
                                    <div className="relative">
                                        <svg className="w-32 h-32 mx-auto" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            {/* Ambulance body */}
                                            <rect x="40" y="80" width="120" height="60" rx="8" fill="#e74c3c" />
                                            <rect x="40" y="100" width="60" height="40" fill="#c0392b" />

                                            {/* Windows */}
                                            <rect x="110" y="90" width="40" height="30" rx="4" fill="#3498db" />
                                            <rect x="50" y="90" width="40" height="30" rx="4" fill="#3498db" />

                                            {/* Cross symbol */}
                                            <circle cx="130" cy="105" r="18" fill="#e74c3c" />
                                            <rect x="125" y="95" width="10" height="20" rx="2" fill="white" />
                                            <rect x="120" y="100" width="20" height="10" rx="2" fill="white" />

                                            {/* Wheels */}
                                            <circle cx="70" cy="140" r="15" fill="#2c3e50" />
                                            <circle cx="70" cy="140" r="8" fill="#95a5a6" />
                                            <circle cx="130" cy="140" r="15" fill="#2c3e50" />
                                            <circle cx="130" cy="140" r="8" fill="#95a5a6" />

                                            {/* Light */}
                                            <circle cx="50" cy="90" r="6" fill="#f39c12" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Carousel Content */}
                            <div className="text-center text-white mb-8">
                                <h3 className="text-4xl font-bold mb-3">{slides[currentSlide].title}</h3>
                                <p className="text-xl opacity-90">{slides[currentSlide].subtitle}</p>
                            </div>

                            {/* Carousel Dots */}
                            <div className="flex gap-3">
                                {slides.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentSlide(index)}
                                        className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-white w-8' : 'bg-teal-300'
                                            }`}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Right Side - Form */}
                        <div className="p-12">
                            <h2 className="text-3xl font-bold text-gray-800 mb-8 border-b-4 border-[#FF3B3B] pb-2 inline-block">
                                Enter your Details
                            </h2>

                            <div className="space-y-6">
                                {/* Name */}
                                <div>
                                    <label className="block text-[#00368C] font-semibold mb-2">
                                        Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        placeholder="Enter full name"
                                        required
                                        className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-blue-500 outline-none transition-colors"
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block text-[#00368C] font-semibold mb-2">
                                        Email <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Enter email address"
                                        required
                                        className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-teal-500 outline-none transition-colors"
                                    />
                                </div>

                                {/* Date of Birth */}
                                <div>
                                    <label className="block text-[#00368C] font-semibold mb-2">
                                        Date of Birth <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="date"
                                        name="dateOfBirth"
                                        value={formData.dateOfBirth}
                                        onChange={handleDateChange}
                                        placeholder="Date of Birth"
                                        required
                                        className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-teal-500 outline-none transition-colors"
                                    />
                                </div>

                                {/* Age and Gender */}
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-[#00368C] font-semibold mb-2">
                                            Age(yrs.)
                                        </label>
                                        <input
                                            type="text"
                                            name="age"
                                            value={formData.age}
                                            readOnly
                                            placeholder="0"
                                            className="w-full px-4 py-3 border-b-2 border-gray-300 bg-gray-50 outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[#00368C] font-semibold mb-2">
                                            Gender
                                        </label>
                                        <div className="flex gap-6 pt-3">
                                            <label className="flex items-center gap-2 cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name="gender"
                                                    value="male"
                                                    checked={formData.gender === 'male'}
                                                    onChange={handleInputChange}
                                                    className="w-5 h-5 text-[#00368C]"
                                                />
                                                <span className="text-gray-700">Male</span>
                                            </label>
                                            <label className="flex items-center gap-2 cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name="gender"
                                                    value="female"
                                                    checked={formData.gender === 'female'}
                                                    onChange={handleInputChange}
                                                    className="w-5 h-5 text-[#00368C]"
                                                />
                                                <span className="text-gray-700">Female</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                {/* <div>
                                    <label className="block text-[#00368C] font-semibold mb-2">
                                        Referral Code (Optional)
                                    </label>
                                    <input
                                        type="text"
                                        name="referralCode"
                                        value={formData.referralCode}
                                        onChange={handleInputChange}
                                        placeholder="Enter Referral Code"
                                        className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-blue-500 outline-none transition-colors"
                                    />
                                </div> */}

                                {/* Referral Code */}
                                <div>
                                    <label className="block text-[#00368C] font-semibold mb-2">
                                        Referral Code (Optional)
                                    </label>
                                    <input
                                        type="text"
                                        name="referralCode"
                                        value={formData.referralCode}
                                        onChange={handleInputChange}
                                        placeholder="Enter Referral Code"
                                        className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-blue-500 outline-none transition-colors"
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="button"
                                    onClick={handleSubmit}
                                    className="w-full bg-[#FF3B3B] hover:from-red-600 hover:to-red-700 text-white font-semibold py-4 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 mt-8"
                                >
                                    <span className="text-lg">Update Details</span>
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}