import React from "react"
import mcss from './header.module.css'
import { Link } from "react-router-dom"

const Header = () => {
	return (
		<div className={mcss.header}>
			<Link to="/profile">
				<img className={mcss.logo} src="https://static.vecteezy.com/system/resources/previews/001/208/654/original/banana-png.png" alt="coverImage"/>
			</Link>
			<span className={mcss.logo__name}>Banana's Network </span>
		</div>
	)
}

export default Header 