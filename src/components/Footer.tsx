import estate from "../assets/real.svg";

const Footer = () => {
  return (
    <>
      <div className="w-full h-full bg-[#C9A227] py-10 px-12 mt-14">
        <div className="flex">
          <div className="ml-4">
            <img src={estate} alt="" className="" />
            <p className="font-medium text-[20px] text-white w-132.75 -mt-5">
              Professional property management solutions designed to protect and
              grow your real estate investments
            </p>
          </div>

          <div className="flex">
            <div className="ml-30 flex flex-col gap-2 items-center text-center">
              <h2 className="font-semibold text-[20px] text-white">
                Quick Links
              </h2>
              <p className="font-medium text-[18px] text-white mt-1.5">Home</p>
              <p className="font-medium text-[18px] text-white">Service</p>
              <p className="font-medium text-[18px] text-white">Property</p>
              <p className="font-medium text-[18px] text-white">About</p>
              <p className="font-medium text-[18px] text-white">Contact </p>
            </div>

            <div className="ml-12 flex flex-col gap-2 items-center text-center">
              <h2 className="font-semibold text-[20px] text-white">Services</h2>
              <p className="font-medium text-[18px] text-white mt-1.5">
                Tenant Screening
              </p>
              <p className="font-medium text-[18px] text-white">
                Rent Collection
              </p>
              <p className="font-medium text-[18px] text-white">
                Property Maintenance
              </p>
              <p className="font-medium text-[18px] text-white">
                Financial Reporting
              </p>
              <p className="font-medium text-[18px] text-white">
                Leasing Management
              </p>
            </div>

            <div className="ml-12 flex flex-col gap-2 items-center text-center">
              <h2 className="font-semibold text-[20px] text-white">Services</h2>
              <p className="font-medium text-[18px] text-white mt-1.5">
                Customer Support
              </p>
              <p className="font-medium text-[18px] text-white">
                Privacy & Policy
              </p>
              <p className="font-medium text-[18px] text-white">
                Terms & Conditions
              </p>
              <p className="font-medium text-[18px] text-white">Faq</p>
            </div>
          </div>
        </div>

        <hr className="border-t border border-[#D8D8D8]  my-4 mt-4" />

        <div className="flex justify-between -mt-2">
          <p className="font-normal text-[14px] text-white">
            © 2026 RealEstate All Rights Reserved
          </p>

          <p className="font-normal text-[14px] text-white">
            Terms of service / Privacy Policy
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
