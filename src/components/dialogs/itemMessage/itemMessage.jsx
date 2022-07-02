import React from 'react';
import { NavLink } from 'react-router-dom';
import mcss from './itemMessage.module.css'

const ItemMessage = (props) =>{
	let path = '/dialogs/'+ props.id
	return (
		<NavLink to={path} className={mcss.link__user__messages}>
			<div className={mcss.item}>
				<div className={mcss.text}>
					{props.name} {props.surname}
				</div>
			</div>
		</NavLink>
	)
}

export default ItemMessage