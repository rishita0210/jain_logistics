import ServicePage from "@/app/components/ServicePage";

const service = {
  name: "Part Truck Load Transportation",
  image: "/ptl.jpg",
  slug: "part-truck-load",
  description:
    "Part Truck Load (PTL) Transportation is an ideal solution for businesses that do not require a full truck for their shipments. It provides cost-effective logistics by allowing multiple shipments from different clients to share a single truck. This method reduces transportation costs, optimizes space, and ensures efficient delivery routes. PTL is perfect for small to medium-sized shipments that need flexibility and reliability. Our PTL services offer real-time tracking, secured handling, and scheduled deliveries to ensure that your goods reach their destination safely and on time.",
};

export default function PartTruckLoad() {
  return <ServicePage service={service} />;
}
