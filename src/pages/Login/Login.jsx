import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { loginUser, googleSignIn } = useContext(AuthContext);
  const handleLoginUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((res) => {
        toast("User succesfully signed in!!!")
        console.log(res);
      })
      .catch((error) => {
        toast(error.code, error.message);
        console.log(error.code, error.message);
      });
  };
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => {
        toast("User succesfully signed in!!!")
      })
      .catch((error) => {
        toast(error.code, error.message);
        console.log(error.code, error.message);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
    <ToastContainer />
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLoginUser} className="card-body">
            <h3 className="text-2xl font-bold text-center">Login</h3>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
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
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
            <div className="divider">OR</div>
            <div className="text-center">
              <span>Have no account? </span>
              <Link to="/register" className="hover:underline">
                Sign up
              </Link>
            </div>
          </form>
          <div className="text-center mb-6">
            <button
              onClick={handleGoogleSignIn}
              className="btn btn-primary btn-circle"
            >
              G
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
