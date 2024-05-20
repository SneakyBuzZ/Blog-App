function PostSkeleton() {
  return (
    <>
      <div className="flex flex-col gap-4 w-80 h-[28rem] mt-10">
        <div className="skeleton h-60 w-full dark:bg-neutral-700 bg-neutral-300"></div>
        <div className="skeleton h-4 w-28 dark:bg-neutral-700 bg-neutral-300"></div>
        <div className="skeleton h-4 w-full dark:bg-neutral-700 bg-neutral-300"></div>
        <div className="skeleton h-4 w-full dark:bg-neutral-700 bg-neutral-300"></div>
      </div>
    </>
  );
}

export default PostSkeleton;
