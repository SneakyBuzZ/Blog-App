import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
          <div className="avatar pt-2">
            <div className="w-8  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={useStore?.user?.avatar} />
            </div>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-neutral-800 border-none ex-text-gray">
          <DropdownMenuItem onClick={handleProfile}>Profile</DropdownMenuItem>
          <DropdownMenuItem>Theme</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

export default AvatarComp;
