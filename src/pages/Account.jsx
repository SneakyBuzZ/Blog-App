import { Container } from "../components"
import { useEffect, useState } from "react"
import { useDispatch } from 'react-redux'
import authService from "../appwrite/auth"
import { login, logout } from "../store/authSlice"
import ManagePosts from "../components/manageposts/ManagePosts"
import AuthModal from "../components/modal/LoginModal"
import SigninModal from "../components/modal/SigninModal"
import { Outlet } from "react-router-dom"
// import EditPost from "./EditPost"
// import AllPosts from "./AllPosts"

function Account() {


    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch();

    useEffect(() => {
        authService.getCurrentUser()
            .then((userData) => {
                console.log("THIS IS USERDATA IN APP.JSX", userData)
                if (userData) {
                    dispatch(login(userData))
                } else {
                    dispatch(logout())
                }
            })
            .finally(() => setLoading[false])
    }, [dispatch])

    // const empty = {};

    return loading ? (
        <>
            <div className="flex ">
                <div className=" w-1/6">
                    <ManagePosts />
                </div>
                <div className="py-8 w-5/6 h-full">
                    <Container>
                        <div className="flex flex-col justify-evenly items-center w-full">
                            <h1 className="text-md text-black">THIS IS OUTLET</h1>
                            <Outlet />

                        </div>
                    </Container>
                </div>
            </div>
            <AuthModal />
            <SigninModal />
        </>
    ) : <h1>Loading.....</h1>
}

export default Account
