import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux"
import { login as storeLogin } from "../../store/authSlice"
import { useNavigate, Link } from "react-router-dom";
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


    return (
        <>
            <div className="w-full px-3 py-5 flex justify-center items-center border border-black rounded-lg">
                <div className="flex flex-col">
                    <h1 className="text-lg text-center">Sign Up</h1>
                    <div className="flex items-center">
                        <span className="text-md text-center">Already have an account?</span>
                        <Link to="/login">
                            <li className="text-md text-center">Login!</li>
                        </Link>
                    </div>
                    {error && <div className="text-md text-center text-red-600">
                        {error}
                    </div>}
                    <form onSubmit={handleSubmit(signup)} className="mt-2">
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
                                label="name"
                                placeholder="name"
                                type="text"
                                {...register("name", {
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
                            <Button
                                type="submit"
                                className="w-full">
                                Sign Up
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Signup
