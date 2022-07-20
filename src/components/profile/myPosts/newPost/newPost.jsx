import React from 'react';
import mcss from './newPost.module.css'

const NewPost = (props) =>{

	let addPost = () =>{
		let text = newPostElement.current.value
		props.addNewPost(text)
	}

	let newPostElement = React.createRef()


	return (
		<div className={mcss.newPost}>
			<p>Write your message </p>
			<div>
				<textarea ref={newPostElement} className={mcss.textPlace}></textarea>
			</div>
			<div>
				<button onClick={addPost} className={mcss.button}>Publish a post</button>
			</div>
	</div>
	)
}

export default NewPost