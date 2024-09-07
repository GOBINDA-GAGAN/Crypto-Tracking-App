import React from "react";
import "./style.css";
import logo from "/public/logo.png";
import hero from "/public/heroImage.png";
import { Link } from "react-router-dom";
import AnchorTemporaryDrawer from "./drawer";
import Button from "../Button/Button";

const Header = () => {
  return (
    <div className="navbar px-3 pr-5">
      <div className=" flex items-center">
        <img src={logo} alt="logo" srcset="" className=" h-24" />
        <span className=" font-bold text-[#fefefe] text-5xl">Crypto</span>
      </div>

      <div className="Links">
        <a
          href="/
"
        >
          <p className="Link"> Home</p>
        </a>
        <a href="/compare">
          <p className="Link"> Compare </p>
        </a>
        <a href="/watch List">
          <p className="Link">WatchList</p>
        </a>
        <a href="#">
        <Button className="Link" text={"Dashboard"} outLine={true} onClick={()=>{console.log(" hello ") ;
        }}></Button>
    
        </a>
      </div>

      <div className="mobile-drawer">
        <AnchorTemporaryDrawer></AnchorTemporaryDrawer>
      </div>
    </div>
  );
};

export default Header;
