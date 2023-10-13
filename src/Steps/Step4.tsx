import React, { useState } from "react";
import SideBar from "../components/SideBar";
import thankyouIcon from "../assets/images/icon-thank-you.svg";
import { useNavigate } from "react-router-dom";
import useFormStore from "../store/formstore";

const Step2: React.FC = () => {
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);
  const { step2, step3, setForm2 } = useFormStore();
  const totalAddOns = step3.addOns.reduce((acc, val) => {
    return acc + parseInt(val.split("-")[1]);
  }, 0);
  const totalAmount = parseInt(step2.plan.split("-")[1]) + totalAddOns;

  return (
    <>
      <div className="grid grid-rows-[1fr, 2fr] sm:grid-cols-[1fr,2fr] gap-10 bg-white sm:p-5 rounded-lg shadow-md shadow-gray-500">
        <SideBar step={4} />
        <div className={`p-6  w-full relative bg-white rounded-sm`}>
          {!success ? (
            <>
              <h1 className="text-3xl text-gray-700 font-bold color-gray-600 leading-10 my-1">
                Finishing Up
              </h1>
              <p className="text-base text-gray-400 leading-6">
                Double-check everything looks OK before confirming.
              </p>
              <div className="py-5 my-6">
                <div className="h-52 w-80 sm:w-96 bg-gray-100 p-4 rounded-md">
                  <div className="flex flex-row justify-between items-center">
                    <div>
                      <p className="text-indigo-800 font-bold">
                        {step2.plan.split("-")[0]}
                        {step2.yearly ? "(Yearly)" : "(Monthly)"}
                      </p>
                      <p
                        className="text-gray-500 font-semibold underline hover:cursor-pointer hover:text-black"
                        onClick={() =>
                          setForm2({ ...step2, yearly: !step2.yearly })
                        }
                      >
                        Change
                      </p>
                    </div>
                    <h3 className="font-bold text-gray-800">
                      {step2.yearly
                        ? `$${parseInt(step2.plan.split("-")[1]) * 10}/yr`
                        : `$${step2.plan.split("-")[1]}/mo`}
                    </h3>
                  </div>
                  <div className="border-t border-gray-400 my-2" />
                  {step3.addOns.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex flex-row justify-between items-center py-2"
                    >
                      <h3 className="font-semibold text-gray-500 text-sm">
                        {item.split("-")[0]}
                      </h3>
                      <h3 className="font-semibold text-gray-500 text-sm">
                        {step2.yearly
                          ? `$${parseInt(item.split("-")[1]) * 10}`
                          : `$${parseInt(item.split("-")[1])}`}
                        /{step2.yearly ? "yr" : "mo"}
                      </h3>
                    </div>
                  ))}
                </div>
                <div className="p-2 mb-20 flex flex-row justify-between">
                  <p className="text-gray-800 font-bold">
                    Total(per {step2.yearly ? "year" : "month"})
                  </p>
                  <p className="text-indigo-800 font-bold">
                    {step2.yearly ? `$${totalAmount * 10}` : `$${totalAmount}`}/
                    {step2.yearly ? "yr" : "mo"}
                  </p>
                </div>
                <div className="mb-4">
                  <button
                    className="bg-white text-gray-700 rounded px-4 py-2 hover:bg-gray-200 absolute bottom-3 left-7"
                    onClick={() => navigate("/step3")}
                  >
                    Go back
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-800 text-white rounded px-4 py-2 hover:bg-blue-600 absolute bottom-3 right-7"
                    onClick={() => setSuccess(true)}
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex flex-col justify-center items-center gap-3 px-4 py-32">
              <div className="flex flex-row justify-center">
                <img src={thankyouIcon} alt="Thankyou_Icon" />
              </div>
              <div className="flex flex-row justify-center">
                <h2 className="font-bold text-3xl text-gray-700">Thank you!</h2>
              </div>
              <div className="w-96 flex flex-row justify-center">
                <p className="text-center text-sm text-gray-500 font-semibold">
                  Thanks for confirming your subscription! We hope you have fun
                  using our platform. If you need support, please feel free to
                  email us at support@loremgaming.com.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Step2;
