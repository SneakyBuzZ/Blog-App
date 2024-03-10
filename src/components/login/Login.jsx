import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux"
import { login as storeLogin } from "../../store/authSlice"
import { useNavigate, Link } from "react-router-dom";
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
                if (currentUser) dispatch(storeLogin(currentUser))
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
                    <h1 className="text-lg text-center">Login</h1>
                    <div className="flex items-center">
                        <span className="text-md text-center">Don&apos;t have an account?</span>
                        <Link to="/signup">
                            <li className="text-md text-center">Create Account!</li>
                        </Link>
                    </div>
                    {error && <div className="text-md text-center text-red-600">
                        {error}
                    </div>}
                    <form onSubmit={handleSubmit(login)} className="mt-2">
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
                            <Button
                                type="submit"
                                className="w-full">
                                Sign In
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login
