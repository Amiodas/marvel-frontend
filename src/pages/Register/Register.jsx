import React, { useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const { createUser, updateUser, googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Marvel" + " | " + "Register";
  }, [location]);

  const handleCreateRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const image = form.image.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((res) => {
        console.log(res);
        updateUser(name, image)
          .then(() => {})
          .catch((error) => {
            console.log(error.code, error.message);
          });
        const user = res.user;
        const loggedUser = {
          email: user.email,
        };
        console.log(loggedUser);
        fetch("https://assignment-11-server-lake.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(loggedUser),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("toy-market-place-token", data.token);
          });
        toast("User successfully, created!!!");
        navigate("/");
      })
      .catch((error) => {
        toast(error.code, error.message);
        console.log(error.code, error.message);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        toast("User successfully, created!!!");
        const user = res.user;
        const loggedUser = {
          email: user.email,
        };
        console.log(loggedUser);
        fetch("https://assignment-11-server-lake.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(loggedUser),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("toy-market-place-token", data.token);
          });
        navigate("/");
      })
      .catch((error) => {
        toast(error.code, error.message);
        console.log(error.code, error.message);
      });
  };

  return (
    <div className="hero min-h-screen">
      <ToastContainer />
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-primary">Sign Up!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl mt-8 mb-16">
          <form onSubmit={handleCreateRegister} className="card-body z-0">
            <h3 className="text-2xl font-bold text-center text-primary">
              Sign Up
            </h3>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input bg-white border-gray-200"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <input
                type="text"
                placeholder="image url"
                name="image"
                className="input bg-white border-gray-200"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input bg-white border-gray-200"
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
                className="input bg-white border-gray-200"
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
                Sign Up
              </button>
            </div>
            <div className="divider text-primary">OR</div>
            <div className="text-center text-primary">
              <span>Already Have an account? </span>
              <Link to="/login" className="hover:underline">
                Sign in
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

export default Register;
