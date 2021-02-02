import React from "react";
import { useSelector } from "react-redux";

import { getProfile } from "../store/profile/selectors";

export default function Profile() {
  const profile = useSelector(getProfile);

  return (
    <div className="profile">
      {/* pretty dog is here */}
      <img className="profile-image" src={profile.userpic} alt="" />
      <span>{profile.username}</span>
    </div>
  );
}
