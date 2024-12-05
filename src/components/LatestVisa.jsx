import { useLoaderData } from "react-router-dom";
import VisaCard from "./VisaCard";

const LatestVisa = () => {
    const loadedVisa = useLoaderData()
    console.log(loadedVisa);
    return (
        <div>
            <h2 className="text-4xl my-10 text-center font-bold">Stay Updated: Latest Visa <br /> Opportunities and Guidelines</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                {
                    loadedVisa.map(visa=> <VisaCard key={visa._id} visa={visa}></VisaCard>)
                }
            </div>
        </div>
    );
};

export default LatestVisa;