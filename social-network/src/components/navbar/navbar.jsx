import React from 'react';
import mcss from './navbar.module.css'


const Navbar = () =>{
	return(
		<div className={mcss.navbar}>
			<nav>
				<div>
					<a href="#">Profile</a>
				</div>
				<div>
					<a href="#">Messages</a>
				</div>
				<div>
					<a href="#">News</a>
				</div>
				<div>
					<a href="#">Settings</a>
				</div>
				<div>
					<a href="#">My bananas</a>
				</div>
			</nav>
		</div>
	)
}

export default Navbar