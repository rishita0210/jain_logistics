import Image from "next/image";

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
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6">
        {/* Left Side Text */}
        <div className="md:w-1/2 text-white">
          <h1 className="text-4xl md:text-6xl font-bold text-[#E2E2B6] mt-10 mb-4">Jain Logisitcs</h1>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            India's Leading <br/> Logistics Partner
          </h1>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>

        {/* Right Side Overlapping Image */}
        <div className="md:w-1/2 relative">
          <Image
            src="/truck.png"  
            alt="Overlapping Visual"
            width={650}
            height={500}
            className="relative md:ml-10 md:mt-70 drop-shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
