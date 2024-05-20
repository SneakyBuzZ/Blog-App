import { formatDate } from "@/lib/utils";
import { useEffect, useState } from "react";

interface BlogCardType {
  title: string;
  content: string;
  location: string;
  createdAt: string;
  category: string;
  userAvatar?: string;
  userFullName?: string;
  postImageUrl: string;
}

function BlogCard({
  title,
  content,
  location,
  createdAt,
  category,
  userAvatar = "https://i.pravatar.cc/48?img=24",
  userFullName,
  postImageUrl = "https://picsum.photos/id/114/800/600",
}: BlogCardType) {
  if (location && category) null;
  const [date, setDate] = useState<string>("");

  useEffect(() => {
    const formatedDate = formatDate(createdAt);
    setDate(formatedDate);
  }, []);

  return (
    <>
      <div className="overflow-hidden h-[28rem] bg-neutral-100 dark:bg-[#0D0D0D] rounded-xl shadow-md">
        <figure>
          <img
            src={postImageUrl}
            alt="card image"
            className="aspect-video w-full object-cover "
          />
        </figure>
        <div className="p-6">
          <header className="mb-4 flex gap-4">
            <a
              href="#"
              className="relative inline-flex h-12 w-12 items-center justify-center rounded-full text-white"
            >
              <img
                src={userAvatar}
                alt="user name"
                title="user name"
                width="48"
                height="48"
                className="max-w-full rounded-full object-cover"
              />
            </a>
            <div>
              <h3 className="text-md font-freeman text-heading">{title}</h3>
              <p className="text-xs dark:text-amber-300 text-neutral-700">
                By {userFullName}, {date}
              </p>
            </div>
          </header>
          <p className="text-content text-sm">{content}</p>
        </div>
      </div>
    </>
  );
}

export default BlogCard;
