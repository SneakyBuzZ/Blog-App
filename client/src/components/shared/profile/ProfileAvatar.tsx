import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import useUserStore from "@/lib/store/userStore";

function ProfileAvatar() {
  const useStore = useUserStore();
  return (
    <>
      <div className="flex gap-5  p-5 ">
        <div className="flex flex-col items-center ">
          <Avatar className="w-[7rem] h-[7rem]">
            <AvatarImage
              className="  rounded-full object-cover object-center ex-editprofile-shadow"
              src={`${useStore?.user?.avatar}`}
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>

        <div className="flex flex-col justify-center ">
          <h1 className="ex-text-white text-3xl">{useStore?.user?.fullName}</h1>
          <h3>{useStore?.user?.username}</h3>
          <h5 className="ex-text-yellow">45 Blogs</h5>
        </div>
      </div>
    </>
  );
}

export default ProfileAvatar;
