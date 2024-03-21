import "./Home.css"
function Home() {
    return (
        <>
            <div className="home">
                <div className="home w-full block dark:bg-[#000000db] bg-[#f6f6f6dc]">
                    <div className="tittle w-full text-center">
                        <h1 className="text-5xl sm:text-7xl py-5 sm:pt-10 ">Express Wave</h1>
                    </div>
                    <div className="description w-full pt-5 pb-24 hidden sm:block">
                        <p className="md:w-3/5 w-5/6 mx-auto text-center ">
                            Dive into a world where expressing yourself is effortless, and connecting with like-minded individuals is exhilarating. With Express Wave, every post becomes a ripple in the sea of inspiration, shaping conversations, sparking imagination, and fostering meaningful connections.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
