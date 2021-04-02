import React from "react";

import App from "../App.js";
import logo from "assets/images/thumbnails/cloud.svg";

export const PublicRouterLayout = ({ children }) => (
  <div className="text-center pt-5">
    <div className="logo d-flex justify-content-center">
    <img src={logo} alt="logo" width="80"/>
    </div>
    <strong className="mx-auto">AgentBooks</strong>
    {children}</div>
);

export const PrivateRouterLayout = ({ children }) => <App>{children}</App>;
