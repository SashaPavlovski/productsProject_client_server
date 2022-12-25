import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./app";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider
        domain="dev-mluuahxjbvf524ap.us.auth0.com"
        clientId="DTT8dEdvwwsrCCOyqS8jAgge5yA5heGP"
        redirectUri={window.location.origin}
      >
        <App />
      </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>
);
