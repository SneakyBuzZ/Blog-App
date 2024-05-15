import { NavLink, useNavigate } from "react-router-dom";
import navItems from "../../lib/constants/navItems";
import { Button } from "@/components/ui/button";
import useUserStore from "@/lib/store/userStore";
import axios from "axios";

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

function HeaderComp() {
  const useStore = useUserStore();
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleRegister = () => {
    navigate("/register");
  };

  const handleLogout = async () => {
    try {
      const response = await axios.post("/expresswave/api/users/logout");
      if (response) useStore?.reset?.();

      navigate("/");
    } catch (error) {}
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
                    `${
                      isActive
                        ? " ex-text-yellow "
                        : " ex-text-white hover:text-gray-400"
                    }
                            mr-5 cursor-pointer active:scale-95`
                  }
                >
                  <h1 className="text-md lg:text-lg ">{eachItem.label}</h1>
                </NavLink>
              </li>
            ))}
          </nav>
          {useStore.isUserLoggedIn ? (
            <AlertDialog>
              <AlertDialogTrigger className="hover:bg-neutral-800 ex-text-gray py-2 px-4 rounded-md hover:text-gray-200">
                Logout
              </AlertDialogTrigger>
              <AlertDialogContent className="ex-bg-gray border-none">
                <AlertDialogHeader>
                  <AlertDialogTitle className="ex-text-yellow">
                    Are you sure?
                  </AlertDialogTitle>
                  <AlertDialogDescription className="ex-text-gray">
                    Do you want to log out from your account.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel className="ex-bg-lightgray border-none ex-text-gray hover:bg-neutral-600 hover:text-gray-200">
                    Cancel
                  </AlertDialogCancel>
                  <AlertDialogAction
                    onClick={handleLogout}
                    className="ex-bg-lightgray border-none ex-text-gray hover:bg-neutral-600 hover:text-gray-200"
                  >
                    Continue
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          ) : (
            <div className="flex gap-5">
              <Button
                onClick={handleLogin}
                className="ex-bg-gray py-2 w-20 ex-text-white hover:text-white hover:bg-stone-800"
              >
                Login
              </Button>
              <Button
                onClick={handleRegister}
                className="ex-bg-yellow py-2 w-20 text-black hover:bg-yellow-400 hover:text-stone-800"
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
