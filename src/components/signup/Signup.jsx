import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux"
import { login as storeLogin, signinModalToggle, loginModalToggle } from "../../store/authSlice"
import { useNavigate } from "react-router-dom";
import authService from "../../appwrite/auth"
import { Input, Button } from "../index"



function Signup() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState("")

    const signup = async (data) => {
        console.log("Clicked")
        setError("")
        try {
            const session = await authService.createAccount(data)
            if (session) {
                const currentUser = authService.getCurrentUser()
                if (currentUser) {
                    dispatch(storeLogin(currentUser))
                }
                navigate("/")
            }
        } catch (error) {
            setError(error)
        }
    }

    const handleCrossClick = async () => {
        dispatch(signinModalToggle())
        dispatch(loginModalToggle())
    }

    return (
        <>
            <div className="w-full px-3 py-5 flex justify-center items-center rounded-lg ">
                <div className="flex flex-col w-5/6">
                    <h1 className="text-xl md:text-3xl text-center w-full font-serif">Sign Up</h1>
                    <div className="flex flex-col md:flex-row md:justify-center items-center w-full my-2 mt-3">
                        <span className="text-xs text-center mb-1 text-gray-500 md:mx-2 md:text-md lg:text-lg">Already have an account?</span>
                        <button onClick={handleCrossClick} className="text-xs text-center text-blue-400 md:text-md lg:text-lg">Login!</button>
                    </div>
                    {error && <div className="text-md text-center text-red-600">
                        {error}
                    </div>}
                    <form onSubmit={handleSubmit(signup)} className="mt-2">
                        <div className="space-y-5">
                            <Input
                                label="email"
                                placeholder="email"
                                className="h-9"
                                type="email"
                                {...register("email", {
                                    required: true
                                })
                                } />
                            <Input
                                label="name"
                                placeholder="name"
                                className="h-9"
                                type="text"
                                {...register("name", {
                                    required: true
                                })
                                } />
                            <Input
                                label="password"
                                placeholder="password"
                                className="h-9"
                                type="password"
                                {...register("password", {
                                    required: true
                                })} />
                            <div className="flex justify-center items-center">
                                <Button
                                    type="submit"
                                    className="w-full">
                                    Sign Up
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}


export default Signup
