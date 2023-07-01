import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import "./Header.css"

const Header = () => {
  const { user, loading, logOutUser } = useContext(AuthContext);
  const handleLogoutUser = () => {
    logOutUser()
  }
  return (
    <div className="bg-base-100 header py-2 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h2 className="text-xl font-bold">Toy</h2>
        <div className="flex items-center space-x-6">
          <Link to="/">Home</Link>
          <Link to="/">All toys</Link>
          <Link to="/">My toys</Link>
          <Link to="/">Add a toy</Link>
          {loading ? <span>Loading...</span> : <span className="badge text-primary font-bold">{user?.displayName}</span>}
          {loading ? (
            <span>Loading...</span>
          ) : user ? (
            <div className="dropdown dropdown-bottom dropdown-end">
              <label tabIndex={0} className="btn btn-circle m-1">
                <img className="w-10 h-10 rounded-full" src={user?.photoURL} />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/">Profile</Link>
                </li>
                <li>
                  <Link onClick={handleLogoutUser} to="/">Sign out</Link>
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
