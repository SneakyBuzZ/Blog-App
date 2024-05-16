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
  const currentUser = useStore.user;
  const navigate = useNavigate();
  const handleProfile = () => {
    navigate(`/profile/${currentUser.username}`);
  };
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="border-none focus:outline-none">
          <Avatar>
            <AvatarImage src={currentUser.avatar} />
            <AvatarFallback>user</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="ex-bg-gray border-none ex-text-gray">
          <DropdownMenuItem
            onClick={handleProfile}
            className=" hover:text-yellow-200"
          >
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

export default AvatarComp;
