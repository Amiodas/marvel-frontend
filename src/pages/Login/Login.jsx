import React, { useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { loginUser, googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Marvel" + " | " + "Login";
  }, [location]);

  const handleLoginUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((res) => {
        const user = res.user;
        const loggedUser = {
          email: user.email,
        };
        console.log(loggedUser);
        fetch("http://localhost:5000/jwt", {
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
        toast("Successfully login");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast(error.code, error.message);
      });
  };
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        toast("Successfully sign in with google!");
        const user = res.user;
        const loggedUser = {
          email: user.email,
        };
        console.log(loggedUser);
        fetch("http://localhost:5000/jwt", {
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
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast(error.code, error.message);
      });
  };
  return (
    <div className="hero min-h-screen">
      <ToastContainer />
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl text-primary font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
          <form onSubmit={handleLoginUser} className="card-body">
            <h3 className="text-2xl font-bold text-center text-primary">
              Login
            </h3>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
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
