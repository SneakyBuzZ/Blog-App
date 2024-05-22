import { Button } from "@/components/ui/button";
// import BlogCard from "./BlogCard";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import useUserStore from "@/lib/store/userStore";
import { useGetAllBlogsQuery } from "@/lib/react-query/queriesAndMutation";
import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { AllBlogsType } from "@/lib/types";
import BlogCard from "./BlogCard";
import PostSkeleton from "../small/PostSkeleton";

function MainSection() {
  const navigate = useNavigate();
  const { isUserLoggedIn } = useUserStore();
  const { toast } = useToast();
  const { mutateAsync: getAllPosts, isPending: isLoading } =
    useGetAllBlogsQuery();

  const [allBlogs, setAllBlogs] = useState<AllBlogsType[]>([]);

  useEffect(() => {
    getAllPosts()
      .then((response) => {
        setAllBlogs(response);
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
      <section className="flex flex-col items-center h-full pb-7">
        <div className="flex justify-center md:justify-between items-center h-[10%] w-full my-5 md:px-14 ">
          <div className="flex items-center md:gap-5">
            <h1 className="hidden md:block text-heading text-md md:text-3xl font-semibold">
              Your Blogs
            </h1>
            <div className="flex w-60 justify-center items-center gap-1 scale-75 md:scale-100">
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
                  onClick={() => navigate("/blogs/create-blog")}
                  variant="yellow"
                  className="ml-5 md:scale-100 scale-75 "
                >
                  Create
                </Button>
              </>
            )}
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 w-screen px-20">
          {allBlogs.map((post) => (
            <li key={post.slug} className="w-full md:p-10">
              <div className="h-[25rem]">
                <BlogCard
                  title={post.title}
                  description={post.description}
                  content={post.content}
                  createdAt={post.createdAt}
                  postImageUrl={post.imageFile}
                  userFullName={post.authorDetails.fullName}
                  userAvatar={post.authorDetails.avatar}
                  slug={post.slug}
                />
              </div>
            </li>
          ))}
          {isLoading && (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 w-screen px-20">
                <PostSkeleton />
                <PostSkeleton />
                <PostSkeleton />
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}

// lg:scale-90 lg:w-96 md:w-80 w-96 md:scale-100 scale-90 md:mb-0

export default MainSection;
