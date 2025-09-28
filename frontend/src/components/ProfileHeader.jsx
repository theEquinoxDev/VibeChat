import { useState, useRef } from "react";
import { LogOutIcon, VolumeOffIcon, Volume2Icon } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from "../store/useChatStore";

const ProfileHeader = () => {
  const { logout, authUser, updateProfile } = useAuthStore();
  const { isSoundEnabled, toggleSound } = useChatStore();
  const [selectedImg, setSelectedImg] = useState(null);

  const fileinputRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if(!file) {
      return;
    }
    const reader = new FileReader()
    reader.readAsDataURL(file);
    reader.onloadend = async () => {
      const base64Image = reader.result
      setSelectedImg(base64Image)
      await updateProfile({profilePic: base64Image})
    }
  };
  return (
    <div className="p-6 border-b border-slate-700/50 ">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="avatar avatar-online">
            <button
              className="size-14 rounded-full overflow-hidden relative group"
              onClick={() => fileinputRef.current.click()}
            >
              <img
                src={selectedImg || authUser.profilePic || "/avatar.png"}
                alt="User Image"
                className="size-full object-cover cursor-pointer"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 group-hover:cursor-pointer flex items-center justify-center transition-opacity">
              <span className="text-white text-xs cursor-pointer">Change</span></div>
            </button>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              ref={fileinputRef}
              onChange={handleImageUpload}
            />
          </div>
          <div className="text-slate-200 font-medium text-base max-w-[180px] truncate">
            <h3>{authUser.fullName }</h3>
            <p className="text-slate-400 text-xs ">Online</p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <button className="text-slate-400 hover:text-slate-200 transition-colors" onClick={logout}>
            <LogOutIcon className="size-5 cursor-pointer" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
