import React from "react";
import Tabs from "../../ahaar-common-ui/tabs";
import Login from "./Login";
import SignUp from "./SignUp";

function Authentication(props) {
  const data = [
    {
      eKey: "login",
      title: "Login",
      component: <Login />
    },
    {
      eKey: "signup",
      title: "SignUp",
      component: <SignUp />
    }
  ];

  return (
    <Tabs
      datalist={data}
      defaultIndex={1}
    />
  );
}
export default Authentication;
