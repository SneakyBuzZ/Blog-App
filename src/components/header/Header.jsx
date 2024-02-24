import "./Header.css"
function Header() {
    return (
        <>
            <header>
                <div className="outerHeader w-full h-14 mb-32 px-3 sm:px-4 md:h-20 lg:px-10 ">
                    <div className="header mx-auto h-full flex ">
                        <div className="logo flex justify-center items-center h-full">
                            <img className=" hidden sm:block sm:h-7 md:h-10 lg:h-12" src="/public/blog_app_logo.png" alt="" />
                        </div>
                        <div className="navigation">
                            <ul className="flex h-full items-center">
                                <li className=" text-xs mx-1 sm:text-sm md:text-md sm:mx-2 md:mx-5">Home</li>
                                <li className=" text-xs mx-1 sm:text-sm md:text-md sm:mx-2 md:mx-5">Account</li>
                                <li className=" text-xs mx-1 sm:text-sm md:text-md sm:mx-2 md:mx-5">Contact</li>
                            </ul>
                        </div>
                        <div className="buttons h-full flex justify-end items-center lg:mr-8">
                            <button className="button1 font-semibold w-12 h-6 md:w-20 md:h-10 rounded-sm sm:rounded-md mx-1 sm:mx-2 text-xs">Log In</button>
                            <button className="button2 font-semibold w-12 h-6 md:w-20 md:h-10 rounded-sm sm:rounded-md mx-1 sm:mx-2 text-xs hidden sm:block">Sign Up</button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
