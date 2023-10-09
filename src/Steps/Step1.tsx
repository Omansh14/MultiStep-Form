import React from "react";
import { useNavigate } from "react-router-dom";
import sideBarWeb from "../assets/images/bg-sidebar-desktop.svg";
import sideBarMobile from "../assets/images/bg-sidebar-mobile.svg";
import { useFormik } from "formik";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2, "Too short!").max(50, "Too long!"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Invalid Phone Number"),
});

const Step1: React.FC = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },
    validationSchema: formSchema,
    onSubmit: (values) => {
      // Handle form submission here
      console.log(values);
      navigate("/step2");
    },
  });

  return (
    <>
      <div className="grid grid-rows-[1fr, 2fr] md:grid-cols-[1fr,2fr] gap-10 bg-white md:p-5 rounded-lg shadow-md shadow-gray-500">
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
            <div className="w-7 h-7 rounded-full border flex justify-center bg-blue-200 text-black">
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
            Personal info
          </h1>
          <p className="text-base text-gray-400 leading-6">
            Please provide your name, email address and phone number.
          </p>
          <div className="py-5 my-6">
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formik.values.name}
                  onChange={(e) => formik.handleChange(e)}
                  // onBlur={formik.handleBlur}
                  placeholder="e.g. Stephen King"
                  className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-800"
                  // required
                />
                {formik.touched.name && formik.errors.name ? (
                  <div>{formik.errors.name}</div>
                ) : null}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formik.values.email}
                  onChange={(e) => console.log(e.target.value)}
                  // onBlur={formik.handleBlur}
                  placeholder="e.g. stephenking@lorem.com"
                  className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-800"
                  // required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formik.values.phone}
                  onChange={(e) => console.log(e.target.value)}
                  // onBlur={formik.handleBlur}
                  placeholder="e.g.+1 234 567 890"
                  className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-800"
                  // required
                />
              </div>
              <div className="mb-4">
                <button
                  type="submit"
                  className="bg-blue-800 text-white rounded px-4 py-2 hover:bg-blue-600 absolute bottom-3 right-7"
                >
                  Next Step
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Step1;
