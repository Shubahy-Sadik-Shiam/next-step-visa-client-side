import Swal from "sweetalert2";

const AddVisa = () => {
  const handleAddVisa = (e) => {
    e.preventDefault();
    const form = e.target;
    const photo = form.photo.value;
    const name = form.name.value;
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
    const visaInfo = {
      photo,
      name,
      type,
      time,
      description,
      age,
      fee,
      validity,
      method,
      doc,
    };
    console.log(visaInfo);

    fetch("http://localhost:4000/visas", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(visaInfo)
    })
    .then(res=>res.json())
    .then(data=> {
        console.log(data);
        if(data.insertedId){
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
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
            title: "Google login successful",
          });
        }
        form.reset()
    })
  };
  return (
    <div className="w-10/12 mx-auto">
      <h2 className="text-4xl font-bold text-center mt-5">
        Streamline Your Travel: Add Your Visa with Ease
      </h2>

      <form onSubmit={handleAddVisa} className="bg-slate-200 p-10 mt-10">
        {/* row-1 */}
        <div className="flex gap-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Country Image</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="country image"
              className="input w-full input-bordered"
              required
            />
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Country Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Country name"
              className="input w-full input-bordered"
              required
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
              required
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
              type="text"
              name="time"
              placeholder="processing time"
              className="input w-full input-bordered"
              required
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
              name="description"
              placeholder="description"
              className="input w-full input-bordered"
              required
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
              placeholder="age restriction"
              className="input w-full input-bordered"
              required
            />
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Fee</span>
            </label>
            <input
              type="number"
              name="fee"
              placeholder="fee"
              className="input w-full input-bordered"
              required
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
              placeholder="validity"
              className="input w-full input-bordered"
              required
            />
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Application method</span>
            </label>
            <input
              type="text"
              name="method"
              placeholder="application method"
              className="input w-full input-bordered"
              required
            />
          </div>
        </div>
        <input type="submit" className="btn btn-block mt-5" value="Add Visa" />
      </form>
    </div>
  );
};

export default AddVisa;
