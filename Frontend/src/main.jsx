import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    // <React.StrictMode>
    <BrowserRouter >
        <Auth0Provider
            domain="diwakardb.us.auth0.com"
            clientId="YHADxGv2TeOlwIluwCdxeFKMz3eOuIaq"
            // redirectUri={window.location.origin + "/callback"}
            redirectUri={ "http://localhost:5173/"}
            cacheLocation="localstorage" 
        >
            <App />
        </Auth0Provider>
    </BrowserRouter>
    // </React.StrictMode>
);

// mongodb password GpGwi4afpOLIA22h
