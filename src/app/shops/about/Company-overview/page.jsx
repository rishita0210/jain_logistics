// import Navbar from "@/app/components/navbar";
// import WhyChooseUs from "@/app/components/whychooseus";
// import Partners from "@/app/components/partners";
// import Image from "next/image";
// import ContactUs from "@/app/components/contactus";
// import Fotter from '@/app/components/fotter';

// const CompanyOverview = () => {
//   return (
//     <div className="relative w-full min-h-screen flex flex-col bg-[#FBF8EE]">
//       {/* Navbar */}
//       <Navbar />

//       {/* Background Image Section */}
//       <div className="relative w-full h-[400px]">
//         <img 
//           src="/service.png" 
//           alt="Company Overview" 
//           className="w-full h-full object-cover blur-sm opacity-90"
//         />
        
//         {/* Text Content Overlay */}
//         <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
//           <h1 className="text-5xl font-bold">Company Overview</h1>
          
//         </div>
//       </div>

//       <div className="flex flex-row mt-15">
//          <div className="relative w-full md:w-1/2 flex justify-center ">
//                   <div className="border-8 border-gray-100 rounded-lg p-2 shadow-lg overflow-hidden">
//                     <Image
                  
//                       src="/details.png" 
//                       alt="Feature"
//                       width={500}
//                       height={400}
//                       className="rounded-lg"
//                     />
//                   </div>
//          </div>

//          <div>
//           <h3 className="text-2xl text-[#03346E] p-10">Welcome to Jain Logistics</h3>
//           <h2 className="max-w-xl font-bold text-black text-2xl p-4">Where Logistics is not just a service. It's a promise of Precision, Trust and Success.</h2>
//           <p className="max-w-xl p-4 text-gray-500">At RS Logistics, we take immense pride in being your trusted global logistics solution provider since 2008. Our journey is  marked by a relentless pursuit of excellence and a dedication to streamlining your freight and logistics requirements through a personal, client-centric approach.</p>

//           <div className="mt-10">
//           <h1 className="font-bold text-black text-xl">VISION</h1>
//           <p className="max-w-xl p-4 text-gray-500">Our vision is to be a renowned leader in India's logistics, excelling in long and short-distance trucking, transportation, and customized solutions with integrated warehousing. Striving to be a listed company by 2027 reflects our commitment to excellence and innovation.</p>
//          </div>
//          <div className="mt-5">
//           <h1 className="font-bold text-black text-xl">MISSION</h1>
//           <p className="max-w-xl p-4 text-gray-500">Our vision is to be a renowned leader in India's logistics, excelling in long and short-distance trucking, transportation, and customized solutions with integrated warehousing. Striving to be a listed company by 2027 reflects our commitment to excellence and innovation.</p>
//          </div>
//          </div>

         
//       </div>
//       <div>
//         <WhyChooseUs/>
//       </div>
//       <div>
//         <Partners/>
//       </div>
//       <div>
//         <ContactUs/>
//         </div>
//         <div>
//           <Fotter/>
//         </div>
//     </div>
//   );
// };

// export default CompanyOverview;
import Navbar from "@/app/components/navbar";
import WhyChooseUs from "@/app/components/whychooseus";
import Partners from "@/app/components/partners";
import Image from "next/image";
// import ContactUs from "@/app/components/contactus";
// import Fotter from "@/app/components/Footer";

const CompanyOverview = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col bg-[#FAF3E0] text-gray-800">
      

      {/* Hero Section */}
      <div className="relative w-full h-[50px] md:h-[500px] flex flex-col items-center justify-center">
  <img 
    src="/service.png" 
    alt="Company Overview" 
    className="w-full h-full object-cover blur-sm "
  />

  <div className="absolute text-center">
    <h2 className="text-2xl md:text-4xl font-bold text-[#FBF8EE] drop-shadow-lg">
     Company Overview
    </h2>
    <h2 className="text-md md:text-xl text-gray-400 drop-shadow-lg mt-4">
      Navigating Growth and Success in Six Distinct Phases
    </h2>
  </div>
</div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start mt-12 px-6 md:px-16">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="border-8 border-gray-200 rounded-xl p-2 shadow-xl overflow-hidden">
            <Image
              src="/details.png"
              alt="Feature"
              width={500}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0 md:pl-10">
          <h3 className="text-3xl font-semibold text-[#03346E]">Welcome to Jain Logistics</h3>
          <h2 className="text-2xl md:text-3xl font-bold text-black mt-4">
            Where Logistics is not just a service. It’s a promise of Precision, Trust, and Success.
          </h2>
          <p className="text-lg text-gray-600 mt-4 leading-relaxed">
            At RS Logistics, we take immense pride in being your trusted global logistics solution provider since 2008. 
            Our journey is marked by a relentless pursuit of excellence and a dedication to streamlining your freight 
            and logistics requirements through a personal, client-centric approach.
          </p>
          
          {/* Vision and Mission */}
          <div className="mt-8">
            <h1 className="text-xl md:text-2xl font-bold text-black">VISION</h1>
            <p className="text-lg text-gray-600 mt-2 leading-relaxed">
              Our vision is to be a renowned leader in India's logistics, excelling in long and short-distance trucking, 
              transportation, and customized solutions with integrated warehousing. Striving to be a listed company by 
              2027 reflects our commitment to excellence and innovation.
            </p>
          </div>
          <div className="mt-6">
            <h1 className="text-xl md:text-2xl font-bold text-black">MISSION</h1>
            <p className="text-lg text-gray-600 mt-2 leading-relaxed">
              Our mission is to offer seamless, reliable, and cost-effective logistics solutions tailored to our 
              clients' unique needs, fostering long-term relationships built on trust and efficiency.
            </p>
          </div>
        </div>
      </div>
      
      {/* Additional Sections */}
      <div className="mt-16 px-6 md:px-16">
        <WhyChooseUs />
      </div>
      <div className="mt-12 px-6 md:px-16">
        <Partners />
      </div>
      {/* <div className="mt-12 ">
        <ContactUs />
      </div>
      <div className="">
        <Fotter />
      </div> */}
    </div>
  );
};

export default CompanyOverview;
  