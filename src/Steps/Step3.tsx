import React from "react";
import SideBar from "../components/SideBar";
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
      <div className="grid grid-rows-[1fr, 2fr] sm:grid-cols-[1fr,2fr] gap-10 bg-white sm:p-5 rounded-lg shadow-md shadow-gray-500">
        <SideBar step={3} />
        <div className="px-8 sm:px-16 py-8 relative bg-white rounded-sm">
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
                    <div className="flex flex-col h-auto">
                      <p className="font-bold text-sm text-gray-800">
                        Customizable Profile
                      </p>
                      <p className="flex text-xs text-gray-500 font-semibold">
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
