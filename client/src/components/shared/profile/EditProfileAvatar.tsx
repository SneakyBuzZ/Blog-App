import useUserStore from "@/lib/store/userStore";
import EditAvatarForm from "./EditAvatarForm";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function EditProfileAvatar() {
  const useStore = useUserStore();
  return (
    <>
      <div className="flex gap-5 flex-col p-5 w-full justify-center">
        <div className="flex flex-col items-center">
          <Avatar className="w-[14rem] h-[14rem]">
            <AvatarImage
              className="  rounded-full object-cover object-center ex-editprofile-shadow"
              src={`${useStore?.user?.avatar}`}
            />
            <AvatarFallback>Profile</AvatarFallback>
          </Avatar>
        </div>
        <div className="px-10 ">
          <EditAvatarForm />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-heading text-3xl font-freeman">
            {useStore?.user?.fullName}
          </h1>
          <h3 className="text-content">{useStore?.user?.username}</h3>
        </div>
      </div>
    </>
  );
}

export default EditProfileAvatar;
