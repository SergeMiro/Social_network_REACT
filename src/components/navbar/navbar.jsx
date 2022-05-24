import React from 'react';
import mcss from './navbar.module.css'



const Navbar = () =>{
	return(
		<nav className={mcss.navbar}>
				<div>
					<a href="/profile">Profile</a>
				</div>
				<div>
					<a href="/dialogs">Messages</a>
				</div>
				<div>
					<a href="/news">News</a>
				</div>
				<div>
					<a href="/settings">Settings</a>
				</div>
				<div>
					<a href="/bananas">My bananas</a>
				</div>
		</nav>
	)
}

export default Navbar