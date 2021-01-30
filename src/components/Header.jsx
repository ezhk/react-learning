import React from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import PropTypes from "prop-types";

export default function Header() {
  const profile = useSelector((state) => state.profile);

  return (
    <div className="header">
      <Link className="header-link" to="/">
        Messenger
      </Link>

      <div className="header-profile">
        <Link className="header-link" to="/profile">
          Profile
        </Link>
        <img className="header-image" src={profile.userpic} alt="" />
      </div>
    </div>
  );
}
