import React from "react";
import sideBarWeb from "../assets/images/bg-sidebar-desktop.svg";
import sideBarMobile from "../assets/images/bg-sidebar-mobile.svg";
import arcade from "../assets/images/icon-arcade.svg";
import advance from "../assets/images/icon-advanced.svg";
import pro from "../assets/images/icon-pro.svg";
import useFormStore from "../store/formstore";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";

const Step2Schema = z.enum(["Arcade-9", "Advanced-12", "Pro-15"]);

const Step2: React.FC = () => {
  const navigate = useNavigate();
  const { step2, setForm2 } = useFormStore();

  return (
    <Formik
      initialValues={step2}
      validationSchema={toFormikValidationSchema(Step2Schema)}
      onSubmit={(values) => {
        // console.log(values);
        setForm2(values);
        navigate("/step3");
      }}
    >
      {({ values }) => (
        <Form>
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
                  style={{
                    display: window.innerWidth < 768 ? "none" : "block",
                  }}
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
                  style={{
                    display: window.innerWidth < 768 ? "none" : "block",
                  }}
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
                  style={{
                    display: window.innerWidth < 768 ? "none" : "block",
                  }}
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
                  style={{
                    display: window.innerWidth < 768 ? "none" : "block",
                  }}
                >
                  <p className="text-gray-300 text-xs">STEP 4</p>
                  <p className="text-white text-sm font-bold">SUMMARY</p>
                </div>
              </div>
            </div>
            <div className="py-6 px-9 relative bg-white rounded-sm">
              <h1 className="text-3xl text-gray-700 font-bold color-gray-600 leading-10 my-1">
                Select your plan
              </h1>
              <p className="text-base text-gray-400 leading-6">
                You have the option of monthly or yearly billing.
              </p>
              <div className="py-5 my-6">
                <div className="mb-4">
                  <div className="flex flex-row gap-5 mb-8">
                    <label
                      className={`w-32 h-36 ${
                        values.plan === "Arcade-9" ? "border-2" : "border"
                      } px-3 py-5 ${
                        values.plan === "Arcade-9"
                          ? "border-indigo-800"
                          : "border-gray-400"
                      }  rounded-md relative`}
                    >
                      <img src={arcade} />
                      <div className="absolute bottom-3">
                        <p className="font-semibold text-sm text-gray-800">
                          Arcade
                        </p>
                        <p className="text-xs text-gray-500 font-semibold">
                          {values.yearly ? "$90/yr" : "$9/mo"}
                        </p>
                        {values.yearly && (
                          <p className="text-xs text-gray-600 font-bold">
                            2 months free
                          </p>
                        )}
                      </div>
                      <Field
                        type="radio"
                        id="Arcade-9"
                        name="plan"
                        value="Arcade-9"
                        className="hidden"
                      />
                    </label>
                    <label
                      className={`w-32 h-36 ${
                        values.plan === "Advanced-12" ? "border-2" : "border"
                      } px-3 py-5 ${
                        values.plan === "Advanced-12"
                          ? "border-indigo-800"
                          : "border-gray-400"
                      }  rounded-md relative`}
                    >
                      <img src={advance} />
                      <div className="absolute bottom-3">
                        <p className="font-semibold text-sm text-gray-800">
                          Advanced
                        </p>
                        <p className="text-xs text-gray-500 font-semibold">
                          {values.yearly ? "$120/yr" : "$12/mo"}
                        </p>
                        {values.yearly && (
                          <p className="text-xs text-gray-600 font-bold">
                            2 months free
                          </p>
                        )}
                      </div>
                      <Field
                        type="radio"
                        id="Advanced-12"
                        name="plan"
                        value="Advanced-12"
                        className="hidden"
                      />
                    </label>
                    <label
                      className={`w-32 h-36 ${
                        values.plan === "Pro-15" ? "border-2" : "border"
                      } px-3 py-5 ${
                        values.plan === "Pro-15"
                          ? "border-indigo-800"
                          : "border-gray-400"
                      }  rounded-md relative`}
                    >
                      <img src={pro} />
                      <div className="absolute bottom-3">
                        <p className="font-semibold text-sm text-gray-800">
                          Pro
                        </p>
                        <p className="text-xs text-gray-500 font-semibold">
                          {values.yearly ? "$150/yr" : "$15/mo"}
                        </p>
                        {values.yearly && (
                          <p className="text-xs text-gray-600 font-bold">
                            2 months free
                          </p>
                        )}
                      </div>
                      <Field
                        type="radio"
                        id="Pro-15"
                        name="plan"
                        value="Pro-15"
                        className="hidden"
                      />
                    </label>
                  </div>
                  <div className=" bg-gray-100 flex gap-4 justify-center items-center w-full min-h-[4rem] rounded-lg mb-24">
                    <p className="font-black text-gray-800">Monthly</p>
                    <label
                      className={`${
                        values.yearly ? "after:translate-x-[24px]" : ""
                      } cursor-pointer w-[48px] h-[24px] rounded-full relative after:absolute after:top-[4px] after:left-[4px] after:w-[16px] after:h-[16px] after:bg-white after:rounded-full after:duration-300 after:ease-in-out bg-indigo-800`}
                    >
                      <Field
                        type="checkbox"
                        name="yearly"
                        className="absolute left-4 top-2 hidden"
                      />
                    </label>
                    <p className="font-black text-gray-800">Yearly</p>
                  </div>
                  <ErrorMessage name="plan">
                    {(errorMsg) => (
                      <p className="text-red-500 text-xs">{errorMsg}</p>
                    )}
                  </ErrorMessage>
                  <button
                    className="bg-white text-gray-700 rounded px-4 py-2 hover:bg-gray-200 absolute bottom-3 left-7"
                    onClick={() => navigate("/")}
                  >
                    Go back
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-800 text-white rounded px-4 py-2 hover:bg-blue-600 absolute bottom-3 right-7"
                  >
                    Next Step
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Step2;
