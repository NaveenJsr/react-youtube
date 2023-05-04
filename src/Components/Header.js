import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../Utils/AppSlice";

import Logo from "../Assets/YouTubeLogo.png";
import Create from "../Assets/create.png";
import Bell from "../Assets/bell.png"
import {Bars3Icon} from "@heroicons/react/24/outline"
import { Link } from "react-router-dom";

function Header() {

  const dispatch = useDispatch();

  return (
    <div className="flex justify-between m-2">
      <div className="flex items-center">
        <Bars3Icon className="h-6 w-6 cursor-pointer" onClick={()=>{dispatch(toggleMenu())}}/>
       <img src={Logo} className="h-6 ml-3" alt=""></img>
      </div>
      <div className="flex items-center w-1/2 justify-center">
        <div className="flex items-center">
          <input
            type="text"
            className="border border-gray-300 w-96 rounded-l-full px-3 py-1"
            placeholder="Search">
          </input>
          <button className="border border-gray-300 px-4 py-1 rounded-r-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>

          </button>

        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 ml-4"
        >
          <path d="M8.25 4.5a3.75 3.75 0 117.5 0v8.25a3.75 3.75 0 11-7.5 0V4.5z" />
          <path d="M6 10.5a.75.75 0 01.75.75v1.5a5.25 5.25 0 1010.5 0v-1.5a.75.75 0 011.5 0v1.5a6.751 6.751 0 01-6 6.709v2.291h3a.75.75 0 010 1.5h-7.5a.75.75 0 010-1.5h3v-2.291a6.751 6.751 0 01-6-6.709v-1.5A.75.75 0 016 10.5z" />
        </svg>
      </div>

      <div className="flex items-center ">
        <img className="h-8 mr-3" src={Create} alt=""></img>
        <img className="h-8 mr-3" src={Bell} alt=""></img>
        <p className="bg-green-400 rounded-3xl h-8 w-8 text-center text-xl">K</p>
      </div>
    </div>
  );
}

export default Header;
