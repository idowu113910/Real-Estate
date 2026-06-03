import reall from "../assets/real.svg";
import build from "../assets/hero image.svg";
import drop from "../assets/dropdown.svg";
import sear from "../assets/search.svg";
import clien from "../assets/client 1.svg";
import client from "../assets/client 2.svg";
import clientt from "../assets/client 3.svg";
import clientttt from "../assets/client 4.svg";
import cover from "../assets/bg.svg";
import Body from "./Body";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <div className="flex px-25 py-4.75">
        <img src={reall} alt="" className="w-34.5 h-34.5" />
        <nav className="flex mx-auto gap-9.75 w-167.5 mt-13">
          <p className="font-medium text-[20px] text-[#000000]">Home</p>
          <p className="font-medium text-[20px] text-[#000000]">Services</p>
          <p className="font-medium text-[20px] text-[#000000]">Properties</p>
          <p className="font-medium text-[20px] text-[#000000]">Tenants</p>
          <p className="font-medium text-[20px] text-[#000000]">About</p>
          <p className="font-medium text-[20px] text-[#000000]">Contact Us</p>
        </nav>

        <button className="w-37.25 h-12.75 bg-[#1E293B] rounded-[30px] py-3.75 px-7 mt-10 text-white font-semibold text-[16px]">
          Get a Quote
        </button>
      </div>

      <div className="relative">
        <img src={build} alt="" className="w-full h-full object-cover" />

        <div className="absolute inset-0 flex flex-col text-white px-25 mt-40">
          <h1 className="font-semibold text-[64px] leading-100% w-157.5">
            Smart Property Management Made Simple
          </h1>
          <p className="font-medium text-[24px] w-231.25">
            Seamless leasing, reliable mainteinance and transperanting reporting
            all in one place
          </p>

          <div className="w-lg h-33.5 bg-white/20 backdrop-blur-[20px] rounded-[20px] py-5 px-6.25 mt-29">
            <h4 className="font-semibold text-[20px] text-white">
              Search for the prices you’re looking for{" "}
            </h4>
            <div className="flex mt-5 gap-2">
              <div className="flex items-center text-center w-26.5 h-12.5 p-3.75 gap-[5px] bg-white/10 border border-white rounded-[10px] backdrop-blur-sm">
                <p className="font-medium text-white text-[20px]">Buy</p>
                <img src={drop} alt="" className="w-3.5 h-7" />
              </div>

              <div className="flex items-center text-center w-26.5 h-12.5 p-3.75 gap-1.25 bg-white/10 border border-white rounded-[10px] backdrop-blur-sm">
                <p className="font-medium text-white text-[20px]">Rent</p>
                <img src={drop} alt="" className="w-3.5 h-7" />
              </div>

              <div className="flex items-center text-center w-26.5 h-12.5 p-3.75 gap-1.25 bg-white/10 border border-white rounded-[10px] backdrop-blur-sm">
                <p className="font-medium text-white text-[20px]">Sell</p>
                <img src={drop} alt="" className="w-3.5 h-7" />
              </div>

              <div className="flex items-center text-center w-32.5 h-13.5 bg-white rounded-[10px] gap-2.5 p-3.75">
                <p className="text-black font-medium text-[20px]">Search</p>
                <img src={sear} alt="" className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute -mt-43 -right-0 rounded-tl-[20px] overflow-hidden">
          <img src={cover} alt="" className="w-112.5 h-[175px] object-cover" />

          <div className="absolute inset-0 flex flex-col justify-center gap-3.75">
            <p className="font-semibold text-black text-[24px] ml-40">
              50k + Happy Clients
            </p>

            <div className="flex items-center ml-21 ">
              <img
                src={clien}
                alt=""
                className="w-22.5 h-22.5 rounded-full object-cover border-2 border-white z-10"
              />
              <img
                src={client}
                alt=""
                className="w-22.5 h-22.5 rounded-full object-cover border-2 border-white -ml-6 z-20"
              />
              <img
                src={clientt}
                alt=""
                className="w-22.5 h-22.5 rounded-full object-cover border-2 border-white -ml-6 z-30"
              />
              <img
                src={clientttt}
                alt=""
                className="w-22.5 h-22.5 rounded-full object-cover border-2 border-white -ml-6 z-40"
              />
            </div>
          </div>
        </div>
      </div>

      <Body />
      <Footer />
    </>
  );
};

export default Home;
