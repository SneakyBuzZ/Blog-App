import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useThemeStore from "@/lib/store/themeStore";
import { formatDate } from "@/lib/utils";
import { Ellipsis } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface BlogCardType {
  title: string;
  description: string;
  content: string;
  createdAt: string;
  userAvatar?: string;
  userFullName?: string;
  slug: string;
  postImageUrl: string;
}

function BlogCard({
  title,
  description,
  content,
  createdAt,
  userAvatar,
  userFullName,
  postImageUrl,
  slug,
}: BlogCardType) {
  if (content) null;

  const [date, setDate] = useState<string>("");

  useEffect(() => {
    const formatedDate = formatDate(createdAt);
    setDate(formatedDate);
  }, []);

  const { theme } = useThemeStore();
  const [color, setColor] = useState<string>("#ffffff");
  useEffect(() => {
    if (theme === "light") {
      setColor("#0D0D0D");
    } else {
      setColor("#ffffff");
    }
  }, [theme]);

  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col items-center  overflow-hidden scale-100 h-full bg-neutral-100 dark:bg-neutral-900 rounded-xl shadow-md">
        <figure>
          <img
            src={postImageUrl}
            alt="card image"
            className="aspect-video w-full object-cover "
          />
        </figure>
        <div className=" flex flex-col justify-between gap-2 p-3 ">
          <div className="flex justify-start items-center w-full gap-3 ">
            {userAvatar && (
              <a
                href="#"
                className="relative inline-flex h-12 w-12 items-center justify-center rounded-full text-white"
              >
                <Avatar className="w-[3rem] h-[3rem]">
                  <AvatarImage
                    className="  rounded-full object-cover object-center ex-editprofile-shadow"
                    src={userAvatar}
                  />
                  <AvatarFallback>{userFullName}</AvatarFallback>
                </Avatar>
              </a>
            )}

            <div>
              <h3 className=" text-sm md:text-lg font-freeman text-heading">
                {title}
              </h3>
              <p className="text-xs dark:text-amber-300 text-neutral-700">
                {userFullName ? (
                  <>
                    By {userFullName}, {date}
                  </>
                ) : (
                  <>Posted on {date}</>
                )}
              </p>
            </div>
          </div>

          <p className="text-content text-sm overflow-clip h-9">
            {description}
          </p>
          <div className="w-full flex justify-between items-center mt-3 ">
            {!userAvatar && (
              <DropdownMenu>
                <DropdownMenuTrigger className="border-none focus:outline-none h-full  ml-3">
                  <Ellipsis color={color} />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="dark:bg-black border-none bg-neutral-200 shadow-md text-heading ">
                  <DropdownMenuItem
                    onClick={() => navigate(`/edit-blog/${slug}`)}
                    className="hover:text-black dark:hover:text-white text-content"
                  >
                    Edit
                  </DropdownMenuItem>

                  <DropdownMenuItem className="hover:text-black dark:hover:text-white text-content">
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
            <Button
              onClick={() => navigate(`/blog/${slug}`)}
              className="bg-transparent text-content hover:text-neutral-100"
            >
              Read more
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogCard;
