import React from 'react';
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
	return (
		<nav className="NavBar">
			<NavLink exact to="/">Home</NavLink>
			<NavLink exact to="/soda">Soda</NavLink>
			<NavLink exact to="/popcorn">Popcorn</NavLink>
			<NavLink exact to="/lolipop">Lolipop</NavLink>
		</nav>
	)
}
export default NavBar;