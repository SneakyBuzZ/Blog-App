// import SideBar from "@/components/shared/blogs/SideBar";
import { Outlet } from "react-router-dom";

function BlogsPage() {
  return (
    <>
      <section className="flex dark:bg-[#0D0D0D] justify-center items-start">
        <div className="w-[85%]  h-full">
          <Outlet />
        </div>
      </section>
    </>
  );
}

export default BlogsPage;
