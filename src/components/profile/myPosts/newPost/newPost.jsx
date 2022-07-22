import React from 'react';
import mcss from './newPost.module.css'

const NewPost = (props) =>{

	let newPostElement = React.createRef()

	let addPost = () =>{
		let text = newPostElement.current.value
		props.addNewPost(text)
	}
	let onPostChange = () =>{
		let text = newPostElement.current.value
		props.updateNewPostText(text)
	}
	


	return (
		<div className={mcss.newPost}>
			<p>Write your message here :</p>
			<div>
				<textarea className={mcss.textPlace} ref={newPostElement} onChange={onPostChange} />
			</div>
			<div>
				<button className={mcss.button} onClick={addPost} >Publish a post</button>
			</div>
	</div>
	)
}

export default NewPost