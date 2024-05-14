import { FooterComp, HeaderComp } from "@/components/shared/home";
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
