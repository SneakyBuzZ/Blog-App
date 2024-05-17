import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useRef } from "react";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";
import useUserStore from "@/lib/store/userStore";

function EditAvatarForm() {
  const [avatarFile, setAvatarFile] = useState<File | null | string>(null);
  const { toast } = useToast();
  const useStore = useUserStore();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAvatarFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!avatarFile) {
      toast({
        title: "Please select a file to upload",
        className: "ex-text-white",
      });
      return;
    }

    console.log("Uploaded file:", avatarFile);

    const formData = new FormData();
    formData.append("avatar", avatarFile);

    console.log("FormData:", formData);

    try {
      const response = await axios.patch(
        "/expresswave/api/users/update-avatar",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      useStore.updateAvatar(response.data.data.avatar);

      toast({
        title: "Avatar updated successfully",
        className: "text-green-400",
      });

      // Clear the input and state after successful upload
      setAvatarFile(null);
      if (inputRef.current) {
        inputRef.current.value = "";
      }
    } catch (error) {
      toast({
        title: "Error uploading avatar",
        className: "text-red-400",
      });
      console.error("Error uploading avatar:", error);
    }
  };

  return (
    <div className="flex items-center justify-center w-full">
      <form
        className="flex justify-center items-center gap-2 w-[20rem]"
        onSubmit={handleSubmit}
      >
        <Input
          ref={inputRef}
          name="avatar"
          className="bg-neutral-900 ex-text-white"
          id="picture"
          type="file"
          onChange={handleFileChange}
        />
        <Button
          type="submit"
          variant={"default"}
          className="self-end bg-neutral-800 text-white"
        >
          Change
        </Button>
      </form>
    </div>
  );
}

export default EditAvatarForm;
