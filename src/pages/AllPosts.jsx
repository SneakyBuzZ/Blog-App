import databaseService from "../appwrite/config"
import { useEffect, useState } from "react"
import PostCard from "../components/postcard/PostCard"

function AllPosts() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        databaseService.getPosts([])
            .then((Allposts) => {
                if (Allposts) {
                    setPosts(Allposts.documents)
                }
            })
    }, [])
    return (
        <>
            <div className="flex flex-wrap w-full justify-center items-center">
                {
                    posts.map((eachPost) => (
                        <div key={eachPost.$id} className="py-3">
                            <PostCard {...eachPost} />
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default AllPosts
