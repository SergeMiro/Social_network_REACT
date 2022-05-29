import React from 'react';
import mcss from './navbar.module.css'
import { Link } from 'react-router-dom';



const setActive = ({ isActive }) =>(isActive ? " active" : "");
function Navbar() {
	return (
		<nav className={mcss.navbar}>
				<div className={mcss.item}>
					<Link to="/profile" className={setActive}>Profile</Link>
				</div>
				<div className={mcss.item}>
					<Link to="/dialogs" className={setActive}>Messages</Link>
				</div>
				<div className={mcss.item}>
					<Link to="/news" activeClassName={mcss.active}>News</Link>
				</div>
				<div className={mcss.item}>
					<Link to="/settings" activeClassName={mcss.active}>Settings</Link>
				</div>
				<div className={mcss.item}>
					<Link to="/bananas" activeClassName={mcss.active}>My bananas</Link>
				</div>
		</nav>
	)
}

export default Navbar