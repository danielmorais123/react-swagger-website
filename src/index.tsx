import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { supabase } from "./supabase/supabase";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profile from "./components/Profile";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Login from "./pages/Login";
import Register from "./pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/auth/login",
    element: <Login />,
  },
  {
    path: "/auth/register",
    element: <Register />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <SessionContextProvider supabaseClient={supabase}>
      <RouterProvider router={router} />
    </SessionContextProvider>
  </Provider>
);
