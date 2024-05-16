import { Button } from "@/components/ui/button";
import { UserCog } from "lucide-react";
// import EditProfileForm from "@/components/shared/profile/EditProfileForm";

import ProfileAvatar from "@/components/shared/profile/ProfileAvatar";
import { useNavigate } from "react-router-dom";
import useUserStore from "@/lib/store/userStore";

function UserProfilePage() {
  const navigate = useNavigate();
  const useStore = useUserStore();
  return (
    <>
      <section className="text-gray-600 body-font flex flex-col w-full h-[20rem] justify-center ex-bg-darkgray">
        <div className="flex mx-auto items-start justify-around w-full px-20 lg:px-60 ">
          <ProfileAvatar />

          <Button
            onClick={() =>
              navigate(`/edit-profile/${useStore?.user?.username}`)
            }
            className=" bg-transparent hover:underline mt-9"
          >
            <span>Edit Profile</span>
            <UserCog className="h-4" />
          </Button>
        </div>
      </section>
    </>
  );
}

export default UserProfilePage;
