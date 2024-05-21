// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import useUserStore from "@/lib/store/userStore";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function AvatarComp() {
  const useStore = useUserStore();

  return (
    <>
      <Avatar className="md:w-[3rem] md:h-[3rem] scale-90">
        <AvatarImage
          className="  rounded-full object-cover object-center ex-editprofile-shadow"
          src={`${useStore?.user?.avatar}`}
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </>
  );
}

export default AvatarComp;
