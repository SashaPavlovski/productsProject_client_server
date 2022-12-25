import React from "react";

import { useAuth0 } from "@auth0/auth0-react";

export const Profile = () => {
  //user - מביא את פרטי המשתמש
  const { user } = useAuth0();
  return (
    <>
      <img src={user.picture} alt={user.name} className="my-picture" />
      <h2 className="my-user">{user.name}</h2>
      <p className="my-user">{user.email}</p>
    </>
  );
};
