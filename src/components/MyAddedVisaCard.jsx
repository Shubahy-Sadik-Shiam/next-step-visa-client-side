import Swal from "sweetalert2";

const MyAddedVisaCard = ({ vis, handleUpdate, visa, setVisa }) => {
  const { photo, name, type, time, fee, validity, method, _id } = vis;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://assignment-10-server-tau-nine.vercel.app/allVisas/${_id}`, {
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
              const remainingVisa = visa.filter((v) => v._id !== _id);
              setVisa(remainingVisa);
            }
          });
      }
    });
  };
  return (
    <div>
      <div className="card max-sm:flex-col w-10/12 mx-auto card-side bg-gradient-to-br from-[#cdd0f7] via-[#ebeeff] to-[#ffffff] shadow-lg">
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
              <a
                href="#my_modal_8"
                onClick={() => handleUpdate(vis)}
                className="btn bg-gradient-to-br from-[#4d6afb] via-[#7a8de1] to-[#A29AE5] text-white font-bold max-sm:mr-2 md:mr-2 lg:mr-0"
              >
                Update
              </a>
              <button onClick={() => handleDelete(_id)} className="btn bg-gradient-to-r from-red-600 text-white font-bold to-red-400">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAddedVisaCard;
