import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import databaseService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
// import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    // const userData = useSelector((state) => state.user.userData);

    const isAuthor = post ? true : false

    useEffect(() => {
        if (slug) {
            databaseService.getPost(slug).then((post) => {
                if (post) {
                    console.log("POST SLUG :", slug);
                    setPost(post);
                }
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        databaseService.deletePost(post.$id).then((status) => {
            if (status) {
                databaseService.deleteFile(post.featureImage);
                navigate("/");
            }
        });
    };

    return post ? (
        <div className="py-8">
            <Container>
                <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
                    <img
                        src={databaseService.getFilePreview(post.featureImage)}
                        alt={post.title}
                        className="rounded-xl"
                    />

                    {isAuthor && (
                        <div className="absolute right-6 top-6">
                            <Link to={`/account/editpost`}>
                                <Button bgColor="bg-green-500" className="mr-3">
                                    Edit
                                </Button>
                            </Link>
                            <Button bgColor="bg-red-500" onClick={deletePost}>
                                Delete
                            </Button>
                        </div>
                    )}
                </div>
                <div className="w-full mb-6">
                    <h1 className="text-2xl font-bold">{post.title}</h1>
                </div>
                <div className="browser-css">
                    {parse(post.content)}
                </div>
            </Container>
        </div>
    ) : <h1 className="w-full text-center py-3">NOTHING!</h1>;
}


export function GetSlug() {
    const { slug } = useParams();
    if (slug) {
        return slug;
    } else {
        return null;
    }
}

export function GetPostToEdit() {
    const navigate = useNavigate();
    const { slug } = useParams();
    const [post, setPost] = useState(null);
    console.log("THIS FROM HOOK POST: ", post)
    if (slug) {
        databaseService.getPost(slug).then((post) => {
            if (post) {
                console.log("POST SLUG :", slug);
                setPost(post);
            }
            else navigate("/");
        });
        return post;
    } else return "biryani";
}

