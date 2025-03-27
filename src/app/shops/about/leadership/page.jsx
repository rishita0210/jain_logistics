import WhyChooseUs from "@/app/components/whychooseus";

export default function LeadershipPage() {
    const leaders = [
      {
        id: 1,
        name: "Ashok Jain",
        role: " Managing Director ",
        image: "/ashok_jain.png", 
        description:
          " With a BA, Mr. Jain has been the driving force behind the organisation’s success for two decades. His expertise spans the transport sector, logistics, supply chain management, and customer service.",
      },
      {
        id: 2,
        name: " Yash Jain",
        role: "Director",
        image: "/yash_jain.png", 
        description:
          "Holding a BSc and MSc from Christ University, Bengaluru, he brings a deep understanding of the industry and customer needs. He plays a crucial role in the company's expansion plans through digitization and operational excellence. ",
      },
    ];
  
    return (
      <div className="bg-[#FBF8EE] min-h-screen py-16 px-6 md:px-24">
      
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 text-center mb-10 p-15">
          Meet Our Leaders
        </h2>
  
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 mb-20">
          {leaders.map((leader) => (
            <div
              key={leader.id}
              className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/2 flex flex-col items-center text-center"
            >
              <img
                src={leader.image}
                alt={leader.name}
                className="w-40 h-50 md:w-56 md:h-56 rounded-full object-cover border-4 border-gray-300"
              />
              <h3 className="text-2xl md:text-3xl font-semibold mt-4 text-gray-800">
                {leader.name}
              </h3>
              <p className="text-lg md:text-xl text-gray-600">{leader.role}</p>
              <p className="text-md md:text-lg text-gray-500 mt-2 px-4">
                {leader.description}
              </p>
            </div>
          ))}
        </div>

        <WhyChooseUs/>
      </div>
    );
  }
  