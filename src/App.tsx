import axios from "axios";
import { useEffect, useState } from "react";
import { User } from "./types/typing";
import Navbar from "./components/Navbar";
import { useSession } from "@supabase/auth-helpers-react";
import { supabase } from "./supabase/supabase";
import Main from "./components/Main";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, setUser } from "./redux/slices/authSlice";

function App() {
  const session = useSession();
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  console.log({ user });
  console.log({ session });
  function addUser() {
    axios
      .post(`${process.env.REACT_APP_BACKEND_BASE_URL}/api/users/insert`, {
        email: session?.user?.email,
      })
      .then((res) => console.log({ res }));
  }

  function addUserWithGoogleToDb() {
    return axios.post(
      `${process.env.REACT_APP_BACKEND_BASE_URL}/api/users/insert`,
      {
        email: session?.user?.email,
        firstName: session?.user?.user_metadata?.name.split(" ")[0],
        lastName: session?.user?.user_metadata?.name.split(" ")[1],
        isEmailConfirmed: session?.user?.user_metadata?.email_verified,
        userName: session?.user?.user_metadata?.name,
        image: session?.user?.user_metadata?.picture,
      }
    );
  }

  const fetchUserAndUpdate = () => {
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_BASE_URL}/api/users/get-by-email/${session?.user?.email}`
      )
      .then((res) => {
        if (res?.data) {
          dispatch(setUser(res.data));
          return;
        }
        if (session?.user?.app_metadata?.provider === "google") {
          addUserWithGoogleToDb().then((res) => {
            if (res.data.split(" ")[0] === "User") {
              axios
                .get(
                  `${process.env.REACT_APP_BACKEND_BASE_URL}/api/users/get-by-email/${session?.user?.email}`
                )
                .then((response) => {
                  console.log({ response });
                  if (response?.data) {
                    dispatch(setUser(response.data));
                    return;
                  }
                });
            }
          });
        }
      });
  };

  useEffect(() => {
    if (!session) return;
    if (user) return;
    fetchUserAndUpdate();
  }, [session]);

  return (
    <div className="bg-[#242427] min-h-screen">
      <Navbar />
    </div>
  );
}

export default App;
