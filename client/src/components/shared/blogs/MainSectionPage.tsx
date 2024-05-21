import { Button } from "@/components/ui/button";
// import BlogCard from "./BlogCard";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import useUserStore from "@/lib/store/userStore";
import { useGetAllPostQuery } from "@/lib/react-query/queriesAndMutation";
import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { AllPostsType } from "@/lib/types";
import BlogCard from "./BlogCard";
import PostSkeleton from "../small/PostSkeleton";

function MainSection() {
  const navigate = useNavigate();
  const { isUserLoggedIn } = useUserStore();
  const { toast } = useToast();
  const { mutateAsync: getAllPosts, isPending: isLoading } =
    useGetAllPostQuery();

  const [allPosts, setAllPosts] = useState<AllPostsType[]>([]);

  useEffect(() => {
    getAllPosts()
      .then((response) => {
        setAllPosts(response);
      })
      .catch((error) => {
        toast({
          description: `Failled to load all posts ${error}`,
          className: "text-red-400",
        });
      });
  }, []);

  return (
    <>
      <section className="flex flex-col items-center h-full">
        <div className="flex justify-between items-center h-[10%] w-full my-5 md:px-14">
          <div className="flex items-center gap-5">
            <h1 className="text-heading text-xl md:text-3xl font-semibold">
              Blogs
            </h1>
            <div className="flex w-60 justify-center items-center gap-1 md:scale-100 scale-75">
              <Input type="text" placeholder="Search" className="ex-input" />
              <Button
                variant="yellow"
                className="transform transition-transform duration-150 active:scale-95 focus:outline-none"
              >
                Search
              </Button>
            </div>
          </div>
          <div className="flex gap-1 h-full items-center pr-3">
            <Button className="bg-neutral-700 h-7 rounded-full text-white hidden md:flex">
              Recent
            </Button>
            <Button className="bg-neutral-700 h-7 rounded-full text-white hidden md:flex">
              Week
            </Button>
            {isUserLoggedIn && (
              <>
                <Button
                  onClick={() => navigate("/blogs/create-post")}
                  variant="yellow"
                  className="ml-5 md:scale-100 scale-75"
                >
                  Create
                </Button>
              </>
            )}
          </div>
        </div>
        <div className=" w-full  grid lg:grid-cols-3 md:grid-cols-2 gap-1 px-5 justify-center place-items-center ">
          {allPosts.map((post) => (
            <li key={post._id}>
              <div className="  lg:scale-90 lg:w-96 md:w-80 w-96 md:scale-100 scale-90">
                <BlogCard
                  title={post.title}
                  content={post.content}
                  location={post.location}
                  createdAt={post.createdAt}
                  category={post.category}
                  postImageUrl={post.imageFile}
                  userFullName={post.owner}
                  userAvatar={post.ownerAvatar}
                  slug={post.slug}
                />
              </div>
            </li>
          ))}
          {isLoading && (
            <>
              <PostSkeleton />
              <PostSkeleton />
              <PostSkeleton />
            </>
          )}
        </div>
      </section>
    </>
  );
}

export default MainSection;
