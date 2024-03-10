import { Container, PostForm, PostCard } from "../components"
import databaseService from "../appwrite/config"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

import { useDispatch } from 'react-redux'
import authService from "../appwrite/auth"
import { login, logout } from "../store/authSlice"

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




    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch();

    useEffect(() => {
        authService.getCurrentUser()
            .then((userData) => {
                console.log("THIS IS USERDATA IN APP.JSX", userData)
                if (userData) {
                    dispatch(login(userData))
                } else {
                    dispatch(logout())
                }
            })
            .finally(() => setLoading[false])
    }, [dispatch])




    return loading ? (
        <>
            <div className="py-8">
                <Container>
                    <div className="flex flex-col justify-evenly items-center w-full">
                        <h1>Add Post</h1>
                        <PostForm {...empty} />
                        <h1>All Posts</h1>
                        <div className="flex flex-wrap w-full justify-center items-center">
                            {
                                posts.map((eachPost) => (
                                    <div key={eachPost.$id} className="py-3">
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
    ) : <h1>Loading.....</h1>
}

export default Account
