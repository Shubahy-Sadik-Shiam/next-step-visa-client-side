import { useLoaderData } from "react-router-dom";
import VisaCard from "./VisaCard";
import { Typewriter } from "react-simple-typewriter";

const LatestVisa = () => {
  const loadedVisa = useLoaderData();
  return (
    <div>
      <h2 className="text-4xl bg-gradient-to-br from-[#121C84] via-[#4B5ECF] to-[#8278DA] bg-clip-text text-transparent my-10 text-center font-bold">
        {" "}
        <Typewriter
          cursor
          cursorBlinking
          delaySpeed={1000}
          deleteSpeed={70}
          loop={0}
          typeSpeed={75}
          words={["Stay Updated: Latest Visa Opportunities and Guidelines"]}
        />
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {loadedVisa.map((visa) => (
          <VisaCard key={visa._id} visa={visa}></VisaCard>
        ))}
      </div>
    </div>
  );
};

export default LatestVisa;
