import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <Link className="header-link" to="/">
        Messenger
      </Link>

      <Link className="header-link" to="/profile">
        Profile
      </Link>
    </div>
  );
}
