import databaseService from "../../appwrite/config"
import { Link } from "react-router-dom"
import "./PostCard.css"

function Postcard({ $id, tittle, featuredImage }) {
    return (
        <>
            <Link to={`/post/${$id}`}>
                <div className="card">
                    <img src={databaseService.getFilePreview(featuredImage)} alt={tittle} />
                    <h1>{tittle}</h1>
                </div>
            </Link>
        </>
    )
}

export default Postcard
