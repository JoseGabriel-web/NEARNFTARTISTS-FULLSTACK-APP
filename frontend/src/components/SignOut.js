import React from "react";
import { logOut } from "../utils";

const SignOut = ({ wallet, setAccountID }) => {
  return (
    <div
      onClick={() => {
        setAccountID()
        logOut(wallet);        
      }}
    >
      Logout
    </div>
  );
};

export default SignOut;
