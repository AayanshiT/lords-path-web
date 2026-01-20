"use client";

import { Pencil, Save, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useUser } from "@/context/UserContext";
import AddMemberModal from "@/components/Userprofile/addmember"

export default function UserProfile() {
    const { user, setUser } = useUser();
    const [isEditing, setIsEditing] = useState(false);
    const [members, setMembers] = useState<any[]>([]);
    const [showMemberModal, setShowMemberModal] = useState(false);


    const [form, setForm] = useState({
        name: "",
        street: "",
        street2: "",
        city: "",
        state: "",
        zip: "",
        country: "",
    });


    /* Populate form when user loads */
    useEffect(() => {
        if (user) {
            setForm({
                name: user.name || "",
                street: user.street || "",
                street2: user.street2 || "",
                city: user.city || "",
                state: user.state || "",
                zip: user.zip || "",
                country: user.country || "",
            });
        }
    }, [user]);


    if (!user) return <p className="text-center mt-10">Loading...</p>;

    /* Handle input */
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    /* Save profile */
    const handleSave = async () => {
        try {
            const res = await fetch("/api/user/userprofile", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    user_id: user.id,
                    name: form.name,
                    street: form.street,
                    street2: form.street2,
                    city: form.city,
                    state: form.state,
                    zip: form.zip,
                    country: form.country,
                }),
            });

            if (!res.ok) throw new Error("API failed");

            // ✅ DO NOT trust API response blindly
            setUser({
                ...user,
                name: form.name,
                street: form.street,
                street2: form.street2,
                city: form.city,
                state: form.state,
                zip: form.zip,
                country: form.country,
            });

            setIsEditing(false);
        } catch (error) {
            console.error("Profile update failed:", error);
        }
    };

    const handleAddMember = async (member: any) => {
        try {
            const res = await fetch("/api/user/members", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    user_id: user.id,
                    ...member, // name, email, phone
                }),
            });

            const data = await res.json();

            if (!res.ok) throw new Error(data.message || "Failed to add member");

            // Add member to local state
            setMembers((prev) => [...prev, data.member]);
        } catch (error) {
            console.error("Add member failed:", error);
        }
    };


    return (
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-[#00368C] px-6 py-4 text-white font-semibold text-lg">
                Edit Profile
            </div>

            <div className="p-6">
                {/* Header */}
                <div className="flex justify-between items-center">
                    <div className="flex gap-6 items-center">
                        <div className="w-24 h-24 rounded-full border-4 border-[#FF3B3B] flex items-center justify-center text-4xl font-semibold text-gray-300">
                            {user.name?.charAt(0)}
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold">
                                Hi, {user.name}
                            </h2>
                            <p className="text-gray-500">{user.email}</p>
                        </div>
                    </div>

                    {!isEditing ? (
                        <button
                            onClick={() => setIsEditing(true)}
                            className="bg-[#FF3B3B] text-white px-5 py-2 rounded-full flex items-center gap-2"
                        >
                            <Pencil size={16} /> Edit
                        </button>
                    ) : (
                        <div className="flex gap-2">
                            <button
                                onClick={handleSave}
                                className="bg-green-600 text-white px-5 py-2 rounded-full flex items-center gap-2"
                            >
                                <Save size={16} /> Save
                            </button>
                            <button
                                onClick={() => setIsEditing(false)}
                                className="bg-gray-300 px-5 py-2 rounded-full flex items-center gap-2"
                            >
                                <X size={16} /> Cancel
                            </button>
                        </div>
                    )}
                </div>

                {/* Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                    <Field label="Name" value={form.name} name="name" edit={isEditing} onChange={handleChange} />
                    <StaticField label="Mobile Number" value={user.phone} />
                    <StaticField label="Email Id" value={user.email} />

                    {/* <Field label="Gender" value={form.gender} name="gender" edit={isEditing} onChange={handleChange} />
                    <Field label="Date of Birth" value={form.dob} name="dob" edit={isEditing} onChange={handleChange} type="date" />
                    <Field label="Age" value={age} name="age" edit={isEditing} onChange={handleChange} /> */}

                    <Field label="Street" value={form.street} name="street" edit={isEditing} onChange={handleChange} />
                    <Field label="Street 2" value={form.street2} name="street2" edit={isEditing} onChange={handleChange} />
                    <Field label="City" value={form.city} name="city" edit={isEditing} onChange={handleChange} />
                    <Field label="State" value={form.state} name="state" edit={isEditing} onChange={handleChange} />
                    <Field label="ZIP" value={form.zip} name="zip" edit={isEditing} onChange={handleChange} />
                    <Field label="Country" value={form.country} name="country" edit={isEditing} onChange={handleChange} />

                </div>


                {/* ================= MEMBERS SECTION ================= */}
                <div className="mt-16">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold">My Family & Friends</h3>
                        <button
                            onClick={() => setShowMemberModal(true)}
                            className="bg-[#FF3B3B] text-white px-4 py-2 rounded-full"
                        >
                            + Add Member
                        </button>
                    </div>

                    {members.length === 0 ? (
                        <p className="text-gray-500">No members added yet</p>
                    ) : (
                        <div className="space-y-4">
                            {members.map((m, i) => (
                                <div key={i} className="bg-gray-50 p-4 rounded-lg shadow flex flex-col">
                                    <p className="font-semibold">{m.name}</p>
                                    {/* <p className="text-sm text-gray-600">{m.email}</p> */}
                                    <p className="text-sm text-gray-600">{m.phone}</p>
                                </div>
                            ))}

                        </div>
                    )}
                </div>

                {/* Render AddMemberModal */}
                {showMemberModal && (
                    <AddMemberModal
                        onClose={() => setShowMemberModal(false)}
                        onAdd={(member) => setMembers((prev) => [...prev, member])}
                    />
                )}
            </div>


        </div>
    );
}

/* Editable field */
function Field({
    label,
    value,
    name,
    edit,
    onChange,
    type = "text",
}: any) {
    return (
        <div>
            <p className="text-sm font-semibold text-gray-700">{label}</p>

            {edit ? (
                <input
                    type={type}
                    name={name}
                    value={value ?? ""}
                    onChange={onChange}
                    className="mt-2 w-full border-b outline-none pb-1"
                />
            ) : (
                <p className="mt-2 text-gray-600 border-b pb-2">
                    {value || "-"}
                </p>
            )}
        </div>
    );
}


/* Read-only field */
function StaticField({ label, value }: { label: string; value?: string }) {
    return (
        <div>
            <p className="text-sm font-semibold text-gray-700">{label}</p>
            <p className="mt-2 text-gray-600 border-b pb-2">
                {value || "-"}
            </p>
        </div>
    );
}
