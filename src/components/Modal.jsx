import moment from "moment";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const Modal = ({ loadedVisa }) => {
    const {
        photo,
        name,
        type,
        time,
        fee,
        validity,
        method,
      } = loadedVisa;
  const { user } = useContext(AuthContext);
  const email = user?.email;
  const currentDate = moment().format("YYYY-MM-DD");

  const handleApply = (e) => {
    e.preventDefault();
    const form = e.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const userInfo = { firstName, lastName, email, currentDate, fee, name, photo, type, time, validity, method };

    fetch("https://assignment-10-server-tau-nine.vercel.app/myApplied", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
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
              title: "Visa applied successful",
            });
          }
      });
  };
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      {/* <button
        className="btn"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        open modal
      </button> */}
      <dialog id="my_modal_5" className="modal sm:modal-middle">
        <div className="modal-box bg-gradient-to-br from-[#cdd0f7] via-[#ebeeff] to-[#f3f3fa]">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="w-8/12 mx-auto">
            <form className="" onSubmit={handleApply}>
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                required
                defaultValue={email}
                placeholder="Type your email"
                className="input input-bordered w-full"
              />

              <label className="label">
                <span className="label-text">First Name</span>
              </label>
              <input
                type="text"
                name="firstName"
                placeholder="Type your first name"
                className="input input-bordered w-full"
                required
              />

              <label className="label">
                <span className="label-text">Last Name</span>
              </label>
              <input
                type="text"
                name="lastName"
                placeholder="Type your last name"
                className="input input-bordered w-full"
                required
              />

              <label className="label">
                <span className="label-text">Applied Date</span>
              </label>
              <input
                type="date"
                defaultValue={currentDate}
                placeholder="Type here"
                className="input input-bordered w-full"
              />

              <label className="label">
                <span className="label-text">Fee</span>
              </label>
              <input
                type="number"
                defaultValue={fee}
                placeholder="Type here"
                className="input input-bordered w-full"
              />
              <input
                type="submit"
                className="btn btn-block bg-gradient-to-br from-[#4d6afb] via-[#7a8de1] to-[#A29AE5] text-white mt-3"
                value="Apply"
              />
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
