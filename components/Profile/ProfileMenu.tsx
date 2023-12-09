import Image from "next/image";
import profilePic from "@/public/assets/icons/profile-icon.svg";

export default function ProfileMenu() {
  return (
    <div className="p-0.5 rounded-3xl bg-accent">
      <div className="bg-white rounded-3xl p-0.5">
        <div className="flex w-8 h-8 items-center justify-center bg-gray-300 rounded-3xl overflow-hidden">
          <Image src={profilePic} width={20} height={20} alt="profile-pic" />
        </div>
      </div>
    </div>
  );
}
