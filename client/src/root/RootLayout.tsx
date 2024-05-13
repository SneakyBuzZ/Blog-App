import { Outlet } from "react-router-dom";
import HeaderComp from "../components/shared/HeaderComp";
import FooterComp from "../components/shared/FooterComp";

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
