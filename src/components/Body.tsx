import main from "../assets/maage.svg";
import report from "../assets/reporting.svg";
import props from "../assets/property.svg";
import marker from "../assets/marker.svg";
import house from "../assets/house.svg";
import yellow from "../assets/yellow.svg";
import back from "../assets/back.svg";
import front from "../assets/front.svg";
import first from "../assets/first.svg";
import bath from "../assets/bathroom.svg";
import bathh from "../assets/bath.svg";
import love from "../assets/love.svg";
import second from "../assets/second.svg";
import third from "../assets/third.svg";
import samuel from "../assets/samuel.svg";
import blessing from "../assets/Blessing.svg";
import orji from "../assets/Orji.svg";
import backg from "../assets/bakcg.svg";

const properties = [
  {
    id: 1,
    image: first,
    price: "₦200M",
    title: "Ocean View Estate",
    location: "Lagos Island, Nigeria",
    bedrooms: 4,
    bathrooms: 2,
    sqft: "1,620",
  },
  {
    id: 2,
    image: second,
    price: "₦100M",
    title: "Ajao Estate",
    location: "Lagos Ikeja, Nigeria",
    bedrooms: 4,
    bathrooms: 2,
    sqft: "1,620",
  },
  {
    id: 3,
    image: third,
    price: "₦250M",
    title: "Oceanic Estate",
    location: "Wuse Abuja, Nigeria",
    bedrooms: 6,
    bathrooms: 7,
    sqft: "2000",
  },
];

type Testimonial = {
  id: number;
  review: string;
  rating: number;
  name: string;
  role: string;
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    review:
      "Since partnering with them, my rental income has been consistent and stress free. They handle everything from tenant screening to maintenance without me lifting a finger.",
    rating: 5,
    name: "Samuel Odafe",
    role: "CEO, Klempton.org",
    avatar: samuel,
  },
  {
    id: 2,
    review:
      "Since partnering with them, my rental income has been consistent and stress free. They handle everything from tenant screening to maintenance without me lifting a finger.",
    rating: 5,
    name: "Blessing Amen",
    role: "CEO, Klempton.org",
    avatar: blessing,
  },
  {
    id: 3,
    review:
      "Since partnering with them, my rental income has been consistent and stress free. They handle everything from tenant screening to maintenance without me lifting a finger.",
    rating: 5,
    name: "Blessing Orji",
    role: "CEO, Mikano.org",
    avatar: orji,
  },
];

type Property = {
  id: number;
  image: string;
  price: string;
  title: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  sqft: string;
};

const PropertyCard = ({ property }: { property: Property }) => {
  return (
    <div className="relative w-100 h-130 overflow-hidden rounded-3xl rounded-b-[30px] shrink-0">
      {/* Image fills the whole card */}
      <img src={property.image} alt="" className="w-full h-full object-cover" />

      {/* Gradient fade over image */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />

      {/* Heart icon top right */}
      <div className="absolute top-4 right-4 bg-white/30 backdrop-blur-sm rounded-full p-2">
        <img src={love} alt="" className="w-5 h-5" />
      </div>

      {/* Bottom overlay — blur starts at 166px height */}
      <div className="absolute bottom-0 left-0 right-0 h-[166px] rounded-[30px] bg-gradient-to-b from-[#D9D9D900] via-[#201F1F40] to-[#201F1F70] backdrop-blur-[10px] px-4 pt-3 pb-2">
        <div className="flex justify-between items-center mb-2">
          <p className="font-semibold text-[22px] text-white">
            {property.price}
          </p>
          <button className="bg-[#C9A227] text-white text-sm px-4 py-2 rounded-full whitespace-nowrap">
            View Details
          </button>
        </div>

        {/* Title & Location */}
        <p className="text-[24px] font-semibold text-white">{property.title}</p>
        <p className="text-[14px] font-normal text-white/80 mb-3">
          {property.location}
        </p>

        {/* Stats */}
        <div className="flex gap-4 text-white text-sm">
          <p>{property.bedrooms}-Bedrooms</p>
          <div className="flex items-center gap-1">
            <img src={bath} alt="" className="w-4 h-4" />
            <p>{property.bathrooms}-Bathrooms</p>
          </div>
          <div className="flex items-center gap-1">
            <img src={bathh} alt="" className="w-4 h-4" />
            <p>{property.sqft} sq ft</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="flex flex-col justify-between py-5 px-5.25 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] bg-[#F8F9FA] rounded-[30px] w-96.5 h-93.25">
      <p className="text-[20px] text-[#6B6A6A] text-center font-medium">
        {testimonial.review}
      </p>
      <div className="flex flex-col items-center mt-1 gap-2">
        <div className="flex gap-1">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <span key={i} className="text-[#C9A227] text-lg">
              ★
            </span>
          ))}
        </div>
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover "
        />
        <p className="font-medium text-[20px] text-black">{testimonial.name}</p>
        <p className="text-[16px] font-medium text-[#6B6A6A] -mt-0.5">
          {testimonial.role}
        </p>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <>
      <div className="w-full h-155.5 bg-[#F2F7FF] py-10 gap-12.5 mt-16">
        <div className="flex flex-col items-center justify-center gap-4">
          <h4 className="font-semibold text-[48px] text-black leading-[100%] text-center max-w-208.75">
            Our Property Management Service
          </h4>
          <p className="font-medium text-[20px] text-[#716F6F] text-center px-87.5">
            Comprehensive solutions designed to protect your investment and
            maximum returns
          </p>
        </div>

        <div className="flex gap-9.25 mt-12 ml-14">
          <div className="w-97.25 h-88 rounded-[30px] p-10 gap-7.75 bg-[#FFFFFF] flex flex-col items-center justify-center text-center">
            <img src={main} alt="" className="w-25 h-25 -mt-4" />
            <div className="flex flex-col">
              <h5 className="font-semibold text-[24px] text-black">
                Maintenance Management
              </h5>
              <p className="font-medium text-[#716F6F] text-[16px] mt-7">
                Fast response times and trusted local contractors to ensure we
                reply on time and give you the best service
              </p>
            </div>
          </div>

          <div className="w-97.25 h-88 rounded-[30px] p-10 gap-7.75 bg-[#C9A227] flex flex-col items-center justify-center text-center">
            <img src={report} alt="" className="w-25 h-25 -mt-4" />
            <div className="flex flex-col">
              <h5 className="font-semibold text-[24px] text-black">
                Financial Reporting
              </h5>
              <p className="font-medium text-[#716F6F] text-[16px] mt-7">
                Transparent monthly and annual performance report to ensure
                clarity of how your finance is managed
              </p>
            </div>
          </div>

          <div className="w-97.25 h-88 rounded-[30px] p-10 gap-7.75 bg-[#FFFFFF] flex flex-col items-center justify-center text-center">
            <img src={props} alt="" className="w-25 h-25 -mt-4" />
            <div className="flex flex-col">
              <h5 className="font-semibold text-[24px] text-black">
                Property Maintenance
              </h5>
              <p className="font-medium text-[#716F6F] text-[16px] mt-7">
                24/7 maintenance coordination and inspections on your property
                to ensure everything is well intact
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center text-center mt-10">
        <h5 className="font-semibold text-[48px] text-black">Why choose Us</h5>
        <p className="font-medium text-[24px] text-[#716F6F]">
          What makes us different from other management and why we are <br />{" "}
          the best
        </p>
      </div>

      <div className="flex mt-12">
        <div className="relative w-162.5 h-120.75">
          <img
            src={marker}
            alt=""
            className="absolute top-0 left-0 w-125 h-125 object-cover"
          />
          <img
            src={house}
            alt=""
            className="absolute mt-14 left-32.5 w-129.25 h-120.75 object-cover rounded-[20px]"
          />
        </div>

        <div className="flex flex-col gap-10.5 ml-26 mt-8">
          <div className="flex items-center text-center w-131.5 h-21.75 gap-11.75 border-b-[#F8F9FA] bg-[#F8F9FA] py-5 px-6.25">
            <img src={yellow} alt="" className="w-[42.17px] h-[40.12px]" />
            <p className="text-[36px] font-medium text-black">
              10+ Years Experience
            </p>
          </div>
          <div className="flex items-center text-center w-131.5 h-21.75 gap-11.75 border-b-[#F8F9FA] bg-[#F8F9FA] py-5 px-6.25">
            <img src={yellow} alt="" className="w-[42.17px] h-[40.12px]" />
            <p className="text-[36px] font-medium text-black">
              98% Occupancy Rate
            </p>
          </div>
          <div className="flex items-center text-center w-131.5 h-21.75 gap-11.75 border-b-[#F8F9FA] bg-[#F8F9FA] py-5 px-6.25">
            <img src={yellow} alt="" className="w-[42.17px] h-[40.12px]" />
            <p className="text-[36px] font-medium text-black">
              500 + Units Managed
            </p>
          </div>
          <div className="flex items-center text-center w-131.5 h-21.75 gap-11.75 border-b-[#F8F9FA] bg-[#F8F9FA] py-5 px-6.25">
            <img src={yellow} alt="" className="w-[42.17px] h-[40.12px]" />
            <p className="text-[36px] font-medium text-black">
              Transparent Reporting
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center text-center mt-24">
        <h4 className="font-semibold text-[48px] text-black leading-[100%]">
          Popular in Your Area
        </h4>
        <p className="font-medium text-[24px] text-[#716F6F] mt-4">
          The most viewed and favorite home in the past few days
        </p>
      </div>

      <div className="relative mt-8">
        <div className="absolute -top-26 right-14 flex gap-4 z-10">
          <img src={back} alt="" className="cursor-pointer" />
          <img src={front} alt="" className="cursor-pointer" />
        </div>

        <div className="flex justify-center gap-6 mt-40">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>

      <div className="bg-[#F2F7FF] w-full h-156.25 py-12.75 px-11 mt-14">
        <div className="flex flex-col gap-1.75 items-center text-center">
          <h6 className="font-semibold text-[48px] text-black leading-[100%]">
            What Our Client Say
          </h6>
          <p className="font-medium text-[24px] text-[#716F6F]">
            What our reliable customers have to say about us
          </p>
        </div>

        <div className="flex gap-6 mt-10 w-full mx-auto justify-center items-center">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>

      <div className="relative">
        <img src={backg} alt="" className="w-310 flex mx-auto" />

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h5 className="text-[40px] text-white font-semibold">
            Ready to Simplify Your Property Management?
          </h5>
          <p className="font-medium text-[20px] text-white flex items-center text-center">
            Join thousands of satisfied clients who have found their perfect
            home with our <br /> expert guidance and personal services
          </p>

          <div className="flex gap-22 mt-16 ">
            <button className="w-56 h-14 rounded-[15px] py-3.75 px-7  bg-white text-black border border-white font-semibold text-[20px] whitespace-nowrap flex items-center text-center">
              Start Your Search
            </button>
            <button
              className="w-63.25 h-14 rounded-[15px] border border-white text-white py-3.75 px-7
 font-semibold text-[20px] whitespace-nowrap flex items-center text-center"
            >
              Speak with an Agent
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
