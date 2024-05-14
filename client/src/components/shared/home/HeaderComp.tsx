import { NavLink, useNavigate } from "react-router-dom";
import navItems from "../../../lib/constants/navItems";
import { Button } from "@/components/ui/button";

function HeaderComp() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <>
      <header className="text-gray-600 body-font ex-header-shadow">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-evenly">
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
        </div>
      </header>
    </>
  );
}

export default HeaderComp;
