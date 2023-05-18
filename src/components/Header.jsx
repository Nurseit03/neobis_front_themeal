import React, { useState, useEffect } from "react";
import {Routes, Route, Link} from 'react-router-dom';


const Header = function(){

    return(
        <header className="header">
        <Link to="/">The Meal</Link>
        </header>
    )
}

export default Header;
