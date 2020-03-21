import React from 'react';
import '../Stylesheets/styling.css';

const  Navbar = (props) => {
    return (
        <div className="fixed-top navbar">
            <a href="./index.html">About Me</a>
            <a href="./web.html">Web</a>
            <a href="./gamedev.html">Game Dev</a>
            <a href="./featured.html">Featured</a>
        </div>
    );
}

export default Navbar;