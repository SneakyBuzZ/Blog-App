import { NavLink } from "react-router-dom"
import { Images, LayoutGrid, WalletCards } from "lucide-react"


function ManagePosts() {
    return (
        <>
            <div className="flex flex-col items-center h-full dark:bg-[#070707be] bg-[#f9ffff]">
                <div className="titles text-white flex flex-col text-lg mt-7 w-full px-3 items-center">
                    <NavLink to="/account/addpost" className={({ isActive }) => `${isActive ? "flex dark:bg-[#292929be] dark:hover:bg-[#373737be] bg-[#ffffff] hover:bg-slate-100  items-center rounded-sm md:rounded-md md:px-4 justify-center md:justify-between md:pr-5 my-1 w-2/3 md:w-full" : "flex dark:bg-[#070707be] dark:hover:bg-[#373737be] bg-[#ffffff] hover:bg-slate-100  items-center rounded-sm md:rounded-md md:px-4 justify-center md:justify-between md:pr-5 my-1 w-2/3 md:w-full"}`}>
                        <h1 className="my-2 text-blue-400 hidden md:block text-sm">Add post</h1>
                        <Images className="w-4" color="#33a7ff" />
                    </NavLink>
                    <NavLink to="/account/editpost" className={({ isActive }) => `${isActive ? "flex dark:bg-[#292929be] dark:hover:bg-[#373737be] bg-[#ffffff] hover:bg-slate-100  items-center rounded-sm md:rounded-md md:px-4 justify-center md:justify-between md:pr-5 my-1 w-2/3 md:w-full" : "flex dark:bg-[#070707be] dark:hover:bg-[#373737be] bg-[#ffffff] hover:bg-slate-100  items-center rounded-sm md:rounded-md md:px-4 justify-center md:justify-between md:pr-5 my-1 w-2/3 md:w-full"}`}>
                        <h1 className="my-2 text-blue-400 hidden md:block text-sm">Edit post</h1>
                        <WalletCards className="w-4" color="#33a7ff" />
                    </NavLink>
                    <NavLink to="/account/allposts" className={({ isActive }) => `${isActive ? "flex dark:bg-[#292929be] dark:hover:bg-[#373737be] bg-[#ffffff] hover:bg-slate-100  items-center rounded-sm md:rounded-md md:px-4 justify-center md:justify-between md:pr-5 my-1 w-2/3 md:w-full" : "flex dark:bg-[#070707be] dark:hover:bg-[#373737be] bg-[#ffffff] hover:bg-slate-100  items-center rounded-sm md:rounded-md md:px-4 justify-center md:justify-between md:pr-5 my-1 w-2/3 md:w-full"}`}>
                        <h1 className="my-2 text-blue-400 hidden md:block text-sm">All posts</h1>
                        <LayoutGrid className="w-4" color="#33a7ff" />
                    </NavLink>
                </div>
            </div>
        </>
    )
}

export default ManagePosts
