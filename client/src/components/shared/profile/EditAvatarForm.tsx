import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Pencil } from "lucide-react";

function EditAvatarForm() {
  return (
    <>
      <div className=" flex items-center justify-center w-full pl-8">
        <form
          className="flex flex-col justify-center items-center gap-2  w-60"
          action="/expresswave/api/users/update-avatar"
          method="POST"
          encType="multipart/form-data"
        >
          <Label className="text-neutral-400 pl-3" htmlFor="picture">
            Picture Picture
          </Label>
          <Input
            name="avatar"
            className=" ex-bg-lightgray ex-text-white"
            id="picture"
            type="file"
          />
        </form>
        <Button variant={"ghost"} className="self-end">
          <Pencil height={15} />
        </Button>
      </div>
    </>
  );
}

export default EditAvatarForm;
