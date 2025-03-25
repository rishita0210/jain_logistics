import ServicePage from "@/app/components/ServicePage";

const service = {
  name: "Warehouse Management",
  image: "/warehouse.jpg",
  slug: "warehouse-management",
  description:
    "Warehouse Management involves efficient storage, handling, and distribution of goods to streamline logistics operations. It includes inventory control, order fulfillment, and optimized storage space utilization. Our modern warehouse facilities ensure improved inventory accuracy, faster processing times, and secure storage solutions. We implement cutting-edge technology to monitor stock levels, prevent losses, and enhance supply chain efficiency. Whether you need short-term storage or long-term inventory solutions, our warehouse management services provide a seamless experience tailored to your business needs.",
};

export default function WarehouseManagement() {
  return <ServicePage service={service} />;
}
