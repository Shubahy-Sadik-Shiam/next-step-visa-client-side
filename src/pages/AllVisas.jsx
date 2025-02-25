import { useLoaderData } from "react-router-dom";
import VisaCard from "../components/VisaCard";
import { FaFilter } from "react-icons/fa";
import { useState } from "react";

const AllVisas = () => {
  const allVisas = useLoaderData();

  const [visas, setVisas] = useState(allVisas)

  const handleAllVisa = () => {
    fetch("https://assignment-10-server-tau-nine.vercel.app/allVisas")
    .then(res=>res.json())
    .then(data=>{
      setVisas(data)
    })
  }

  const handleStudentVisa = () => {
    
    fetch("https://assignment-10-server-tau-nine.vercel.app/allVisas/type/Student%20Visa")
    .then(res=>res.json())
    .then(data=>{
      setVisas(data)
    })
  }
  const handleOfficialVisa = () => {

    fetch("https://assignment-10-server-tau-nine.vercel.app/allVisas/type/Official%20Visa")
    .then(res=>res.json())
    .then(data=>{
      setVisas(data)
    })
  }
  const handleTouristVisa = () => {

    fetch("https://assignment-10-server-tau-nine.vercel.app/allVisas/type/Tourist%20Visa")
    .then(res=>res.json())
    .then(data=>{
      setVisas(data)
    })
  }
  return (
    <div className="w-10/12 mx-auto mb-10">
      <h2 className="text-4xl bg-gradient-to-r from-[#121C84] via-[#6279fc] to-[#9c95d9] bg-clip-text text-transparent text-center font-bold my-6">
        Explore All Visa Categories: Your Complete <br /> Guide to Global Travel
      </h2>

      <details className="dropdown">
        <summary className="btn bg-gradient-to-br from-[#4d6afb] via-[#7a8de1] to-[#cecaf4] text-white font-bold m-1 w-40 mb-2">
          <p className="text-lg">Filter</p> <FaFilter />
        </summary>
        <ul className="menu dropdown-content bg-gray-400 backdrop-blur-lg bg-opacity-30 space-y-1 rounded-box z-[1] w-52 p-2 shadow">
          <li className="bg-gray-100 rounded-xl">
            <a onClick={handleAllVisa}>All Visa</a>
          </li>
          <li className="bg-gray-100 rounded-xl">
            <a onClick={handleStudentVisa}>Student Visa</a>
          </li>
          <li className="bg-gray-100 rounded-xl">
            <a onClick={handleOfficialVisa}>Official Visa</a>
          </li>
          <li className="bg-gray-100 rounded-xl">
            <a onClick={handleTouristVisa}>Tourist Visa</a>
          </li>
        </ul>
      </details>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
        {visas.map((visa) => (
          <VisaCard visa={visa} key={visa._id}></VisaCard>
        ))}
      </div>
    </div>
  );
};

export default AllVisas;
