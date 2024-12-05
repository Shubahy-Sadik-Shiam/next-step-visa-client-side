import pic1 from "../assets/pic1.png"
import pic2 from "../assets/pic2.png"
import pic3 from "../assets/pic3.png"
const ExtraSection1 = () => {
  return (
    <div className="my-20">
      <h2 className="text-4xl font-bold text-center">How does VisaHQ work?</h2>

      <div className="flex">
        <div>
          <ul class="steps steps-vertical pt-20">
            <li class="step my-14"></li>
            <li class="step"></li>
            <li class="step"></li>
          </ul>
        </div>
        <div className="w-full mt-10 space-y-4">
          {/* card-1 */}
          <div className="card max-sm:w-72 justify-center items-center card-side bg-base-100 shadow-xl">
            <figure className="w-44">
              <img
                src={pic1}
                alt="Movie"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
              Apply online</h2>
              <p>Secure online application saves time and checks for errors</p>
            </div>
          </div>
          {/* card 2 */}
          <div className="card max-sm:w-72 justify-center items-center card-side bg-base-100 shadow-xl">
            <figure className="w-44">
              <img
                src={pic2}
                alt="Movie"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
              Mail documents</h2>
              <p>No need to stand in line at the consulate, we will do it for you</p>
            </div>
          </div>
          {/* card 3 */}
          <div className="card max-sm:w-72 justify-center items-center card-side bg-base-100 shadow-xl">
            <figure className="w-44">
              <img
                src={pic3}
                alt="Movie"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
              Receive passport, visa</h2>
              <p>Real time status updates will keep you informed.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraSection1;
