import { Link } from "react-router-dom"

function ManagePosts() {
    return (
        <>
            <div className="flex flex-col items-center h-full bg-[#0a0a0a77]">
                <div className="titles text-white flex flex-col">
                    <Link to="/account/addpost">Add post</Link>
                    <Link to="/account/editpost">Edit post</Link>
                    <Link to="/account/allposts">All posts</Link>
                </div>
            </div>
        </>
    )
}

export default ManagePosts
