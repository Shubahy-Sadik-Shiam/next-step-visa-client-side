import Swal from "sweetalert2";
const Modal2 = ({ visa, singleVisa, setVisa, isOpen, setIsOpen }) => {
  
  const {
    _id,
    photo,
    name,
    type,
    time,
    description,
    age,
    fee,
    validity,
    method,
  } = visa;

  const handleUpdate = (e) => {

    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const type = form.visaType.value;
    const time = form.time.value;
    const description = form.description.value;
    const age = form.age.value;
    const fee = form.fee.value;
    const validity = form.validity.value;
    const method = form.method.value;
    const option1 = form.option1.checked;
    const option2 = form.option2.checked;
    const option3 = form.option3.checked;
    const doc = [];
    if (option1) {
      doc.push("Valid passport");
    }
    if (option2) {
      doc.push("Visa application form");
    }
    if (option3) {
      doc.push("Recent passport-sized photograph");
    }

    const updatedVisa = {
      name,
      photo,
      type,
      time,
      description,
      age,
      fee,
      validity,
      method,
      doc,
    };

    fetch(`https://assignment-10-server-tau-nine.vercel.app/allVisas/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedVisa),
    })
      .then((res) => res.json())
      .then((data) => {
        const updatedData = singleVisa.map((scheduleData) =>
          scheduleData._id === _id
            ? {
                name,
                photo,
                type,
                time,
                description,
                age,
                fee,
                validity,
                method,
                doc,
                _id
              }
            : scheduleData
        );
        setVisa(updatedData);
        setIsOpen(false)
        const Toast = Swal.mixin({
          toast: true,
          position: "top",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: "success",
          title: "Visa Information Updated",
        });
      });
  };
  
  return (
    <>
    {
      isOpen && (<div
      className="modal modal-bottom sm:modal-middle"
      role="dialog"
      id="my_modal_8"
    >
      <div className="modal-box">
      <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <a href="#" className="btn btn-circle btn-sm absolute right-2 top-2">
            ✕
            </a>
          </form>
        </div>

        <form onSubmit={handleUpdate} className="bg-gradient-to-br from-[#cdd0f7] via-[#ebeeff] to-[#f3f3fa] rounded-xl p-10">
          {/* row-1 */}
          <div className="flex gap-4">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Country Image</span>
              </label>
              <input
                type="text"
                name="photo"
                defaultValue={photo}
                placeholder="country image"
                className="input w-full input-bordered"
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Country Name</span>
              </label>
              <input
                type="text"
                name="name"
                defaultValue={name}
                placeholder="Country name"
                className="input w-full input-bordered"
              />
            </div>
          </div>
          {/* row-2 */}
          <div className="flex gap-4">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Visa Type</span>
              </label>
              <select
                defaultValue={type}
                name="visaType"
                className="select select-bordered w-full"
              >
                <option disabled selected>
                  Choose One
                </option>
                <option>Tourist Visa</option>
                <option>Student Visa</option>
                <option>Official Visa</option>
              </select>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Processing Time</span>
              </label>
              <input
                defaultValue={time}
                type="text"
                name="time"
                placeholder="processing time"
                className="input w-full input-bordered"
              />
            </div>
          </div>
          {/* row-3 */}
          <div className="flex gap-4">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">
                  Required documents (you can select multiple options)
                </span>
              </label>
              <label className="label gap-3 justify-start cursor-pointer">
                <input name="option1" type="checkbox" className="checkbox" />
                <span className="label-text">Valid passport</span>
              </label>
              <label className="label gap-3 justify-start cursor-pointer">
                <input name="option2" type="checkbox" className="checkbox" />
                <span className="label-text">Visa application form</span>
              </label>
              <label className="label justify-start gap-3 cursor-pointer">
                <input name="option3" type="checkbox" className="checkbox" />
                <span className="label-text">
                  Recent passport-sized photograph
                </span>
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <input
                type="text"
                defaultValue={description}
                name="description"
                placeholder="description"
                className="input w-full input-bordered"
              />
            </div>
          </div>
          {/* row-4 */}
          <div className="flex gap-4">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Age restriction</span>
              </label>
              <input
                type="number"
                name="age"
                defaultValue={age}
                placeholder="age restriction"
                className="input w-full input-bordered"
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Fee</span>
              </label>
              <input
                type="number"
                name="fee"
                defaultValue={fee}
                placeholder="fee"
                className="input w-full input-bordered"
              />
            </div>
          </div>
          {/* row-5 */}
          <div className="flex gap-4">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Validity </span>
              </label>
              <input
                type="text"
                name="validity"
                defaultValue={validity}
                placeholder="validity"
                className="input w-full input-bordered"
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Application method</span>
              </label>
              <input
                type="text"
                name="method"
                defaultValue={method}
                placeholder="application method"
                className="input w-full input-bordered"
              />
            </div>
          </div>
          <input
            type="submit"
            className="btn btn-block bg-gradient-to-br from-[#4d6afb] via-[#7a8de1] to-[#A29AE5] text-white mt-5"
            value="Update Visa Information"
          />
        </form>
      </div>
    </div>)
    }
      
    </>
  );
};

export default Modal2;
