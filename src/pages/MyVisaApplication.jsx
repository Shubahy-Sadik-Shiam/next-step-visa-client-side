import { useLoaderData } from "react-router-dom";
import ApplyCard from "../components/ApplyCard";
import { useEffect, useState } from "react";

const MyVisaApplication = () => {
  const loadedData = useLoaderData();
  const [visas, setVisas] = useState(loadedData);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchValue = e.target.input.value;

    fetch(`https://assignment-10-server-tau-nine.vercel.app/myApplied?searchParams=${searchValue}`)
        .then((res) => res.json())
        .then((data) => {
          setVisas(data);
        });
  };
  return (
    <div className="w-10/12 mx-auto my-10 ">
      <div className="flex justify-center">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            name="input"
            className="mb-3 w-52 border border-r-0 border-[#90a2f5] rounded-r-none input"
            placeholder="Search by country name"
          />
          <input
            type="submit"
            value="Search"
            className="btn bg-gradient-to-br from-[#4d6afb] via-[#90a2f5] to-[#dbd8f4] text-white font-bold rounded-l-none"
          />
        </form>
      </div>
      <div className="space-y-5">
        {visas.map((visa) => (
          <ApplyCard
            key={visa._id}
            visa={visa}
            visas={visas}
            setVisas={setVisas}
          ></ApplyCard>
        ))}
      </div>
    </div>
  );
};

export default MyVisaApplication;
