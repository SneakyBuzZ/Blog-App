import blogs from "./BlogData"

function AllBlog() {
    return (
        <div>
            <ul className="flex h-full flex-col">
                {blogs.map((eachItem) => (
                    <div key={eachItem.id} className="dark:bg-[#191919a8] bg-[#ffffff6e] w-full my-10 md:my-6 items-center justify-center flex flex-col md:flex-row p-5 md:p-7 rounded-lg md:rounded-xl">
                        <div className="imageBox w-full md:w-5/12 h-full md:h-48 ">
                            <img className="  mx-auto block w-full h-full rounded-lg" alt="art cover" loading="lazy" src={eachItem.imageUrl} />
                        </div>
                        <div className="md:w-7/12 md:p-4 w-full md:px-10">
                            <div className=" dark:text-white text-black titleBlog mt-2 text-xl md:text-[20px] lg:text-[25px] font-serif">{eachItem.title}</div>
                            <div className="contentBlog my-4 sm:text-md md:text-md text-gray-500">{eachItem.content}</div>
                            <div className="bottomBlog flex justify-between w-full items-center">
                                <div className="authoBlog text-md md:text-[17px] lg:text-[20px] text-blue-400 font-semibold">{eachItem.author}</div>
                                <div className="reviewsBlog text-pink-400  text-xs md:text-[12] lg:text-[15px]">{eachItem.reviews} reviews</div>
                            </div>
                        </div>
                    </div>
                ))}
            </ul >
        </div>
    )
}

export default AllBlog
