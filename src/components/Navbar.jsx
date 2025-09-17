import React from "react";
import logo from "../assets/download.png";
import Button from "./Button";

function Navbar() {
  return (
    <div className="max-w-screen-xl mx-auto flex justify-between items-center relative border-b-[1px] border-zinc-700">
      <div className="nleft flex items-center">
        <img className="w-24" src={logo} alt="logo" />

        <div className="links flex gap-14 ml-32">
          {["Home", "Work", "Culture", "", "News"].map((elem, index) =>
            elem.length === 0 ? (
              <span key={index} className="w-[2px] h-6 bg-zinc-700"></span>
            ) : (
              <a
                key={index}
                className="text-sm font-semibold flex items-center gap-1"
                href="#"
              >
                {index === 1 && (
                  <span
                    style={{ boxShadow: "0 0 0.25em #00FF19" }}
                    className="inline-block w-1 h-1 bg-green-500 rounded-full"
                  ></span>
                )}
                {elem}
              </a>
            )
          )}
        </div>
      </div>
      <Button/>
    </div>
  );
}

export default Navbar;
