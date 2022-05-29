import React from 'react';
import mcss from './message.module.css'

const Message = (props) =>{
	return(
		<div className={mcss.messageComplet}>
			<div className={mcss.text}>
				{props.message}
			</div>
		</div>
	)
}

export default Message