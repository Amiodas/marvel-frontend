import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import "./Header.css";
import Swal from "sweetalert2";
import ActiveClass from "../ActiveClass/ActiveClass";

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
        logOutUser();
        Swal.fire("Logout!", "You are logged out.", "success");
      }
    });
  };
  return (
    <div className="header py-3 text-primary shadow-lg z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h2 className="text-xl font-bold">Toy</h2>
        <div className="flex items-center space-x-6">
          <ActiveClass to="/">Home</ActiveClass>
          <ActiveClass to="/blog">Blog</ActiveClass>
          <ActiveClass to="/allToys">All toys</ActiveClass>
          <ActiveClass to="/myToys">My toys</ActiveClass>
          <ActiveClass to="/addAToy">Add a toy</ActiveClass>
          {loading ? (
            <span>Loading...</span>
          ) : (
            <span className="badge text-primary font-bold">
              {user?.displayName}
            </span>
          )}
          {loading ? (
            <span>Loading...</span>
          ) : user ? (
            <div className="dropdown dropdown-bottom dropdown-end z-10">
              <label tabIndex={0} className="btn btn-circle flex justify-center items-center m-1">
                <img className="w-10 h-10 rounded-full" src={user?.photoURL} />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 z-10"
              >
                <li>
                  <Link to="/">Profile</Link>
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
  );
};

export default Header;
