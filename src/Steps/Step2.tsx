import React from "react";
import SideBar from "../components/SideBar";
import arcade from "../assets/images/icon-arcade.svg";
import advance from "../assets/images/icon-advanced.svg";
import pro from "../assets/images/icon-pro.svg";
import useFormStore from "../store/formstore";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";

const Step2Schema = z.object({
  plan: z.enum(["Arcade-9", "Advanced-12", "Pro-15"])
})

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
          <div className="grid grid-rows-[1fr, 2fr] sm:grid-cols-[1fr,2fr] gap-10 bg-white sm:p-5 rounded-lg shadow-md shadow-gray-500">
            <SideBar step={2} />
            <div className="p-6 relative bg-white rounded-sm -translate-y-16 md:translate-y-0">
              <h1 className="text-3xl text-gray-700 font-bold color-gray-600 leading-10 my-1">
                Select your plan
              </h1>
              <p className="text-base text-gray-400 leading-6">
                You have the option of monthly or yearly billing.
              </p>
              <div className="py-5 my-6">
                <div className="mb-4">
                  <div className="flex flex-col items-center sm:items-start sm:flex-row gap-5 mb-8">
                    <label
                      className={`w-full sm:w-32 h-36 ${
                        values.plan === "Arcade-9" ? "border-2" : "border"
                      } px-3 py-5 ${
                        values.plan === "Arcade-9"
                          ? "border-indigo-800"
                          : "border-gray-400"
                      }  rounded-md relative`}
                    >
                      <div className="flex flex-row">
                        <div>
                          <img src={arcade} />
                        </div>
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
                      </div>
                    </label>
                    <label
                      className={`w-full sm:w-32 h-36 ${
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
                      className={`w-full sm:w-32 h-36 ${
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
                  <div className=" bg-gray-100 flex gap-4 justify-center items-center w-full min-h-[4rem] rounded-lg sm:mb-24">
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
