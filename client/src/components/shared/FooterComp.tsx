import { footerItems } from "@/lib/constants/footerItems";
import { NavLink } from "react-router-dom";

function FooterComp() {
  return (
    <>
      <footer className="text-gray-600 body-font bg-transparent shadow-xl ">
        <div className=" flex px-20 justify-center">
          <footer className="footer p-10 text-base-content  w-2/3 bg-transparent">
            {footerItems.map((item) => (
              <nav key={item.title}>
                <h6 className="text-heading text-lg font-unica font-semibold">
                  {item.title}
                </h6>
                <a className="text-content">{item.item1}</a>
                <a className="text-content">{item.item2}</a>
                <a className="text-content">{item.item3}</a>
              </nav>
            ))}
          </footer>
          <div className="  flex flex-col items-start justify-center bg-transparent">
            <div className=" flex title-font font-medium items-center md:justify-start justify-center text-gray-900 ">
              <NavLink
                to="/"
                className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
              >
                <img className=" h-14" src="/exwave.png" alt="" />
              </NavLink>
              <h1 className=" font-lobster text-2xl ex-text-yellow bg-transparent">
                Express Wave
              </h1>
            </div>
            <p className="mt-2 text-sm ex-text-gray ml-5 bg-transparent">
              Post your blogs here and let others know what you are doing
            </p>
          </div>
        </div>
        <div className=" mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-amber-300 text-sm text-center sm:text-left">
            @Express Wave
            <a
              href="https://twitter.com/knyttneve"
              rel="noopener noreferrer"
              className="text-content ml-1"
              target="_blank"
            >
              @kaushik
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a className="text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </footer>
    </>
  );
}

export default FooterComp;
