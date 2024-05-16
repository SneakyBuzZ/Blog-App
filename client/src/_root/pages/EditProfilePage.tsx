import EditProfileAvatar from "@/components/shared/profile/EditProfileAvatar";
import EditProfileForm from "@/components/shared/profile/EditProfileForm";

function EditProfilePage() {
  return (
    <>
      <div className="w-2/3 mx-auto  justify-center flex py-20">
        <div className="w-1/2  flex justify-center items-center">
          <EditProfileAvatar />
        </div>
        <EditProfileForm />
      </div>
    </>
  );
}

export default EditProfilePage;
