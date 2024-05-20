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
        <div className="flex justify-between items-center h-[10%] w-full my-5 px-14">
          <div className="flex gap-5">
            <h1 className="text-heading text-3xl font-semibold">Blogs</h1>
            <div className="flex justify-center items-center gap-1 ">
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
            <Button className="bg-neutral-700 h-7 rounded-full text-white">
              Recent
            </Button>
            <Button className="bg-neutral-700 h-7 rounded-full text-white">
              Week
            </Button>
            {isUserLoggedIn && (
              <>
                <Button
                  onClick={() => navigate("/blogs/create-post")}
                  variant="yellow"
                  className="ml-5"
                >
                  Create
                </Button>
              </>
            )}
          </div>
        </div>
        <div className=" w-full grid grid-cols-3 gap-5 px-10">
          {allPosts.map((post) => (
            <li key={post._id}>
              <div className="h-[30rem] w-96 p-3">
                <BlogCard
                  title={post.title}
                  content={post.content}
                  location={post.location}
                  createdAt={post.createdAt}
                  category={post.category}
                  postImageUrl={post.imageFile}
                  userFullName={post.owner}
                  userAvatar={post.ownerAvatar}
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
