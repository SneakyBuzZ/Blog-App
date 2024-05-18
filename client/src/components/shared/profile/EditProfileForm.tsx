import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { EditProfileSchema } from "@/lib/validation";
import useUserStore from "@/lib/store/userStore";
import { useToast } from "@/components/ui/use-toast";
import { useEditUserDetailsQuery } from "@/lib/react-query/queriesAndMutation";

function EditProfileForm() {
  const useStore = useUserStore();
  const { toast } = useToast();
  const {
    mutateAsync: editUserDetails,
    isPending: isLoading,
    error,
  } = useEditUserDetailsQuery();
  // 1. Define your form.
  const form = useForm<z.infer<typeof EditProfileSchema>>({
    resolver: zodResolver(EditProfileSchema),
    defaultValues: {
      username: useStore?.user?.username || "",
      fullName: useStore?.user?.fullName || "",
      email: useStore?.user?.email || "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof EditProfileSchema>) {
    const editedUser = {
      username: values.username,
      fullName: values.fullName,
      email: values.email,
    };

    const updatedUser = {
      username: "",
      fullName: "",
      email: "",
    };

    const editedUserResponse = await editUserDetails(editedUser);

    updatedUser["email"] = editedUserResponse.email;
    updatedUser["username"] = editedUserResponse.username;
    updatedUser["fullName"] = editedUserResponse.fullName;

    useStore.updateUser(updatedUser);

    toast({
      description: "Profile updated successfully",
      className: "text-green-400",
    });

    if (error) {
      toast({
        title: `Failed to update profile : ${error}`,
        className: "text-red-400",
      });
      throw new Error("Failed to update user");
    }
  }
  return (
    <>
      <div className="mx-auto flex flex-col items-center justify-center h-[25rem] py-6 w-5/12 rounded-md border border-neutral-400  dark:border-neutral-700 shadow-md">
        <h1 className="ex-text-yellow text-4xl font-freeman text-center">
          Edit your profile
        </h1>
        <div className="w-2/3 mx-auto mt-10">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8"
              encType="multipart/form-data"
            >
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="ex-input"
                        placeholder="full name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="ex-input"
                        placeholder="username"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="ex-input"
                        placeholder="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="bg-neutral-600 dark:bg-neutral-800 text-yellow-400  w-full"
              >
                {isLoading ? (
                  <>
                    <span className="loading loading-spinner text-warning"></span>
                  </>
                ) : (
                  "Submit"
                )}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
}

export default EditProfileForm;
