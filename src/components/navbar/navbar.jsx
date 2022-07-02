import React from 'react';
import './navbar.css';
import { NavLink } from 'react-router-dom';



function Navbar() {
	return (
		<div className='container__navbar'>
			<nav className='navbar'>
				<div className='item'>
					<NavLink to="/profile">Profile</NavLink>
				</div>
				<div className='item'>
					<NavLink to="/dialogs">Messages</NavLink>
				</div>
				<div className='item'>
					<NavLink to="/news">News</NavLink>
				</div>
				<div className='item'>
					<NavLink to="/settings">Settings</NavLink>
				</div>
				<div className='item'>
					<NavLink to="/bananas">My bananas</NavLink>
				</div>
			</nav>
		</div>
	)
}

export default Navbar