import FooterComp from "@/components/shared/FooterComp";
import HeaderComp from "@/components/shared/HeaderComp";
import { Outlet } from "react-router-dom";

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
