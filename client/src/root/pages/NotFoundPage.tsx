import { NavLink } from "react-router-dom";

function NotFoundPage() {
  const navItems = [
    {
      route: "/",
      label: "Home",
    },
    {
      route: "/about",
      label: "About",
    },
    {
      route: "/blogs",
      label: "Blogs",
    },
  ];
  return (
    <>
      {navItems.map((eachItem) => (
        <NavLink
          to={eachItem.route}
          className={({ isActive }) =>
            `${
              isActive
                ? " ex-text-yellow "
                : " ex-text-white hover:text-gray-400"
            }
            mr-5 hover:ex-text-yellow cursor-pointer`
          }
        >
          <h1 className="text-md lg:text-lg ">{eachItem.label}</h1>
        </NavLink>
      ))}
    </>
  );
}

export default NotFoundPage;
