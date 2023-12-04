import React from "react";
import PropTypes from "prop-types";

function Profile(props) {
    return (
        <React.Fragment>
            <img src="https://picsum.photos/200/50" alt="Profile Banner"></img>
            <img src="https://picsum.photos/50/50" alt="Profile Picture"></img>
            <h2>{props.firstName} {props.middleName} {props.lastName}</h2>
            <h3>Tweets</h3>
            <h3>Following</h3>
            <h3>Followers</h3>
        </React.Fragment>
    )
}

Profile.propTypes = {
    firstName: PropTypes.string.isRequired,
    middleName: PropTypes.string,
    lastName: PropTypes.string.isRequired
}
export default Profile;