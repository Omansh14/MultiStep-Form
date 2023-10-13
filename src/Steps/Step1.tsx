import React from "react";
import { useNavigate } from "react-router-dom";
import SideBar from "../components/SideBar";
import { toFormikValidationSchema } from "zod-formik-adapter";
import useFormStore from "../store/formstore";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { z } from "zod";

const step1Schema = z.object({
  name: z.string().min(2, "Too short!").max(50, "Too long!"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Invalid Phone Number"),
});

const Step1: React.FC = () => {
  const navigate = useNavigate();
  const { step1, setForm1 } = useFormStore();

  return (
    <Formik
      initialValues={step1}
      validationSchema={toFormikValidationSchema(step1Schema)}
      onSubmit={(values) => {
        // console.log(values);
        setForm1(values);
        navigate("/step2");
      }}
    >
      <div className="grid grid-rows-[1fr, 2fr] sm:grid-cols-[1fr,2fr] gap-10 bg-white sm:p-5 rounded-lg shadow-md shadow-gray-500">
        <SideBar step={1}/>
        <div className="p-6 relative bg-white rounded-sm -translate-y-16 md:translate-y-0">
          <h1 className="text-3xl text-gray-700 font-bold color-gray-600 leading-10 my-1">
            Personal info
          </h1>
          <p className="text-base text-gray-400 leading-6">
            Please provide your name, email address and phone number.
          </p>
          <div className="py-5 my-6">
            <Form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Name
                </label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  placeholder="e.g. Stephen King"
                  className={`border border-gray-300
                    rounded px-3 py-2 w-full focus:outline-none focus:border-blue-800`}
                  required
                />
                <ErrorMessage name="name">
                  {(errorMsg) => (
                    <p className="text-red-500 text-xs">{errorMsg}</p>
                  )}
                </ErrorMessage>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Email
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder="e.g. stephenking@lorem.com"
                  className={`border border-gray-300
                    rounded px-3 py-2 w-full focus:outline-none focus:border-blue-800`}
                  required
                />
                <ErrorMessage name="email">
                  {(errorMsg) => (
                    <p className="text-red-500 text-xs">{errorMsg}</p>
                  )}
                </ErrorMessage>
              </div>
              <div className="mb-14">
                <label
                  htmlFor="phone"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Phone Number
                </label>
                <Field
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="e.g.+1 234 567 890"
                  className={`border border-gray-300
                    rounded px-3 py-2 w-full focus:outline-none focus:border-blue-800`}
                  required
                />
                <ErrorMessage name="phone">
                  {(errorMsg) => (
                    <p className="text-red-500 text-xs">{errorMsg}</p>
                  )}
                </ErrorMessage>
              </div>
              <div className="mb-4">
                <button
                  type="submit"
                  className="bg-blue-800 text-white rounded px-4 py-2 hover:bg-blue-600 absolute bottom-3 right-7"
                >
                  Next Step
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </Formik>
  );
};

export default Step1;
