import React from "react";

import { connect } from "react-redux";
import PropTypes from "prop-types";

export function Profile({ profile }) {
  return (
    <div className="profile">
      {/* pretty dog is here */}
      <img className="profile-image" src={profile.userpic} alt="" />
    </div>
  );
}

Profile.propTypes = {
  profile: PropTypes.objectOf(PropTypes.string),
};

const mapStateToProps = (state) => {
  return { profile: state.profile };
};
export default connect(mapStateToProps)(Profile);
