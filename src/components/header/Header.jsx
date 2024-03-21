import "./Header.css"
import { useDispatch, useSelector } from "react-redux"
import { Container } from "../index"
import LogoutBtn from "./LogoutBtn"
import { Link } from "react-router-dom"
import { loginModalToggle, signinModalToggle } from "../../store/authSlice"
import Toggle from "../theme/Toggle"



function Header() {


    const isUserActive = useSelector(state => state.user.status)
    console.log(isUserActive)
    const dispatch = useDispatch()
    const navItems = [
        {
            name: "Home",
            slug: "/",
            active: true
        },
        {
            name: "Account",
            slug: "/account",
            active: true
        },
        {
            name: "about us",
            slug: "/contact",
            active: true
        },
    ]
    const buttonItems = [
        {
            name: "Login",
            slug: "/login",
            active: !isUserActive,
            classNames: "button1 bg-gray-300 dark:bg-[#191919]",
            handleClick: () => loginModalToggle()
        },
        {
            name: "Sign Up",
            slug: "/signup",
            active: !isUserActive,
            classNames: "button2 hidden sm:block bg-[#2591ff] text-[#e9e9e9] dark:text-gray-900",
            handleClick: () => signinModalToggle()
        }
    ]
    return (
        <>
            <header className="">
                <Container>
                    <div className="outerHeader w-full h-14 px-3 sm:px-4 md:h-20 lg:px-10 dark:bg-[#000000db] bg-[#f6f6f6dc]">
                        <div className="header mx-auto h-full flex ">
                            <div className="logo flex justify-center items-center h-full">
                                <Link to="/">
                                    <img className=" hidden sm:block sm:h-7 md:h-10 lg:h-12" src="/blog_app_logo.png" alt="" />
                                </Link>
                            </div>
                            <div className="navigation">
                                <ul className="flex h-full items-center">
                                    {navItems.map((eachItem) => (
                                        eachItem.active ? (
                                            <li key={eachItem.name} className={`dark:text-blue-400 text-sky-400 font-extrabold text-center md:w-[4rem] w-[3.4rem] mx-1 text-xs sm:text-sm md:text-md sm:mx-2`}><Link to={`${eachItem.slug}`}>{eachItem.name}</Link></li>
                                        ) : null
                                    ))}
                                </ul>
                            </div>
                            <div className="buttons h-full flex justify-end items-center lg:mr-8">
                                <ul className="flex h-full items-center">
                                    {buttonItems.map((eachItem) => (
                                        eachItem.active ? (
                                            <li key={eachItem.name}>
                                                <button
                                                    className={` text-sky-400 font-extrabold w-12 h-6 md:w-20 md:h-10 rounded-sm sm:rounded-md mx-1 sm:mx-2 text-xs ${eachItem.classNames}`}
                                                    // onClick={() => dispatch(modalToggle())}>
                                                    onClick={() => dispatch(eachItem.handleClick())}>
                                                    {eachItem.name}
                                                </button>
                                            </li>
                                        ) : null
                                    ))}
                                    {isUserActive && (
                                        <li>
                                            <LogoutBtn />
                                        </li>
                                    )}
                                </ul>
                            </div>
                            <Toggle />
                        </div>
                    </div>
                </Container>
            </header >
        </>
    )
}

export default Header
