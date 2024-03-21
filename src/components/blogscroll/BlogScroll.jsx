import AllBlog from "./AllBlog"
function BlogScroll() {
    return (
        <div className="w-5/6 mx-auto my-10 h-[51rem] overflow-y-scroll rounded-xl">
            <div className='flex flex-col items-center justify-center min-h-screen dark:bg-[#0a0a0acf] bg-[#71727223] px-10 md:px-18 lg:px-28 lg:py-10 rounded-lg '>
                <h1 className="blog-title text-4xl my-7 dark:text-blue-300 text-blue-400 font-serif">This week&apos;s popular posts</h1>
                <AllBlog />
            </div>
        </div>
    )
}

export default BlogScroll
