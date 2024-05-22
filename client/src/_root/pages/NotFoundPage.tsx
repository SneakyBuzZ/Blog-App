import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <>
      <section className="text-gray-600 bg-neutral-100 dark:bg-neutral-900  body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src="/404.png"
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-content">
              We're sorry for any inconvenience. While you're here, why not
              check out our homepage or use the navigation menu to find what
              you're looking for.
            </h1>

            <div className="flex justify-center mt-10">
              <Button onClick={() => navigate("/")} className="p-4">
                Go Back
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default NotFoundPage;
