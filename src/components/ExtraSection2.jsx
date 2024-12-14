import { Fade } from "react-awesome-reveal";
import { Typewriter } from "react-simple-typewriter";

const ExtraSection2 = () => {
  return (
    <div className="mb-10">
      <Fade duration={3000}>
        <h2 className="text-4xl font-bold text-center mb-5">
          Delivering expert visa solutions since 2003.
        </h2>
      </Fade>
      <h3 className="text-3xl font-semibold mt-10 mb-5 text-center">
        <Typewriter
                  cursor
                  cursorBlinking
                  delaySpeed={1000}
                  deleteSpeed={70}
                  loop={0}
                  typeSpeed={75}
                  words={["What we provide?"]}
                />
      </h3>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="card bg-base-200 transition-transform duration-300 hover:scale-95 hover:shadow-xl">
          <div className="card-body items-center text-center">
            <h2 className="card-title">Innovations</h2>
            <p>Real time status updates sent to your email or mobile phone.</p>
          </div>
        </div>
        <div className="card bg-base-200 transition-transform duration-300 hover:scale-95 hover:shadow-xl">
          <div className="card-body items-center text-center">
            <h2 className="card-title">Service</h2>
            <p>Dedicated call center, expert help, live chat.</p>
          </div>
        </div>
        <div className="card bg-base-200 transition-transform duration-300 hover:scale-95 hover:shadow-xl">
          <div className="card-body items-center text-center">
            <h2 className="card-title">Security</h2>
            <p>Guaranteed accuracy, privacy and security.</p>
          </div>
        </div>
        <div className="card bg-base-200 transition-transform duration-300 hover:scale-95 hover:shadow-xl">
          <div className="card-body items-center text-center">
            <h2 className="card-title">Simplicity</h2>
            <p>No hidden fees. Complete Transparency.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraSection2;
