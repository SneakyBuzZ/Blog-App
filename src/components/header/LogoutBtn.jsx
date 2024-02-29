import { useDispatch } from "react-redux"
import authService from "../../appwrite/auth"
import { logout } from "../../store/authSlice"

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout()
            .then(() => {
                dispatch(logout())
            })
            .catch(
                (error) => { console.log("Error at Logout Btn", error) }
            )
    }
    return (
        <>
            <button
                onClick={logoutHandler}
                className="font-semibold w-12 h-6 md:w-20 md:h-10 rounded-sm sm:rounded-md mx-1 sm:mx-2 text-xs">
                Log Out
            </button>
        </>
    )
}

export default LogoutBtn
