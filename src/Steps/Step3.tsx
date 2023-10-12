import React from "react";
import sideBarWeb from "../assets/images/bg-sidebar-desktop.svg";
import sideBarMobile from "../assets/images/bg-sidebar-mobile.svg";
import { useNavigate } from "react-router-dom";
import useFormStore from "../store/formstore";
import {z} from 'zod';
import {Formik, Form, Field, ErrorMessage} from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";

const Step3Schema = z.object({
  addOns: z.string().array().optional(),
});
const Step2: React.FC = () => {
  const navigate = useNavigate();
  const {step2, step3, setForm3} = useFormStore();

  return (
    <Formik
    initialValues={step3}
    validationSchema={toFormikValidationSchema(Step3Schema)}
    onSubmit={(values) => {
      // console.log(values);
      setForm3(values);
      navigate("/step4");
    }}
    >
      {({values}) => (
      <Form>
      <div className="grid grid-rows-[1fr, 2fr] md:grid-cols-[1fr,2fr] gap-8 bg-white md:p-5 rounded-lg shadow-md shadow-gray-500 max-h-">
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
            <div className="w-7 h-7 rounded-full border border-white flex justify-center text-white">
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
            <div className="w-7 h-7 rounded-full border flex justify-center bg-blue-200 text-black">
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
        <div className="px-16 py-8 relative bg-white rounded-sm">
          <h1 className="text-3xl text-gray-700 font-bold color-gray-600 leading-10 my-1 px-2">
            Pick add-ons
          </h1>
          <p className="text-base text-gray-400 leading-6 px-2">
            Add-ons help enhance your gaming experience.
          </p>
          <div className="py-5 my-6">
            <div className="mb-4">
              <div className="flex flex-col gap-5 mb-8 px-2">
                <label
                  className={`w-full h-20 ${
                    values.addOns.includes('Online Service-1') ? "border-2" : "border"
                  } px-3 py-5 ${
                    values.addOns.includes('Online Service-1') ? "border-indigo-800" : "border-gray-400"
                  }  rounded-md`}
                >
                  <div className="flex flex-row justify-between items-center gap-5">
                    <Field
                      type="checkbox"
                      name="addOns"
                      className="w-5 h-5 mr-2 border border-gray-400 rounded"
                      value="Online Service-1"
                    />
                    <div>
                      <p className="font-bold text-sm text-gray-800">
                        Online service
                      </p>
                      <p className="text-xs text-gray-500 font-semibold">
                        Access to multiplayer games
                      </p>
                    </div>
                    <p className="text-sm text-indigo-600 font-semibold px-3">
                      {step2.yearly ? '+10/yr' : '+$1/mo' }
                    </p>
                  </div>
                </label>
                <label
                  className={`w-full h-20 ${
                    values.addOns.includes('Larger Storage-2') ? "border-2" : "border"
                  } px-3 py-5 ${
                    values.addOns.includes('Larger Storage-2') ? "border-indigo-800" : "border-gray-400"
                  }  rounded-md`}
                >
                  <div className="flex flex-row justify-between items-center gap-5">
                    <Field
                      type="checkbox"
                      name="addOns"
                      className="w-5 h-5 mr-2 border border-gray-400 rounded"
                      value="Larger Storage-2"
                    />
                    <div>
                      <p className="font-bold text-sm text-gray-800">
                        Larger Storage
                      </p>
                      <p className="text-xs text-gray-500 font-semibold">
                        Extra 1TB of cloud save
                      </p>
                    </div>
                    <p className="text-sm text-indigo-600 font-semibold px-3">
                    {step2.yearly ? '+20/yr' : '+$2/mo' }
                    </p>
                  </div>
                </label>
                <label
                  className={`w-full h-20 ${
                    values.addOns.includes('Customizable Profit-2') ? "border-2" : "border"
                  } px-3 py-5 ${
                    values.addOns.includes('Customizable Profit-2') ? "border-indigo-800" : "border-gray-400"
                  }  rounded-md`}
                >
                  <div className="flex flex-row justify-between items-center gap-5">
                    <Field
                      type="checkbox"
                      name="addOns"
                      value="Customizable Profit-2"
                      className="w-5 h-5 mr-2 border border-gray-400 rounded px-3"
                    />
                    <div>
                      <p className="font-bold text-sm text-gray-800 px-3">
                        Customizable Profile
                      </p>
                      <p className="text-xs text-gray-500 font-semibold px-3">
                        Custom theme on your profile
                      </p>
                    </div>
                    <p className="text-sm text-indigo-600 font-semibold px-3">
                    {step2.yearly ? '+20/yr' : '+$2/mo' }
                    </p>
                  </div>
                </label>
              </div>
              <ErrorMessage name="addOns"/>
              <button
                className="bg-white text-gray-700 rounded px-4 py-2 hover:bg-gray-200 absolute bottom-3 left-7"
                onClick={() => navigate("/step2")}
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
