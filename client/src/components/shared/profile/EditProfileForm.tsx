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
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";

function EditProfileForm() {
  const useStore = useUserStore();
  const { toast } = useToast();
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

    try {
      const response = await axios.patch(
        "/expresswave/api/users/update-account",
        editedUser
      );

      updatedUser["email"] = response?.data?.data?.email;
      updatedUser["username"] = response?.data?.data?.username;
      updatedUser["fullName"] = response?.data?.data?.fullName;

      useStore.updateUser(updatedUser);

      toast({
        description: "Profile updated successfully",
        className: "text-green-400",
      });
    } catch (error) {
      toast({
        title: "Failed to update profile",
        className: "text-red-400",
      });
      throw new Error("Failed to update user");
    }
  }
  return (
    <>
      <div className="mx-auto py-5  w-5/12 rounded-md">
        <h1 className="ex-text-yellow text-4xl font-lobster text-center">
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
                        className="ex-bg-lightgray ex-text-white"
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
                        className="ex-bg-lightgray ex-text-white"
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
                        className="ex-bg-lightgray ex-text-white"
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
                className="ex-bg-darkgray ex-text-yellow hover:bg-neutral-900 w-full"
              >
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
}

export default EditProfileForm;
