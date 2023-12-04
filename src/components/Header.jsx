import React from "react";

function Header() {
    return (
        <React.Fragment>
            <button>Home</button>
            <button>Notifications</button>
            <button>Messages</button>
            <input placeholder="Search"></input>
            <button>Tweet</button>
        </React.Fragment>
    )
}

export default Header;
