import { Outlet } from "react-router-dom";
import HeaderComp from "../components/shared/home/HeaderComp";
import FooterComp from "../components/shared/home/FooterComp";

function RootLayout() {
  return (
    <>
      <HeaderComp />
      <Outlet />
      <FooterComp />
    </>
  );
}

export default RootLayout;
