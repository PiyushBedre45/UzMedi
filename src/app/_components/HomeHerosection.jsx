import Image from "next/image";
import doctor from "../../../public/Images/doctor.png";
import rightsign from "../../../public/Images/vector.png";
import bgImage from "../../../public/Images/backgroundImage.png";
import mobileheroimg from "../../../public/Images/mobileheroimg.png";
import mobilehero1 from "../../../public/Images/mobilehero1.png";
import mobilehero2 from "../../../public/Images/mobilehero2.png";
import mobilehero3 from "../../../public/Images/mobilehero3.png";
import mobilehero4 from "../../../public/Images/mobilehero4.png";
const HomeHerosection = () => {
  return (
    <>
      <div className=" h-[120vh] relative md:block hidden">
        <div className="relative">
          <Image
            src={bgImage}
            alt="bgimg"
            loading="lazy"
            className="h-[85vh] w-full object-cover"
          />
          <div className="h-[85vh] w-full  absolute top-0 bg-gradient-to-r from-black to-transparent opacity-70"></div>
          <Image
            src={doctor}
            alt="load"
            className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] xl:w-[600px] lg:h-[500px] lg:w-[500px] xl:h-[600px] object-cover absolute bottom-0 xl:bottom-[-20%] right-0"
            priority
          />
        </div>
        <div className="absolute top-[120px]  w-full h-[100vh]  xl:mt-0 z-10">
          <div className="w-[80%] mx-auto h-full flex flex-col items-stretch gap-2 md:gap-7">
            <div className="w-[90%] mx-auto h-auto flex items-center justify-center flex-col text-center">
              <h1
                id="headfont"
                className="text-4xl md:text-6xl lg:text-[64px] mt-3 font-semibold  text-white w-full"
              >
                Study <span className="text-[#13e0eb]">MBBS</span> Course in{" "}
                <span className="text-[#13e0eb]">Uzbekistan</span>
              </h1>
              <button className="mt-8 md:mt-[30px] bg-[#16A8AF] w-[150px] h-[50px]  rounded-md text-white text-sm md:text-lg font-semibold">
                Apply Now
              </button>
            </div>
            <div className=" w-[90%] md:w-[70%] text-white mt-[30px]">
              <div className="text-xs md:text-sm lg:text-lg flex flex-col gap-2 md:gap-3 w-full md:w-[70%]  mt-3">
                <h1 className="flex gap-2">
                  <span className="mt-[2px] md:mt-[5px] ">
                    <Image src={rightsign} alt="rightsign" />
                  </span>
                  Affordable education with fees starting at just ₹4 Lakhs*
                </h1>
                <h1 className="flex gap-2">
                  <span className="mt-[2px] md:mt-[5px] ">
                    <Image src={rightsign} alt="rightsign" />
                  </span>
                  No Donation for Indian students
                </h1>
                <h1 className="flex gap-2">
                  <span className="mt-[2px] md:mt-[5px] ">
                    <Image src={rightsign} alt="rightsign" />
                  </span>
                  Gain practical experience in India & internationally
                </h1>
                <h1 className="flex gap-2">
                  <span className="mt-[2px] md:mt-[5px] ">
                    <Image src={rightsign} alt="rightsign" />
                  </span>
                  Degree is recognized globally
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-[#fffbef] h-[125px]">
          <div className="w-[80%] sm:w-[80%] md:w-[100%] lg:w-[80%] xl:w-[60%] xl:mx-0  flex flex-wrap items-center gap-4 sm:gap-8 justify-center h-auto py-4 ">
            <div className="text-center h-[100px] w-[150px] pr-4 border-r-2 border-black">
              <p className="text-5xl md:text-3xl font-semibold">12+</p>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="text-center h-[100px] w-[150px] pr-4 border-r-2 border-black">
              <p className="text-5xl md:text-3xl font-semibold">1000+</p>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="text-center h-[100px] w-[150px] pr-4 border-r-2 border-black">
              <p className="text-5xl md:text-3xl font-semibold">10</p>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="text-center h-[100px] w-[150px] pr-4 ">
              <p className="text-5xl md:text-3xl font-semibold">100</p>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full md:hidden h-[68vh] overflow-hidden">
        <Image
          src={mobileheroimg}
          alt="mobileheroimg"
          className="absolute top-0 left-0 w-full h-full"
        />

        <div className="absolute top-3 left-0 z-20 w-full h-full flex flex-col items-start justify-center gap-4 ">
          <h1 className="w-[90%] mx-auto text-[36px] font-bold text-white mt-10">
            Study <span className="text-[#13e0eb]">MBBS</span>Course in{" "}
            <span className="text-[#13e0eb]">Uzbekistan</span>
          </h1>
          <button className="inline-block w-[147px] h-[47px] text-xl py-1 px-3 ml-4 bg-teal-500 text-white rounded-md">
            Apply Now
          </button>
          <div className=" bg-gradient-to-r from-white to-transparent w-full space-y-2 p-2">
            <li className="flex gap-2 w-[90%] mx-auto items-start ">
              <Image
                src={mobilehero1}
                alt="mobilehero1"
                className="object-contain mt-[5px]"
              />
              Affordable education with fees starting at just ₹4 Lakhs*
            </li>
            <li className="flex gap-2 w-[90%] mx-auto">
              <Image
                src={mobilehero2}
                alt="mobilehero2"
                className="object-contain mt-[5px]"
              />
              No Donation & Capitation fees
            </li>
            <li className="flex gap-2 w-[90%] mx-auto items-start ">
              <Image
                src={mobilehero3}
                alt="mobilehero3"
                className="object-contain mt-[5px]"
              />
              Gain practical experience in India & internationally
            </li>
            <li className="flex gap-2 w-[90%] mx-auto items-start">
              <Image
                src={mobilehero4}
                alt="mobilehero4"
                className="object-contain mt-[5px]"
              />
              Degree is recognized globally
            </li>
          </div>
        </div>
      </div>
      <div className="bg-[#FFFBEF] h-[110px] overflow-x-scroll overflow-y-hidden scrollbar-hide md:hidden   ">
        <div className="flex gap-6 items-center justify-start w-[90%] mx-auto ">
          <div className="p-2 flex flex-col items-center justify-center">
            <p className="font-bold text-[32px]">12+</p>
            <p className="text-sm text-center leading-tight whitespace-normal">
              Years of <br /> expertise
            </p>
          </div>
          <div className="p-2 flex flex-col items-center justify-center">
            <p className="font-bold text-[32px]">1500+</p>
            <p className="text-sm text-center leading-tight w-[120px]">
              Satisfied students <br /> counselled
            </p>
          </div>
          <div className="p-2 flex flex-col items-center justify-center">
            <p className="font-bold text-[32px]">10+</p>
            <p className="text-sm text-center leading-tight w-[120px]">
              Universities <br /> affiliated with us!
            </p>
          </div>

          <div className="p-2 flex flex-col items-center justify-center">
            <p className="font-bold text-[32px] text-center">100+</p>
            <p className="text-sm text-center leading-tight whitespace-normal">
              Vice Assistance
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeHerosection;
