import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { getProfile } from "../store/profile/selectors";
import { updateProfile } from "../store/middlewares";

export default function Header() {
  const profile = useSelector(getProfile);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateProfile());
  }, []);

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
