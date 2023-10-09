import React from "react";
import sideBarWeb from "../assets/images/bg-sidebar-desktop.svg";
import sideBarMobile from "../assets/images/bg-sidebar-mobile.svg";
import arcade from "../assets/images/icon-advanced.svg";
import advance from "../assets/images/icon-advanced.svg";
import pro from "../assets/images/icon-pro.svg";
import { useNavigate } from "react-router-dom";


const Step2: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="grid grid-rows-[1fr, 2fr] md:grid-cols-[1fr,2fr] gap-10 bg-white md:p-5 rounded-lg shadow-md shadow-gray-500 max-h-">
        <div
          className="w-full max-w-md mx-auto flex flex-row justify-center items-start  md:justify-start md:flex-col gap-5 p-8"
          style={{
            backgroundImage: `url(${
              window.innerWidth < 768 ? sideBarMobile : sideBarWeb
            })`,
            backgroundSize: "cover",
          }}
        >
          <div className="flex gap-4 items-center">
            <div className="w-7 h-7 rounded-full border border-white flex justify-center text-white">
              1
            </div>
            <div
              style={{ display: window.innerWidth < 768 ? "none" : "block" }}
            >
              <p className="text-gray-300 text-xs">STEP 1</p>
              <p className="text-white text-sm font-bold">YOUR INFO</p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
          <div className="w-7 h-7 rounded-full border flex justify-center bg-blue-200 text-black">
              2
            </div>
            <div
              style={{ display: window.innerWidth < 768 ? "none" : "block" }}
            >
              <p className="text-gray-300 text-xs">STEP 2</p>
              <p className="text-white text-sm font-bold">SELECT PLAN</p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <div className="w-7 h-7 rounded-full border border-white flex justify-center text-white">
              3
            </div>
            <div
              style={{ display: window.innerWidth < 768 ? "none" : "block" }}
            >
              <p className="text-gray-300 text-xs">STEP 3</p>
              <p className="text-white text-sm font-bold">ADD-ONS</p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <div className="w-7 h-7 rounded-full border border-white flex justify-center text-white">
              4
            </div>
            <div
              style={{ display: window.innerWidth < 768 ? "none" : "block" }}
            >
              <p className="text-gray-300 text-xs">STEP 4</p>
              <p className="text-white text-sm font-bold">SUMMARY</p>
            </div>
          </div>
        </div>
        <div className="p-6 relative bg-white rounded-sm">
          <h1 className="text-3xl text-gray-700 font-bold color-gray-600 leading-10 my-1">
            Select your plan
          </h1>
          <p className="text-base text-gray-400 leading-6">
           You have the option of monthly or yearly billing.
          </p>
          <div className="py-5 my-6">
            <div className="mb-4">
                <button
                       className="bg-white text-gray-700 rounded px-4 py-2 hover:bg-gray-200 absolute bottom-3 left-7"
                       onClick={() => navigate("/")}
                >
                  Go back
                </button>
                <button
                  type="submit"
                  className="bg-blue-800 text-white rounded px-4 py-2 hover:bg-blue-600 absolute bottom-3 right-7"
                  onClick={() => navigate("/step3")}
                >
                  Next Step
                </button>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Step2;
