import Image from "next/image";
// import { TypeAnimation } from "react-type-animation";
const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-gray-900">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero.jpg" 
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="opacity-20"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between  ">
        {/* Left Side Text */}
        <div className=" text-white flex flex-col gap-5 text-center">
          <div className="hiddendiv2">

          <h1 className="text-5xl md:text-5xl font-bold text-[#E2E2B6]  main-page-text">Jain Logisitcs</h1>
          </div>
          <div className="hiddendiv">

          <h1 className="text-4xl  typing md:text-5xl font-bold mb-6">
            India's Leading  Logistics Partner
          </h1>
          </div>
         
          
        </div>

        {/* Right Side Overlapping Image */}
        {/* <div className="md:w-1/2 relative">
          <Image
            src="/truck.png"  
            alt="Overlapping Visual"
            width={650}
            height={500}
            className="relative md:ml-10 md:mt-70 drop-shadow-lg"
          />
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
