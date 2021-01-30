import React from "react";

import { useSelector } from "react-redux";
import PropTypes from "prop-types";

export default function Profile() {
  const profile = useSelector((state) => state.profile);

  return (
    <div className="profile">
      {/* pretty dog is here */}
      <img className="profile-image" src={profile.userpic} alt="" />
    </div>
  );
}
