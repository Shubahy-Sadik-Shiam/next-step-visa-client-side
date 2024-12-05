import { useLoaderData } from "react-router-dom";
import VisaCard from "../components/VisaCard";

const AllVisas = () => {
  const allVisas = useLoaderData();
  console.log(allVisas);
  return (
    <div className="w-10/12 mx-auto">
        <h2 className="text-4xl text-center font-bold my-6">Explore All Visa Categories: Your Complete <br /> Guide to Global Travel</h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
        {allVisas.map((visa) => (
          <VisaCard visa={visa} key={visa._id}></VisaCard>
        ))}
      </div>
    </div>
  );
};

export default AllVisas;
