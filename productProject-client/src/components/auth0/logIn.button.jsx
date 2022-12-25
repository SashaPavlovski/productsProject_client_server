import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const LoginButton = () => {
  //שלהם server מול ה HTTP ספרייה שעושה בקשות - useAuth0
  const { loginWithRedirect } = useAuth0();

  return (
    // לאיזה דף להחזיר את המשתמש - loginWithRedirect
    <button
      className="btn btn-primary"
      onClick={() => loginWithRedirect("http://localhost:3000/")}
    >
      Log In
    </button>
  );
};
