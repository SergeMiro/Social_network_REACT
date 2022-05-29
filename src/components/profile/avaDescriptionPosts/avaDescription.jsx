import React from 'react';
import mcss from './avaDescription.module.css';

const AvatarDescription = () => {
	return (
			<div className={mcss.avatarDescription}>
				<div className={mcss.avatar}>
					<p>AVATAR</p>
				</div>
				<div className={mcss.description}>
					<p>Name</p>
					<p>SurName</p>
					<p>Birthday</p>
					<p>Work</p>
				</div>
			</div>
	)
}

export default AvatarDescription