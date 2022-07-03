import React from "react"
import mcss from './header.module.css'
import { Link } from "react-router-dom"

const Header = (props) => {
	return (
		<div className={mcss.header}>
			<Link to="/profile">
				<img className={mcss.logo} src="https://static.vecteezy.com/system/resources/previews/001/208/654/original/banana-png.png" alt="coverImage"/>
			</Link>
			<span className={mcss.logo__name}> Bananas Network </span>
			<div className={mcss.userInfo}>
				<img src='https://cdn1.iconfinder.com/data/icons/facely-metapeople-3d-avatar-set/256/13._Farmer.png' alt='userAva' />
				<span className={mcss.userName}> {props.userName} {props.userSurname} </span>
			</div>
		</div>
	)
}

export default Header 