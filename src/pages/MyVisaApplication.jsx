import { useLoaderData } from "react-router-dom";
import ApplyCard from "../components/ApplyCard";
import { useState } from "react";

const MyVisaApplication = () => {
    const loadedData = useLoaderData()
    const [visas, setVisas] = useState(loadedData)
    return (
        <div className="w-10/12 mx-auto mt-10">
            <div className="space-y-5">
            {
                visas.map(visa=> <ApplyCard
                     key={visa._id} 
                     visa={visa}
                     visas={visas}
                     setVisas={setVisas}></ApplyCard>)
            }
            </div>
        </div>
    );
};

export default MyVisaApplication;