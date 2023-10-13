import sideBarWeb from "../assets/images/bg-sidebar-desktop.svg";
import sideBarMobile from "../assets/images/bg-sidebar-mobile.svg";

type Number = {
  step: number;
};

const SideBar = ({ step }: Number) => {
  const steps: string[] = ["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY"];

  return (
    <div className="relative">
      <img
        src={sideBarWeb}
        alt="Background Desktop"
        className="absolute w-full h-full rounded-lg object-cover max-sm:hidden"
      />
      <img
        src={sideBarMobile}
        alt="Background Mobile"
        className="hidden max-sm:block w-screen object-cover h-[16rem] absolute "
      />
      <div className="z-50 relative p-8 pt-12 flex flex-col gap-8 justify-center max-sm:flex-row">
        {steps.map((item, index) => (
          <div key={item} className="flex items-center gap-6">
            <div
              className={`${
                step === index + 1 ? "bg-blue-200 text-black" : "text-white"
              } flex justify-center items-center w-7 h-7 border-Light_blue border-[1px] duration-400 ease-in-out rounded-full font-semibold`}
            >
              {index + 1}
            </div>
            <div className="max-sm:hidden">
              <p className="text-gray-300 text-xs">
                STEP {index + 1}
              </p>
              <p className="text-white text-sm font-bold">{item}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
