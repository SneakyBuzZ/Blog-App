import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import useUserStore from "@/lib/store/userStore";
import { useNavigate } from "react-router-dom";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function AvatarComp() {
  const useStore = useUserStore();

  const navigate = useNavigate();
  const handleProfile = () => {
    navigate(`/profile/${useStore?.user?.username}`);
  };
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="border-none focus:outline-none">
          <Avatar className="w-[3rem] h-[3rem]">
            <AvatarImage
              className="  rounded-full object-cover object-center ex-editprofile-shadow"
              src={`${useStore?.user?.avatar}`}
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="ex-box border-none">
          <DropdownMenuItem onClick={handleProfile}>Profile</DropdownMenuItem>
          <DropdownMenuItem>Theme</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

export default AvatarComp;
