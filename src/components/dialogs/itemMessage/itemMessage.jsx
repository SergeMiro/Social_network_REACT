import React from 'react';
import { Link } from 'react-router-dom';
import mcss from './itemMessage.module.css'

const ItemMessage = (props) =>{
	return (
		<Link to={'/dialogs/'+ props.id}>
			<div className={mcss.item}>
				<div className={mcss.text}>
					{props.name} {props.surname}
				</div>
			</div>
		</Link>
	)
}

export default ItemMessage