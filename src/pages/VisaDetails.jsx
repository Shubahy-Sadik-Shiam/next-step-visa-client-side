import { useLoaderData } from "react-router-dom";
import Modal from "../components/Modal";

const VisaDetails = () => {
  const loadedVisa = useLoaderData();
  const {
    _id,
    photo,
    name,
    type,
    time,
    fee,
    validity,
    method,
    description,
    age,
    doc,
  } = loadedVisa;
  return (
    <div className="pt-5">
      <div className="md:w-6/12 w-10/12 h-[600px] mx-auto card bg-base-100 shadow-xl">
        <figure>
          <img
            src={photo}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <div className="flex gap-5">
            <p><span className="font-semibold">Visa Type: </span>{type}</p>
            <p><span className="font-semibold">Processing Time: </span>{time}</p>
          </div>
          <div className="flex gap-5">
            <p><span className="font-semibold">Age restriction: </span>{age}</p>
            <p><span className="font-semibold">Validity: </span>{validity}</p>
          </div>
          <div className="flex gap-5">
            <p><span className="font-semibold">Method: </span>{method}</p>
            <p><span className="font-semibold">Fee: </span>{fee}</p>
          </div>
          <p className="font-semibold">Required Documents:</p>
          <div>
            {
                doc.map(item=><li>{item}</li>)
            }
          </div>
          <div className="card-actions">
            <button onClick={() => document.getElementById("my_modal_5").showModal()} className="btn btn-primary">Apply for the Visa</button>
          </div>
        </div>
      </div>
      <Modal loadedVisa={loadedVisa}></Modal>
    </div>
  );
};

export default VisaDetails;
