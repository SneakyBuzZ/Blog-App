import { useSelector, useDispatch } from "react-redux"
import { loginModalToggle } from "../../store/authSlice";
import { X } from "lucide-react";
import Login from "../login/Login"



function AuthModal() {

    const modalStatus = useSelector(state => state.user.showLoginModal);
    const dispatch = useDispatch()

    return modalStatus ? (
        <>

            <div className="fixed inset-0 bg-opacity-30 bg-black flex justify-center items-center backdrop-blur-sm">
                <div className="md:h-[29rem] h-[25rem] w-8/12 md:w-5/12 mx-auto bg-gray-100 rounded-lg p-5 flex items-center flex-col">
                    <button className='h-4 place-self-end' onClick={() => dispatch(loginModalToggle())}> <X color="	#525252" /></button>
                    <Login />
                </div>
            </div>
        </>
    ) : null
}

export default AuthModal
