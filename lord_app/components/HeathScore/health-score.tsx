'use client';
import { useState } from 'react';
import React from 'react';
import MemberCard from './health-details';
import SimpleMemberForm from './health-form';
import { useRouter } from "next/navigation";
import OrgansList from './health-organs';


interface Member {
    id: string;
    name: string;
    gender: string;
    age: number;
    score: number;
    avatar: string;
}

export default function HealthKarmaAssessment() {
    const [showForm, setShowForm] = useState(true);
    const [memberData, setMemberData] = useState<any>(null);
    const [showOrgans, setShowOrgans] = useState(false);

    const router = useRouter();
    const member: Member = {
        id: '1',
        name: 'Aayanshi Sharma',
        gender: 'Female',
        age: 24,
        score: 49,
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
    };

    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-8">
            <div className="max-w-7xl mx-auto">
                {/* Breadcrumb */}
                <nav className="text-sm mb-8">
                    <span className="text-gray-600">Home</span>
                    <span className="mx-2 text-gray-400">›</span>
                    <span className="text-gray-900">HealthKarma</span>
                </nav>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-6">
                    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
                        <div className="flex justify-center mb-8">
                            <div className="relative w-80 h-48">
                                <div className="w-full h-full flex items-center justify-center bg-white rounded-lg">
                                    <img
                                        src="/meter.jpg"
                                        alt="Health Score Gauge"
                                        className="w-400 h-full object-contain"
                                    />
                                </div>
                            </div>
                        </div>


                        {/* Title and Description */}
                        <div className="space-y-4">
                            <h1 className="text-xl md:text-2xl font-semibold text-gray-900 leading-tight">
                                Check your Personalised HealthKarma score
                                for free and get a detailed Health report
                            </h1>
                            <div className="w-16 h-1 bg-orange-500"></div>
                            <p className="text-gray-600 font-medium leading-relaxed text-sm md:text-base">
                                It helps in understand the risk areas & recommends medical check ups,
                                comparative health score among your peers based on your lifestyle
                                using artificial intelligence & sophisticated algorithms.
                            </p>
                        </div>
                    </div>

                    {/* Right Section */}

                    <div className="bg-white p-6 rounded-xl">
                        <h2 className="font-semibold text-xl mb-4">
                            Choose the member
                        </h2>

                        {/* STEP 1: FORM */}
                        {showForm && (
                            <SimpleMemberForm
                                onSuccess={(data) => {
                                    setMemberData(data);
                                    setShowForm(false);
                                }}
                            />
                        )}

                        {/* STEP 2: CARD + CONTINUE */}
                        {!showForm && memberData && !showOrgans && (
                            <>
                                <MemberCard
                                    member={{
                                        avatar:
                                            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
                                        name: memberData.name,
                                        gender: "Female",
                                        age: Number(memberData.age),
                                        score: 0,
                                    }}
                                />

                                <button
                                    onClick={() => setShowOrgans(true)}
                                    className="w-full bg-gray-200 py-3 rounded mt-4"
                                >
                                    Continue →
                                </button>
                            </>


                        )}
                        {showOrgans && (
                            <OrgansList />
                        )}

                    </div>

                </div>
            </div>
        </div>
    );
}