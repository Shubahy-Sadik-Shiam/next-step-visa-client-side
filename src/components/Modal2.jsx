const Modal2 = ({visa}) => {
  const {_id, photo, name, type, time, description, age, fee, validity, method} = visa;

   const handleUpdate = e => {
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

    const updatedVisa = {name, photo, type, time, description, age, fee, validity, method, doc}

    fetch(`http://localhost:4000/allVisas/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(updatedVisa)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      alert("Data Updated")
    })
   }
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      {/* <button
        className="btn"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        open modal
      </button> */}
      <dialog id={`my_modal_${_id}`} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
        <form onSubmit={handleUpdate} className="bg-slate-200 p-10 mt-10">
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
        <input type="submit" className="btn btn-block mt-5" value="Update Visa" />
      </form>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal2;
