const Modal = ({fee}) => {
    const handleApply = e => {
        e.preventDefault()
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
      <dialog id="my_modal_5" className="modal sm:modal-middle">
        <div className="modal-box">
        <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
         <div className="w-8/12 mx-auto">
         <form onSubmit={handleApply}>
         <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="Type your email" className="input input-bordered w-full"/>

          <label className="label">
            <span className="label-text">First Name</span>
          </label>
          <input type="text" placeholder="Type your first name" className="input input-bordered w-full" />

          <label className="label">
            <span className="label-text">Last Name</span>
          </label>
          <input type="text" placeholder="Type your last name" className="input input-bordered w-full" />

          <label className="label">
            <span className="label-text">Applied Date</span>
          </label>
          <input type="date" placeholder="Type here" className="input input-bordered w-full" />

          <label className="label">
            <span className="label-text">Fee</span>
          </label>
          <input type="number" defaultValue={fee} placeholder="Type here" className="input input-bordered w-full" />
          <input type="submit" className="btn btn-block mt-3" value="Apply" />
          </form>
         </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
