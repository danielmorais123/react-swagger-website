import { useState } from "react";
import { supabase } from "../supabase/supabase";

const Profile = () => {
  const [file, setFile] = useState<File>();

  async function uploadUserPhotoToServer(): Promise<string> {
    if (file === undefined) return "No file was uploaded.";
    const { data, error } = await supabase.storage
      .from("swagger")
      .upload(`users/teste`, file);

    if (error) return "There was an error uploading your file.";

    return "";
  }

  return <div>Profile</div>;
};

export default Profile;
