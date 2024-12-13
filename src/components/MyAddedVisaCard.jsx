import { useState } from "react";
import Modal2 from "./Modal2";

const MyAddedVisaCard = ({ vis }) => {
  const { photo, name, type, time, fee, validity, method, _id } = vis;
  const [visa, setVisa] = useState(vis)

  const handleUpdate = (_id) => {
    document.getElementById(`my_modal_${_id}`).showModal();

    fetch(`http://localhost:4000/allVisas/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        setVisa(data);
      });
  };
  return (
    <div>
      <div className="card w-10/12 mx-auto card-side bg-base-100 shadow-xl">
        <figure>
          <img src={photo} className="w-60 h-48 p-5" alt="country" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <div className="lg:flex justify-between items-center">
            <div className="lg:flex gap-5">
              <div className="space-y-1">
                <p>
                  <span className="font-bold">Visa Type: </span> {type}
                </p>
                <p>
                  <span className="font-bold">Processing Time:</span> {time}
                </p>
                <p>
                  <span className="font-bold">Method:</span> {method}
                </p>
              </div>
              <div className="space-y-1 mb-2">
                <p>
                  <span className="font-bold">Fee</span> {fee} $
                </p>
                <p>
                  <span className="font-bold">Validity:</span> {validity}
                </p>
              </div>
            </div>
            <div className="lg:flex flex-col gap-2">
              <button
                onClick={() => handleUpdate(_id)}
                className="btn max-sm:mr-2 md:mr-2 lg:mr-0"
              >
                Update
              </button>
              <button className="btn">Delete</button>
            </div>
          </div>
        </div>
      </div>
      <Modal2 visa={visa}></Modal2>
    </div>
  );
};

export default MyAddedVisaCard;
