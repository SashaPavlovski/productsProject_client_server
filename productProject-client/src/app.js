import { LoginButton } from "./components/auth0/logIn.button";
import { useAuth0 } from "@auth0/auth0-react";
import { Main } from "./components/main/main.components";

import "./app.css";

export const App = () => {
  //isLoading - מחזיר אמת או שקר אם זה טוען או לא
  //isAuthenticated - מחזיר אמת או שקר אם המשתמש התחבר או לא
  const { isAuthenticated, isLoading } = useAuth0();
  if (!isLoading) {
    return (
      <div className="App">{isAuthenticated ? <Main /> : <LoginButton />}</div>
    );
  } else {
    return "Loading";
  }
};
