import useUserStore from "@/lib/store/userStore";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useNavigate } from "react-router-dom";

function AvatarComp() {
  const useStore = useUserStore();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/profile/${useStore?.user?.username}`);
  };

  return (
    <>
      <Avatar
        onClick={handleClick}
        className="md:w-[3rem] md:h-[3rem] scale-90 cursor-pointer"
      >
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
