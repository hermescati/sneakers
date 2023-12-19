import Profile from "@/components/svgs/icons/profile-icon.svg";

export default function ProfileMenu() {
  return (
    <div className="p-0.5 rounded-3xl bg-accent">
      <div className="bg-white rounded-3xl p-0.5">
        <div className="flex w-8 h-8 items-center justify-center bg-gray-300 rounded-3xl overflow-hidden">
          <Profile className="text-gray-800" width={20} height={20} />
        </div>
      </div>
    </div>
  );
}
