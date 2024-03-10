import { Container, PostForm, PostCard, Header } from "../components"
import databaseService from "../appwrite/config"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

function Account() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        databaseService.getPosts([])
            .then((Allposts) => {
                if (Allposts) {
                    setPosts(Allposts.documents)
                }
            })
    }, [])

    const [editPost, setEditPost] = useState([])
    const { slug } = useParams()
    const navigate = useNavigate()
    const empty = {};

    useEffect(() => {
        if (slug) {
            databaseService.getPost(slug)
                .then((post) => {
                    if (post) {
                        setEditPost(post)
                    }
                })
        } else {
            // navigate("/")
        }
    }, [slug, navigate])

    return (
        <>
            <Header />
            <div className="py-8">
                <Container>
                    <div className="flex flex-col justify-evenly items-center">
                        <h1>Add Post</h1>
                        <PostForm {...empty} />
                        <h1>All Posts</h1>
                        <div className="flex flex-wrap">
                            {
                                posts.map((eachPost) => (
                                    <div key={eachPost.$id} className="py-3 w-1/6">
                                        <PostCard {...eachPost} />
                                    </div>
                                ))
                            }
                        </div>
                        <h1>Edit Posts</h1>
                        {
                            editPost ? (
                                <div className="">
                                    <PostForm {...editPost} />
                                </div>
                            ) : null
                        }
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Account
