import React from 'react';
import mcss from './post.module.css'

const Post = (props) =>{
	return (
		<div className={mcss.Post}>
					{props.message}
		</div>		
	)
}
		export default Post