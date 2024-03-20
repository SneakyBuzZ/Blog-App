import { useSelector, useDispatch } from "react-redux"
import { modalToggle } from "../../store/authSlice";
import { X } from "lucide-react";

function AuthModal({ children }) {

    const modalStatus = useSelector(state => state.user.showModal);
    const dispatch = useDispatch()

    return modalStatus ? (
        <>

            <div className="fixed inset-0 bg-opacity-30 bg-black flex justify-center items-center backdrop-blur-sm">
                <div className="md:h-[28rem] h-[25rem] w-8/12 md:w-5/12 mx-auto bg-gray-100 rounded-lg p-5 flex items-center flex-col">
                    <button className='h-4 place-self-end' onClick={() => dispatch(modalToggle())}> <X color="	#525252" /></button>
                    {children}
                </div>
            </div>
        </>
    ) : null
}

export default AuthModal