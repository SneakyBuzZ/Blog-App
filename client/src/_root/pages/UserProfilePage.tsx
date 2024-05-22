import { Button } from "@/components/ui/button";
import { UserCog } from "lucide-react";
// import EditProfileForm from "@/components/shared/profile/EditProfileForm";

import ProfileAvatar from "@/components/shared/profile/ProfileAvatar";
import { useNavigate } from "react-router-dom";
import useUserStore from "@/lib/store/userStore";
import UserBlogs from "@/components/shared/blogs/UserBlogs";

function UserProfilePage() {
  const navigate = useNavigate();
  const useStore = useUserStore();

  return (
    <>
      <section className="text-gray-600 flex flex-col items-center w-full justify-center bg-neutral-100 dark:bg-black">
        <div className="flex flex-col items-center md:flex-row mx-auto md:items-start justify-around w-full md:px-20 lg:px-60 ">
          <ProfileAvatar />

          <Button
            onClick={() =>
              navigate(`/edit-profile/${useStore?.user?.username}`)
            }
            className=" bg-transparent mb-5 md:mt-10"
          >
            <span className="dark:ex-text-white text-black hover:underline ">
              Edit Profile
            </span>
            <UserCog className="h-4" color="gray" />
          </Button>
        </div>
        <div className="w-full dark:bg-[#0D0D0D] bg-neutral-100">
          <UserBlogs />
        </div>
      </section>
    </>
  );
}

export default UserProfilePage;
