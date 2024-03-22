import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import databaseService from "../appwrite/config";
import { PostForm } from "../components";
import { GetPostToEdit, GetSlug } from "./Post";

function EditPost() {

    const editPost = GetPostToEdit();
    const slug = GetSlug();
    const navigate = useNavigate()

    useEffect(() => {
        if (slug) {
            databaseService.getPost(slug).then((post) => {
                if (post) {
                    console.log("POST SLUG INSIDE EDITPOST:", slug);
                    // setEditPost(post);
                }
                else navigate("/");
            });
        } else {
            console.log("THERE IS NO SLUG");
            console.log("POST SLUG INSIDE EDITPOST:", slug);
        }
    }, [slug, navigate]);


    return (
        <div>
            <h1>Edit Posts</h1>
            {
                editPost ? (
                    <div className="">
                        <PostForm {...editPost} />
                    </div>
                ) : <p>{editPost}</p>
            }
        </div>
    )
}

export default EditPost
