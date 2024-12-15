import Swal from "sweetalert2";

const ApplyCard = ({ visa, visas, setVisas }) => {
  const {
    _id,
    firstName,
    lastName,
    email,
    currentDate,
    fee,
    name,
    photo,
    type,
    time,
    validity,
    method,
  } = visa;

  const handleCancel = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:4000/myApplied/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Application has been removed.",
                icon: "success",
              });
              const remainingVisa = visas.filter((visa) => visa._id !== _id);
              setVisas(remainingVisa);
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="card max-sm:flex-col card-side bg-gradient-to-br from-[#cdd0f7] via-[#ebeeff] to-[#ffffff] shadow-xl">
        <figure>
          <img src={photo} alt="country" className="w-60 h-48 p-5" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <div className="lg:flex justify-between">
            <div className="lg:flex gap-5">
              <div className="space-y-1">
                <p>
                  <span className="font-bold">User Name:</span> {firstName}{" "}
                  {lastName}
                </p>
                <p>
                  <span className="font-bold">User Email:</span> {email}
                </p>
                <p>
                  <span className="font-bold">Applied Date:</span> {currentDate}
                </p>
                <p>
                  <span className="font-bold">Application method:</span>{" "}
                  {method}
                </p>
              </div>
              <div className="space-y-1">
                <p>
                  <span className="font-bold">Fee:</span> {fee}
                </p>
                <p>
                  <span className="font-bold">Visa Type:</span> {type}
                </p>
                <p>
                  <span className="font-bold">Processing Time:</span> {time}
                </p>
                <p>
                  <span className="font-bold">Validity:</span> {validity}
                </p>
              </div>
            </div>
            <div>
              <button
                onClick={() => handleCancel(_id)}
                className="btn bg-red-600 text-white"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyCard;
