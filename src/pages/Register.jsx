import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const { createUser, updateUserInfo, googleLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    setError("");
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    if (!/^(?=.*[A-Z])(?=.*[a-z].*$)/.test(password)) {
      return setError("Password must have an uppercase and lowercase letter");
    } else if (password < 6) {
      return setError("Password length must be at least 6 character");
    }
    console.log(name, photo);

    createUser(email, password)
      .then((result) => {
        updateUserInfo(name, photo);

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
          title: "Registered successfully",
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
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
          icon: "error",
          title: "Registration failed",
        });
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
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
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="photo url"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                {error && <p className="text-sm text-red-400">{error}</p>}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
                <button onClick={handleGoogleLogin} className="btn mt-3">
                  <FcGoogle className="text-xl" /> Sign In with Google
                </button>
              </div>
              <p className="text-center">
                New to this site?
                <Link to="/login">
                  <span className="text-blue-500"> Login</span>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
