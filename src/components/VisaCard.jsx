import { Link } from "react-router-dom";

const VisaCard = ({ visa }) => {
  const {_id, photo, name, type, time, fee, validity, method } = visa;
  return (
    <div className="card  bg-gradient-to-br from-[#cdd0f7] via-[#f0f2fb] to-[#ffffff] transition-transform duration-300 hover:scale-95 hover:shadow-2xl">
      <figure className="px-10 pt-10">
        <img src={photo} alt="country" className="rounded-xl h-36 w-60" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <div className="flex gap-3">
        <p><span className="font-semibold">Visa Type:</span> {type}</p>
        <p><span className="font-semibold">Processing Time:</span> {time}</p>
        </div>
        <div className="flex gap-3">
        <p><span className="font-semibold">Fee:</span> {fee}</p>
        <p><span className="font-semibold">Validity:</span> {validity}</p>
        </div>
        <p><span className="font-semibold">Application Method:</span> {method}</p>
        <div className="card-actions">
          <Link to={`/visa/${_id}`}><button className="btn bg-gradient-to-br from-[#4d6afb] via-[#7a8de1] to-[#A29AE5] text-white font-bold">See Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default VisaCard;
