import React from "react";

const Header = (props) => (
    <div className="header-color">
        <div className="navigation">{props.children}</div>

    </div>
);


export default Header