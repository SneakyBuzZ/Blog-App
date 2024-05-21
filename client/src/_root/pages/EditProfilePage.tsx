import EditProfileAvatar from "@/components/shared/profile/EditProfileAvatar";
import EditProfileForm from "@/components/shared/profile/EditProfileForm";

function EditProfilePage() {
  return (
    <>
      <div className="md:w-2/3 w-full gap-10 flex md:flex-row flex-col mx-auto items-center justify-center md:py-24 ">
        <div className="md:w-1/2 w-full flex justify-center items-center ">
          <EditProfileAvatar />
        </div>
        <EditProfileForm />
      </div>
    </>
  );
}

export default EditProfilePage;
