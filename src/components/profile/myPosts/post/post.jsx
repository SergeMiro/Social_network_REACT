import React from 'react';
import mcss from './post.module.css'

const Post = (props) =>{
	return (
		<div className={mcss.post}>
					{props.message}
		</div>		
	)
}
		export default Post