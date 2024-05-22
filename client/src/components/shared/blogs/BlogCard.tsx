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
      <div className="overflow-hidden scale-75 md:scale-100 h-full bg-neutral-100 dark:bg-neutral-900 rounded-xl shadow-md">
        <figure>
          <img
            src={postImageUrl}
            alt="card image"
            className="aspect-video w-full object-cover "
          />
        </figure>
        <div className="p-6">
          <header className="mb-4 flex gap-4">
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
              <h3 className="text-md font-freeman text-heading">{title}</h3>
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
          </header>
          <p className="text-content text-sm h-20 overflow-y-hidden">
            {description}
          </p>
          <div className="w-full flex justify-between items-center  mt-5">
            {!userAvatar && (
              <DropdownMenu>
                <DropdownMenuTrigger className="border-none focus:outline-none h-full">
                  <Ellipsis color={color} />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="dark:bg-neutral-700 border-none bg-neutral-200 shadow-md text-heading ">
                  <DropdownMenuItem className="hover:text-black dark:hover:text-white">
                    Edit
                  </DropdownMenuItem>

                  <DropdownMenuItem className="hover:text-black dark:hover:text-white">
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
            <Button
              onClick={() => navigate(`/blog/${slug}`)}
              variant={"ghost"}
              className=""
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
