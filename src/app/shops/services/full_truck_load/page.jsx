import Link from "next/link";

const FullTruckLoad = () => {
  return (
    <div className="w-full flex flex-col items-center text-center p-8">
      <img 
        src="/ftl.jpg" 
        alt="Full Truck Load Transportation" 
        className="w-full max-w-3xl h-auto rounded-xl shadow-lg"
      />
      <div className="mt-6 max-w-2xl">
        <h1 className="text-4xl font-bold text-[#923635]">Full Truck Load Transportation</h1>
        <p className="mt-4 text-lg text-gray-700">
          Our Full Truck Load (FTL) service ensures the fastest and most efficient way to transport bulk goods with dedicated truck capacity, reducing handling time and ensuring timely deliveries.
        </p>
        <div className="mt-6">
          <Link href="/contact">
            <button className="px-6 py-2 bg-black text-white rounded-md hover:bg-[#923635] transition">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FullTruckLoad;


