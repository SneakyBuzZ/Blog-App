import { NavLink, useNavigate } from "react-router-dom";
import navItems from "../../utils/constants/navItems";

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
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-evenly">
          <NavLink
            to="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <img className=" h-14" src="/expresswave.png" alt="" />
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
                            mr-5 cursor-pointer`
                  }
                >
                  <h1 className="text-md lg:text-lg ">{eachItem.label}</h1>
                </NavLink>
              </li>
            ))}
          </nav>
          <div className="flex gap-5">
            <button
              onClick={handleLogin}
              className="inline-flex items-center justify-center ex-bg-gray ex-text-white border-0 py-2 w-20 rounded text-base mt-4 md:mt-0"
            >
              Login
            </button>
            <button
              onClick={handleRegister}
              className="inline-flex items-center justify-center ex-bg-yellow text-black border-0 py-2 w-20  rounded text-base mt-4 md:mt-0"
            >
              Register
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default HeaderComp;
