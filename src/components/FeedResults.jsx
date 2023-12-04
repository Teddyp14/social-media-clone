import React from "react";
import PropTypes from "prop-types";

function FeedResults(props) {
    return (
        <React.Fragment>
            <img src={props.image} alt="feed image"></img>
            <h3>{props.header}</h3>
            <p>{props.paragraph}</p>
            <hr />
        </React.Fragment>
    )
}

FeedResults.propTypes = {
    image: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired,
    paragraph: PropTypes.string.isRequired
}

export default FeedResults;