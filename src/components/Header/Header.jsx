import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import "./Header.css";
import Swal from "sweetalert2";
import ActiveClass from "../ActiveClass/ActiveClass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const { user, loading, logOutUser } = useContext(AuthContext);
  const handleLogoutUser = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "To logout from this account!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        logOutUser().then(() => {
          localStorage.removeItem("toy-market-place-token");
        });
        Swal.fire("Logout!", "You are logged out.", "success");
      }
    });
  };
  return (
    <div className="header py-3 bg-primary text-white shadow-lg z-10 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <h2 className="text-xl font-bold">
            <img
              src="/src/assets/images/logo.png"
              className="w-16 md:w-32 h-8 md:h-10"
              alt=""
            />
          </h2>
        </Link>
        <div>
          <div className="drawer sm:hidden z-10">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex items-center">
              {/* Page content here */}
              <div>
                {user ? (
                  <img className="w-8 h-8 rounded-full" src={user?.photoURL} />
                ) : loading ? (
                  <span className="loading loading-spinner loading-sm"></span>
                ) : (
                  ""
                )}
              </div>
              <label
                htmlFor="my-drawer"
                className="btn btn-primary drawer-button"
              >
                <FontAwesomeIcon icon={faBars} />
              </label>
            </div>
            <div className="drawer-side">
              <label htmlFor="my-drawer" className="drawer-overlay"></label>
              <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                {/* Sidebar content here */}
                <h3 className="text-xl px-4 mb-5">Marvel</h3>
                <li>
                  <ActiveClass to="/">Home</ActiveClass>
                </li>
                <li>
                  <ActiveClass to="/blog">Blog</ActiveClass>
                </li>
                <li>
                  <ActiveClass to="/allToys">All toys</ActiveClass>
                </li>
                <li>
                  <ActiveClass to="/myToys">My toys</ActiveClass>
                </li>
                <li>
                  <ActiveClass to="/addAToy">Add a toy</ActiveClass>
                </li>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  {user ? (
                    <Link onClick={handleLogoutUser} to="/">
                      Sign out
                    </Link>
                  ) : (
                    <Link to="/login">Login</Link>
                  )}
                </li>
              </ul>
            </div>
          </div>

          <div className="hidden sm:flex items-center space-x-6">
            <ActiveClass to="/">Home</ActiveClass>
            <ActiveClass to="/blog">Blog</ActiveClass>
            <ActiveClass to="/allToys">All toys</ActiveClass>
            <ActiveClass to="/myToys">My toys</ActiveClass>
            <ActiveClass to="/addAToy">Add a toy</ActiveClass>
            {loading ? (
              <span>Loading...</span>
            ) : user ? (
              <span className="badge border border-white text-white font-bold">
                {user?.displayName}
              </span>
            ) : (
              ""
            )}
            {loading ? (
              <span>Loading...</span>
            ) : user ? (
              <div
                className="dropdown dropdown-bottom dropdown-end z-10"
                title={user?.displayName}
              >
                <label
                  tabIndex={0}
                  className="btn btn-circle flex justify-center items-center m-1"
                >
                  <img
                    className="w-10 h-10 rounded-full"
                    src={user?.photoURL}
                  />
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 z-10"
                >
                  <li>
                    <Link to="/profile">Profile</Link>
                  </li>
                  <li>
                    <Link onClick={handleLogoutUser} to="/">
                      Sign out
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
