import useMenuAnimation from "../animations/useMenuAnimation";
import { useEffect, useState } from "react";
import { supabase } from "../supabase/supabase";
import { motion } from "framer-motion";
import { useSession } from "@supabase/auth-helpers-react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, setUser } from "../redux/slices/authSlice";
import axios from "axios";

const Navbar = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const signUpUser = async () => {
    const { data, error } = await supabase.auth.signUp({
      email: "moraisalexandre01@hotmail.com",
      password: "Benfica123@",
    });
  };

  const loginUser = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: "moraisalexandre01@hotmail.com",
      password: "Benfica123@",
    });
  };

  const logout = async () => {
    await supabase.auth.signOut();
    dispatch(setUser(null));
  };

  return (
    <nav className="w-[95%] mx-auto max-w-4xl p-3 flex justify-between">
      <a className="font-bold tracking-wider text-xl text-white brand">
        HoCost
      </a>
      <div>
        {/* <button onClick={signUpUser}>Sign Up</button> */}
        {user ? (
          <button
            onClick={logout}
            className="bg-[#EB9B49] hover:bg-[#EB9B49]/80 transition-all text-[12px] p-2 px-4 rounded-md tracking-wide"
          >
            Sign Out
          </button>
        ) : (
          <button
            onClick={() => {
              window.location.href = "/auth/login";
            }}
            className="bg-[#EB9B49] hover:bg-[#EB9B49]/80 transition-all text-[12px] p-2 rounded-md tracking-wide"
          >
            Authenticate
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
