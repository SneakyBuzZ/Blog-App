import "./Header.css"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { Container } from "../index"
import LogoutBtn from "./LogoutBtn"
function Header() {

    const isUserActive = useSelector(state => state.auth.status)
    const navigate = useNavigate()
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
            name: "Contact",
            slug: "/contact",
            active: true
        },
    ]
    const buttonItems = [
        {
            name: "Login",
            slug: "/account",
            active: !isUserActive,
            classNames: "button1"
        },
        {
            name: "Sign In",
            slug: "/account",
            active: !isUserActive,
            classNames: "button2 hidden sm:block"
        }
    ]
    return (
        <>
            <header>
                <Container>
                    <div className="outerHeader w-full h-14 px-3 sm:px-4 md:h-20 lg:px-10 ">
                        <div className="header mx-auto h-full flex ">
                            <div className="logo flex justify-center items-center h-full">
                                <img className=" hidden sm:block sm:h-7 md:h-10 lg:h-12" src="/public/blog_app_logo.png" alt="" />
                            </div>
                            <div className="navigation">
                                <ul className="flex h-full items-center">
                                    {navItems.map((eachItem) => (
                                        eachItem.active ? (
                                            <li key={eachItem.name} className=" text-xs mx-1 sm:text-sm md:text-md sm:mx-2 md:mx-5">{eachItem.name}</li>
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
                                                    className={`font-semibold w-12 h-6 md:w-20 md:h-10 rounded-sm sm:rounded-md mx-1 sm:mx-2 text-xs ${eachItem.classNames}`}
                                                    onClick={() => navigate(eachItem.slug)}>
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
                        </div>
                    </div>
                </Container>
            </header >
        </>
    )
}

export default Header
