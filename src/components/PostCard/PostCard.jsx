import databaseService from "../../appwrite/config"
import { Link } from "react-router-dom"
import "./PostCard.css"

function Postcard({ $id, title, featuredImage }) {
    return (
        <>
            <Link to={`/post/${$id}`}>
                <div className="card">
                    <img src={databaseService.getFilePreview(featuredImage)} alt={title} />
                    <h1>{title}</h1>
                </div>
            </Link>
        </>
    )
}

export default Postcard
