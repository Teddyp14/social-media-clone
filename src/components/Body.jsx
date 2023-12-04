import React from "react";
import Feed from "./Feed.jsx";
import About from "./About.jsx";
import Profile from "./Profile.jsx";
import Suggestions from "./Suggestions.jsx";

const name = {
    firstName: "Kellie",
    middleName: "A",
    lastName: "Corrigan"
}

function Body() {
    return (
        <React.Fragment>
            <About />
            <Feed />
            <Profile
                firstName={name.firstName}
                middleName={name.middleName}
                lastName={name.lastName} />
            <Suggestions />
        </React.Fragment>
    )
}

export default Body;