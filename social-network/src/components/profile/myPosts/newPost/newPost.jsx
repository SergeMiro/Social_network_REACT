import React from 'react';
import mcss from './newPost.module.css'

const NewPost = () =>{
	return (
		<div className={mcss.newPost}>
			<p>Publish a post</p>
			<div>
				<textarea className={mcss.textPlace}></textarea>
			</div>
			<div>
				<button className={mcss.button}>Add Post</button>
			</div>
	</div>
	)
}

export default NewPost