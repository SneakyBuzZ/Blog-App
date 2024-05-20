import { Button } from "@/components/ui/button";
import useUserStore from "@/lib/store/userStore";
import { useNavigate } from "react-router-dom";

function AboutPage() {
  const navigate = useNavigate();
  const { isUserLoggedIn } = useUserStore();
  const handleClick = () => {
    if (isUserLoggedIn) {
      navigate("/blogs/create-post");
    } else {
      navigate("/register");
    }
  };
  return (
    <>
      <div className="w-full py-10 flex flex-col gap-14">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="w-full flex flex-col items-center justify-center">
            <h1 className="text-6xl font-lobster font-bold text-heading">
              Express Wave
            </h1>
            <p className="py-6 w-2/3 text-content">
              Welcome to Express Wave, your go-to destination for insightful,
              engaging, and thought-provoking content! At Express Wave, we
              believe in the power of words to inspire, educate, and connect.
              Our blog covers a diverse range of topics, from the latest trends
              in technology and lifestyle to in-depth analyses of current events
              and personal growth stories.
            </p>
            <Button variant={"yellow"} onClick={handleClick}>
              Get Started
            </Button>
          </div>
        </div>
        <div className="flex w-full justify-center items-center"></div>
        <div className="flex flex-col items-center justify-center text-center">
          <div className="w-2/3 flex flex-col items-center justify-center ">
            <h1 className="text-4xl font-freeman font-semibold text-heading">
              Our Mission
            </h1>
            <p className="py-6 w-2/3 text-content">
              Our mission is to create a vibrant online community where readers
              can find quality content that not only informs but also sparks
              curiosity and encourages meaningful conversations. We strive to
              provide a platform where voices from different backgrounds and
              perspectives can be heard, offering our readers a well-rounded
              view of the world.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
