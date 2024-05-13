import { Outlet } from "react-router-dom";
import HeaderComp from "../components/shared/HeaderComp";

function RootLayout() {
  return (
    <>
      <HeaderComp />
      <Outlet />
      <h1 className="text-white">FOOTER</h1>
    </>
  );
}

export default RootLayout;
