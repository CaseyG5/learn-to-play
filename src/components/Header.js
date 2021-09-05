import { useState } from "react";
import NavBar from "./sections/header/NavBar";
import Profile from "./sections/header/Profile";

const Header = () => {


  return (
    <div className={"flex justify-center bg-white"}>
      <NavBar />

    </div>
  );
};

export default Header;
