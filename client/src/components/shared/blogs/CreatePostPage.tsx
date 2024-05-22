import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import useThemeStore from "@/lib/store/themeStore";
import { ImageDown } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { CreateBlogSchema } from "@/lib/validation";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import {
  useCreateBlogQuery,
  useUploadBlogImageFileQuery,
} from "@/lib/react-query/queriesAndMutation";
import { useToast } from "@/components/ui/use-toast";

function CreatePostPage() {
  const navigate = useNavigate();
  const { toast } = useToast();

  const [color, setColor] = useState("#DFDFDF");
  const { theme } = useThemeStore();

  useEffect(() => {
    if (theme === "dark") {
      setColor("#DFDFDF");
    } else if (theme === "light") {
      setColor("#212121");
    }
  }, [theme]);

  const { mutateAsync: uploadBlogImageFile, isPending: isLoading } =
    useUploadBlogImageFileQuery();

  const [imageFile, setImageFile] = useState<string>("");
  async function handleImageInput(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files[0]) {
      const formData = new FormData();
      formData.append("imageFile", e.target.files[0]);
      const imageUrl = await uploadBlogImageFile(formData);
      setImageFile(imageUrl);
    }
  }

  // 1. Define your form.
  const form = useForm<z.infer<typeof CreateBlogSchema>>({
    resolver: zodResolver(CreateBlogSchema),
    defaultValues: {
      title: "",
      description: "",
      content: "",
    },
  });

  const { mutateAsync: createBlog, isPending: isCreateLoading } =
    useCreateBlogQuery();
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof CreateBlogSchema>) {
    const blog = {
      title: values.title,
      description: values.description,
      content: values.content,
      imageFile,
    };

    const newBlog = await createBlog(blog);

    if (!newBlog) {
      toast({
        description: "Something went wrong",
        className: "text-red-400",
      });
      return;
    }

    toast({
      description: "Post created successfully",
      className: "text-green-400",
    });
    navigate("/blogs");
  }
  return (
    <>
      <section className="flex flex-col justify-center items-center w-full px-20">
        <div className="w-full py-5 flex items-center px-6">
          <div className="flex flex-col justify-center items-center w-full">
            <h1 className="text-heading font-freeman text-3xl mx-auto text-center">
              Create Post
            </h1>
            <p className="text-content w-full text-center">
              Uplaod and let others read your pov and thoughts
            </p>
          </div>
          <div className="h-full">
            <Button
              onClick={() => navigate("/blogs")}
              className=" self-end w-24"
              variant="yellow"
            >
              Back
            </Button>
          </div>
        </div>
        <div className="flex justify-center items-center w-full h-full mb-10 ">
          <div className="h-full w-2/3">
            <div className="relative  h-[31rem] py-5 px-10">
              <input
                id="image-123"
                className="peer hidden"
                accept=".gif,.jpg,.png,.jpeg"
                type="file"
                multiple
                onInput={handleImageInput}
              />
              {imageFile ? (
                <>
                  <img
                    alt="gallery"
                    className="w-full h-full object-cover rounded-lg shadow-md  object-center block"
                    src={imageFile}
                  />
                </>
              ) : (
                <>
                  <label
                    htmlFor="image-123"
                    className="flex h-full ex-input cursor-pointer flex-col justify-center items-center gap-6 rounded-lg px-6 py-10 text-center"
                  >
                    <ImageDown color={color} strokeWidth={0.75} size={150} />
                    <p className="flex flex-col items-center justify-center gap-1 text-sm">
                      <span className="text-amber-400 hover:text-amber-400">
                        Upload media
                        <span className="text-content"> or drag and drop </span>
                      </span>
                      <span className="text-heading">
                        {" "}
                        PNG, JPG or GIF up to 10MB{" "}
                      </span>
                      {isLoading && (
                        <>
                          <span className="text-content">
                            File is uploading
                          </span>
                          <span className="loading loading-dots loading-md bg-yellow-500"></span>
                        </>
                      )}
                    </p>
                  </label>
                </>
              )}
            </div>
          </div>
          <div className="flex flex-col justify-center items-center w-1/2 h-full px-5">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-full space-y-3"
                encType="multipart/form-data"
              >
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="title"
                          className="ex-input"
                          type="text"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          placeholder="describe your blog briefly..."
                          className="ex-input placeholder:text-neutral-400 min-h-[30px]"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="content"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          placeholder="write something about your blog..."
                          className="ex-input placeholder:text-neutral-400 min-h-[150px]"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full" variant="yellow">
                  {isCreateLoading ? (
                    <>
                      <span className="loading loading-spinner text-warning"></span>
                    </>
                  ) : (
                    "Create"
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </section>
    </>
  );
}

export default CreatePostPage;
