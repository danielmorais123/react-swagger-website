import { useSession } from "@supabase/auth-helpers-react";
import { useState, useEffect } from "react";
import { User } from "../types/typing";
import axios from "axios";
import { supabase } from "../supabase/supabase";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, setUser } from "../redux/slices/authSlice";

const Main = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [file, setFile] = useState<File>();
  const user = useSelector(selectUser);
  const session = useSession();
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_BASE_URL}/api/users`)
      .then((res) => {
        setUsers(res.data);
      });
  }, []);

  function addUser() {
    axios
      .post(`${process.env.REACT_APP_BACKEND_BASE_URL}/api/users/insert`, {
        email: "moraisalexandre012323@hotmail.com",
        image: file?.name,
      })
      .then((res) => console.log({ res }));
  }

  async function uploadUserPhotoToServer(): Promise<string> {
    if (file === undefined) return "No file was uploaded.";
    const { data, error } = await supabase.storage
      .from("swagger")
      .upload(`users/${file?.name}`, file);
    console.log({ data, error });
    if (error) return "There was an error uploading your file.";

    return "";
  }

  return (
    <div>
      {/* @ts-ignore */}
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={uploadUserPhotoToServer}>Submit</button>
      <button onClick={addUser}>CLICK</button>
    </div>
  );
};

export default Main;
