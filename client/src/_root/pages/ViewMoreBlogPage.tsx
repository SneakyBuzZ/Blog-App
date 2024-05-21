import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useGetPostBySlug } from "@/lib/react-query/queriesAndMutation";
import { AllPostsType } from "@/lib/types";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ViewMoreBlogPage() {
  const { mutateAsync: getPostBySlug, isPending: isLoading } =
    useGetPostBySlug();
  const { slug } = useParams();
  const [blogPost, setBlogPost] = useState<AllPostsType | null>(null);

  useEffect(() => {
    if (slug) {
      getPostBySlug(slug).then((post) => {
        setBlogPost(post);
      });
    }
  }, [slug]);
  return (
    <>
      {isLoading ? (
        <>
          <section className="text-gray-600 body-font dark:bg-[#0D0D0D] bg-neutral-100">
            <div className="container px-5 py-14 mx-auto flex flex-col">
              <div className="lg:w-4/6 mx-auto">
                <div className="rounded-lg h-64 overflow-hidden skeleton bg-neutral-300 dark:bg-neutral-800"></div>
                <div className="flex flex-col sm:flex-row mt-10">
                  <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                    <div className="w-20 h-20 rounded-full inline-flex items-center bg-neutral-300 skeleton dark:bg-neutral-800  justify-center  text-gray-400"></div>
                    <div className="flex flex-col items-center text-center justify-center h-10">
                      <h2 className="font-medium title-font mt-4 text-heading text-lg bg-neutral-300 skeleton dark:bg-neutral-800 h-10"></h2>
                    </div>
                  </div>
                  <div className="sm:w-2/3 sm:pl-8 sm:py-8  mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                    <p className="leading-relaxed text-content text-lg mb-4 bg-neutral-300 skeleton dark:bg-neutral-800 h-20"></p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <>
          <section className="text-gray-600 body-font dark:bg-[#0D0D0D] bg-neutral-100">
            <div className="container px-5 py-14 mx-auto flex flex-col">
              <div className="lg:w-4/6 mx-auto">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img
                    alt="content"
                    className="object-cover object-center h-full w-full shadow-lg"
                    src={blogPost?.imageFile}
                  />
                </div>
                <div className="flex flex-col sm:flex-row mt-10">
                  <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                    <div className="w-20 h-20 rounded-full inline-flex items-center justify-center">
                      <Avatar className="h-full w-full scale-90">
                        <AvatarImage
                          className="  rounded-full object-cover object-center ex-editprofile-shadow"
                          src={blogPost?.ownerAvatar}
                        />
                        <AvatarFallback>{blogPost?.owner}</AvatarFallback>
                      </Avatar>
                    </div>
                    <div className="flex flex-col items-center text-center justify-center">
                      <h2 className="font-medium title-font mt-4 text-heading text-lg">
                        {blogPost?.owner}
                      </h2>
                      <div className="w-12 h-1 bg-neutral-700 rounded mt-2 mb-4"></div>
                    </div>
                  </div>
                  <div className="sm:w-2/3 sm:pl-8 sm:py-8 md:border-l md:dark:border-l-neutral-700 md:border-l-neutral-400 mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                    <p className="leading-relaxed text-content text-lg mb-4">
                      {blogPost?.content}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}

export default ViewMoreBlogPage;
