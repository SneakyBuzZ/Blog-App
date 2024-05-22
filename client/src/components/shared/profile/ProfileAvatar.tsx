import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getUserBlogsCount } from "@/lib/api/blogApi";

import useUserStore from "@/lib/store/userStore";
import { useEffect, useState } from "react";

function ProfileAvatar() {
  const useStore = useUserStore();
  const [userBlogsCount, setUserBlogsCount] = useState<number>(0);
  useEffect(() => {
    getUserBlogsCount().then((count) => {
      setUserBlogsCount(count);
    });
  }, []);
  return (
    <>
      <div className="flex flex-col  md:flex-row gap-5 p-5 w-full">
        <div className="flex flex-col items-center ">
          <Avatar className="w-[7rem] h-[7rem]">
            <AvatarImage
              className="  rounded-full object-cover object-center ex-editprofile-shadow"
              src={`${useStore?.user?.avatar}`}
            />
            <AvatarFallback>{useStore?.user?.username}</AvatarFallback>
          </Avatar>
        </div>

        <div className="flex flex-col justify-center w-full">
          <h1 className="text-3xl w-full font-freeman text-heading text-center md:text-start">
            {useStore?.user?.fullName}
          </h1>
          <h3 className="text-content text-center md:text-start">
            {useStore?.user?.username}
          </h3>
          <h5 className="dark:ex-text-yellow font-semibold text-black text-center md:text-start">
            {userBlogsCount} Blogs
          </h5>
        </div>
      </div>
    </>
  );
}

export default ProfileAvatar;
