import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux"
import { loginModalToggle, login as storeLogin, logout, signinModalToggle } from "../../store/authSlice"
import { useNavigate } from "react-router-dom";
import authService from "../../appwrite/auth"
import { Input, Button } from "../index"


function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState("")

    const login = async (data) => {
        setError("")
        try {
            const session = await authService.loginAccount(data)
            if (session) {
                const currentUser = await authService.getCurrentUser()
                if (currentUser) {
                    console.log("USERDATA IN LOGIN: ", currentUser)
                    dispatch(storeLogin(currentUser))
                }
                navigate("/account");
                dispatch(loginModalToggle());
            }
        } catch (error) {
            setError(error)
        }
    }

    useEffect(() => {
        authService.getCurrentUser()
            .then((userData) => {
                console.log("THIS IS USERDATA IN APP.JSX", userData)
                if (userData) {
                    dispatch(storeLogin(userData))
                } else {
                    dispatch(logout())
                }
            })
    }, [dispatch])

    const handleCrossClick = async () => {
        dispatch(loginModalToggle())
        dispatch(signinModalToggle())
    }

    return (
        <>
            <div className="w-full px-3 py-5 flex justify-center items-center rounded-lg ">
                <div className="flex flex-col w-5/6">
                    <h1 className="text-xl md:text-3xl text-center w-full font-serif dark:text-gray-100">Login</h1>
                    <div className="flex flex-col md:flex-row md:justify-center items-center w-full my-2 mt-3">
                        <span className="text-xs text-center mb-1 text-gray-500 md:mx-2 md:text-md lg:text-lg">Don&apos;t have an account?</span>
                        <button onClick={handleCrossClick} className="text-xs text-center text-blue-400 md:text-md lg:text-lg">Create Account!</button>
                    </div>
                    {error && <div className="text-md text-center text-red-600">
                        {error}
                    </div>}
                    <form onSubmit={handleSubmit(login)} className="mt-2 ">
                        <div className="space-y-5">
                            <Input
                                label="email"
                                placeholder="email"
                                type="email"
                                {...register("email", {
                                    required: true
                                })
                                } />
                            <Input
                                label="password"
                                placeholder="password"
                                type="password"
                                {...register("password", {
                                    required: true
                                })} />
                            <div className="flex justify-center items-center">
                                <Button
                                    type="submit"
                                    className="w-full">
                                    Sign In
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login
