import { useSelector, useDispatch } from "react-redux"
import { signinModalToggle } from "../../store/authSlice";
import { X } from "lucide-react";
import Signup from "../signup/Signup";



function AuthModal() {

    const modalStatus = useSelector(state => state.user.showSigninModal);
    const dispatch = useDispatch()

    return modalStatus ? (
        <>

            <div className="fixed inset-0 bg-opacity-30 bg-black flex justify-center items-center backdrop-blur-sm">
                <div className="md:h-[33rem] h-[25rem] w-8/12 md:w-5/12 mx-auto bg-gray-100 dark:bg-[#141414] rounded-lg p-5 flex items-center flex-col">
                    <button className='h-4 place-self-end' onClick={() => dispatch(signinModalToggle())}> <X color="	#525252" /></button>
                    <Signup />
                </div>
            </div>
        </>
    ) : null
}

export default AuthModal
