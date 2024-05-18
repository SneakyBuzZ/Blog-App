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

function HeaderComp() {
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

  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap px-5 py-2 flex-col md:flex-row items-center justify-evenly">
          <NavLink
            to="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <img className=" h-14" src="/exwave.png" alt="" />
          </NavLink>
          <nav className="flex flex-wrap items-center text-base w-2/3 gap-5">
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
              <ThemeToggler />
              <AlertDialog>
                <AlertDialogTrigger className="bg-neutral-800  py-2 px-4 rounded-md text-gray-200">
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
            </div>
          )}
          {useStore?.isUserLoggedIn && <AvatarComp />}
        </div>
      </header>
    </>
  );
}

export default HeaderComp;
