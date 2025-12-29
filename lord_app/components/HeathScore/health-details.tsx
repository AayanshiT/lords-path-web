type Member = {
  avatar: string;
  name: string;
  gender: string;
  age: number;
  score: number;
};

export default function MemberCard({ member }: { member: Member }) {
  return (
    <div className="border-2 border-gray-200 rounded-xl p-4 mb-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            src={member.avatar}
            className="w-12 h-12 rounded-full"
          />
          <div>
            <p className="font-semibold">{member.name}</p>
            <p className="text-sm text-gray-500">
              {member.gender} / {member.age} Years
            </p>
          </div>
        </div>

        <p className="font-bold text-xl">{member.score}</p>
      </div>
    </div>
  );
}
