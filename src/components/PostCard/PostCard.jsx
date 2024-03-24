import databaseService from "../../appwrite/config"
import { Link } from "react-router-dom"
import "./PostCard.css"
import parse from "html-react-parser";



function Postcard({ $id, title, featureImage, content }) {
    return (
        <>
            <Link to={`/account/${$id}`}>

                <div className="bg-[#f8f8f8] dark:bg-[#1f1f1f] dark:hover:bg-[#151515] shadow-md rounded-md m-1 p-5 md:m-4 ">
                    <img src={databaseService.getFilePreview(featureImage)} alt="Card" className="w-64 h-40 md:w-72 md:h-56 lg:w-80 lg:h-64 object-cover object-center rounded-md" />
                    <div className="p-4">
                        <h2 className="font-serif text-xl text-sky-400 dark:text-blue-300">{title}</h2>
                        <p className="anta-font text-[#6d6d6d] dark:text-[#6d6d6d] mt-2">{parse(content)}</p>
                    </div>
                </div>

            </Link>
        </>
    )
}

export default Postcard
