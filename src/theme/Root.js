import React, { useState } from "react";
import { auth } from "@site/src/pocketbase";
import Login from "../pages/login";

export default function Root({ children }) {
  const [userAuth, setUserAuth] = useState("");

  auth.onChange(async function (user) {
    if (user !== null) {
      setUserAuth(user);
    }
  });

  return (
    <>
      {userAuth != "" ? (
        <>{children}</>
      ) : (
        <Login />
      )}
    </>
  );
}