import "./Footer.css"
import { Link } from "react-router-dom"
function Footer() {
    return (
        <>

            <footer>
                <div className="footer w-full flex flex-col items-center pb-4">
                    <div className="footerNav flex flex-col sm:flex-row items-center h-3/5 sm:h-2/4 justify-evenly py-8">
                        <div className="navigate">
                            <h1 className=" mb-1 sm:text-md md:text-lg text-sm">Navigate</h1>
                            <ul className="text-xs sm:text-md md:text-md text-center mb-3">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/">Account</Link></li>
                                <li><Link to="/">Contact</Link></li>
                            </ul>
                        </div>
                        <div className="company">
                            <h1 className=" mb-1 sm:text-md md:text-lg text-sm">Company</h1>
                            <ul className="text-xs sm:text-md md:text-md text-center mb-3">
                                <li><Link to="/">About Us</Link></li>
                                <li><Link to="/">Security</Link></li>
                                <li><Link to="/">Jobs</Link></li>
                            </ul>
                        </div>
                        <div className="resource">
                            <h1 className=" mb-1 sm:text-md md:text-lg text-sm">Resource</h1>
                            <ul className="text-xs sm:text-md md:text-md text-center mb-3">
                                <li><Link to="/">Blog</Link></li>
                                <li><Link to="/">Help Center</Link></li>
                                <li><Link to="/">API Docs</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footerTittle h-1/5 w-full text-center py-5 flex flex-col items-center sm:my-5">
                        <h1 className="text-3xl md:text-5xl ">Express Wave</h1>
                        <p className="text-xs w-3/5 sm:w-2/3 md:w-1/3 md:text-sm my-1">Unleash your creativity, ride the wave, and make your mark with Express Wave – where every word counts.</p>
                    </div>
                    <div className="footerSocial h-1/5 flex w-full justify-center">
                        <div className="footerImage image1 mb-4 px-2">
                            <Link to="/">
                                <img className="h-5 grayscale opacity-70 sm:h-7" src="/public/insta_logo.png" alt="" />
                            </Link>
                        </div>
                        <div className="footerImage image2 mb-4 px-2">
                            <Link to="/">
                                <img className="h-5 grayscale opacity-70 sm:h-7" src="/public/fb_logo.png" alt="" />
                            </Link>
                        </div>
                        <div className="footerImage image3 mb-4 px-2">
                            <Link to="/">
                                <img className="h-5 grayscale opacity-70 sm:h-7" src="/public/twitter_logo.png" alt="" />
                            </Link>
                        </div>
                        <div className="footerImage image4 mb-4 px-2">
                            <Link to="/">
                                <img className="h-5 grayscale opacity-70 sm:h-7" src="/public/discord_logo.png" alt="" />
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
