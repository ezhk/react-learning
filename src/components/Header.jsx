import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <Link className="header-link" to="/">
        Messenger
      </Link>

      <div className="header-profile">
        <Link className="header-link" to="/profile">
          Profile
        </Link>
        <img className="header-image" src="images/profile.svg" alt="" />
      </div>
    </div>
  );
}
