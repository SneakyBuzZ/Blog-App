import { NavLink, useNavigate } from "react-router-dom";
import navItems from "../../lib/constants/navItems";
import { Button } from "@/components/ui/button";
import useUserStore from "@/lib/store/userStore";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import AvatarComp from "./small/AvatarComp";
import ThemeToggler from "./small/ThemeToggler";
import { useLogoutUserQuery } from "@/lib/react-query/queriesAndMutation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

import { Menu } from "lucide-react";
import useThemeStore from "@/lib/store/themeStore";
import { useEffect, useState } from "react";

function HeaderComp() {
  const { theme } = useThemeStore();
  const [color, setColor] = useState<string>("#ffffff");
  useEffect(() => {
    if (theme === "light") {
      setColor("#0D0D0D");
    } else {
      setColor("#ffffff");
    }
  }, [theme]);

  const useStore = useUserStore();
  const navigate = useNavigate();
  const {
    mutateAsync: logoutUser,
    isPending: isLoading,
    error,
  } = useLogoutUserQuery();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleRegister = () => {
    navigate("/register");
  };

  const handleLogout = async () => {
    useStore?.reset?.();
    await logoutUser();
    navigate("/");
    console.log(error);
  };

  const handleProfile = () => {
    navigate(`/profile/${useStore?.user?.username}`);
  };

  return (
    <>
      <header className=" body-font dark:border-none border-b border-b-neutral-300">
        <div className="container mx-auto flex  items-center justify-between my-2">
          <NavLink
            to="/"
            className="flex title-font font-medium items-center text-gray-900  md:mb-0"
          >
            <img className=" h-10 md:h-12" src="/exwave.png" alt="" />
          </NavLink>
          <nav className=" flex-wrap items-center text-base w-2/3 gap-5 hidden lg:flex">
            {navItems.map((eachItem) => (
              <li key={eachItem.route} className="h-full flex items-center">
                <NavLink
                  to={eachItem.route}
                  className={({ isActive }) =>
                    `${isActive ? " navItems-active " : " navItems"}
                            mr-5 cursor-pointer active:scale-95`
                  }
                >
                  <h1 className="text-md lg:text-lg ">{eachItem.label}</h1>
                </NavLink>
              </li>
            ))}
          </nav>

          {useStore.isUserLoggedIn ? (
            <>
              <div className="flex items-center gap-1 md:gap-7">
                <ThemeToggler />
                <AlertDialog>
                  <AlertDialogTrigger className="bg-neutral-800 hidden md:block py-2 px-4 rounded-md text-gray-200">
                    Logout
                  </AlertDialogTrigger>
                  <AlertDialogContent className="dark:bg-neutral-800 bg-neutral-100 border-none">
                    <AlertDialogHeader>
                      <AlertDialogTitle className="text-heading font-freeman dark:ex-text-yellow">
                        Are you sure?
                      </AlertDialogTitle>
                      <AlertDialogDescription className="text-heading">
                        Do you want to log out from your account.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel className="bg-neutral-200 hover:bg-neutral-200 text-neutral-700 dark:bg-neutral-900 dark:text-neutral-200">
                        Cancel
                      </AlertDialogCancel>
                      <AlertDialogAction
                        onClick={handleLogout}
                        className="bg-neutral-700 hover:bg-neutral-700 text-yellow-400"
                      >
                        {isLoading ? (
                          <>
                            <span className="loading loading-spinner text-warning"></span>
                          </>
                        ) : (
                          "Logout"
                        )}
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
                <AvatarComp />
                <DropdownMenu>
                  <DropdownMenuTrigger className="border-none focus:outline-none">
                    <Menu color={color} />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="ex-box border-none">
                    <DropdownMenuItem
                      className="md:hidden"
                      onClick={() => navigate("/")}
                    >
                      Home
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="md:hidden"
                      onClick={() => navigate("/blogs")}
                    >
                      Blogs
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="md:hidden"
                      onClick={() => navigate("/about")}
                    >
                      About
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={handleProfile}>
                      Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </>
          ) : (
            <div className="flex justify-center items-center gap-5">
              <ThemeToggler />
              <Button onClick={handleLogin} className=" py-2 w-20 light-button">
                Login
              </Button>
              <Button
                onClick={handleRegister}
                className=" py-2 w-20 yellow-button"
              >
                Register
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger className="border-none focus:outline-none">
                  <Menu color={color} />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="ex-box border-none">
                  <DropdownMenuItem
                    className="md:hidden"
                    onClick={() => navigate("/")}
                  >
                    Home
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="md:hidden"
                    onClick={() => navigate("/blogs")}
                  >
                    Blogs
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="md:hidden"
                    onClick={() => navigate("/about")}
                  >
                    About
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleProfile}>
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )}
        </div>
      </header>
    </>
  );
}

export default HeaderComp;
