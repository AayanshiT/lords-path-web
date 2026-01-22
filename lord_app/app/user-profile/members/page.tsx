"use client";

import { useEffect, useState } from "react";
import { useUser } from "@/context/UserContext";
import AddMemberModal from "@/components/Userprofile/addmember";

export default function ProfilePage() {
  const { user } = useUser();

  const [members, setMembers] = useState<any[]>([]);
  const [open, setOpen] = useState(false);


  const handleAddMember = async (member: any) => {
    const res = await fetch("/api/user/members", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: user?.id,
        ...member,
      }),
    });

    const data = await res.json();
    setMembers(prev => [...prev, data.member]);
  };

  return (
    <>
      <button onClick={() => setOpen(true)}>Add Member</button>

      {members.map(m => (
        <div key={m.id}>{m.name}</div>
      ))}

      {open && (
        <AddMemberModal
          onAdd={handleAddMember}  
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
