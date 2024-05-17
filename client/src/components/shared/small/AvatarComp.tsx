import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import useUserStore from "@/lib/store/userStore";
import { useNavigate } from "react-router-dom";

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
          <Avatar>
            <AvatarImage src={useStore?.user?.avatar} />
            <AvatarFallback>user</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="ex-bg-gray border-none ex-text-gray">
          <DropdownMenuItem onClick={handleProfile}>Profile</DropdownMenuItem>
          <DropdownMenuItem>Theme</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

export default AvatarComp;
