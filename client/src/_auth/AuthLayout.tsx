import { Button } from "@/components/ui/button";
import { Outlet, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { IoChevronForward } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function AuthLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [content, setContent] = useState<string>();
  const [path, setPath] = useState<string>();

  useEffect(() => {
    if (location.pathname === "/register") {
      setContent("Login");
      setPath("/login");
    } else if (location.pathname === "/login") {
      setContent("Register");
      setPath("/register");
    }
  }, [location.pathname]);

  const handleButton = () => {
    if (path) {
      navigate(path);
    }
  };
  return (
    <>
      <section className="text-gray-600 body-font w-10/12 mx-auto flex h-screen justify-center items-center">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center w-1/2">
          <div className=" md:pr-16 lg:pr-0 pr-0">
            <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <img className=" h-20" src="/exwave.png" alt="" />
              <h1 className=" font-lobster text-6xl ex-text-yellow ex-text-shadow ">
                Express Wave
              </h1>
            </div>
            <h1 className="title-font font-medium text-sm ex-text-gray w-5/6 pl-6 my-3 ex-text-shadow-white ">
              Welcome to Express Wave, your personal platform to ride the wave
              of creativity! By registering, you'll unlock a world of features
              to share your voice and connect with others.
            </h1>
            <div className="flex">
              <Button
                variant="ghost"
                onClick={() => navigate("/")}
                className="my-1 ml-6"
              >
                <IoIosArrowBack className="mr-1" />
                <span className="text-md">Back</span>
              </Button>
              <Button
                variant="yellow"
                onClick={handleButton}
                className="my-1 ml-6 w-30"
              >
                <span className="text-sm mr-1">{content}</span>
                <IoChevronForward className="mr-1" />
              </Button>
            </div>
          </div>
        </div>
        <Outlet />
      </section>
    </>
  );
}

export default AuthLayout;
