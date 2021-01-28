import React from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import PropTypes from "prop-types";

export function Header({ profile }) {
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

Header.propTypes = {
  profile: PropTypes.objectOf(PropTypes.string),
};

const mapStateToProps = (state) => {
  return { profile: state.profile };
};
export default connect(mapStateToProps)(Header);
