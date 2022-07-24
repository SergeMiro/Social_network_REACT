import React from 'react';
import mcss from './newPost.module.css'

const NewPost = (props) =>{

	let newPostElement = React.createRef()

	let addPost = () =>{
		let text = newPostElement.current.value
		props.dispatch({type: 'ADD-NEW-POST', postMessage: text})
	}
	let onPostChange = () =>{
		let text = newPostElement.current.value
		props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text })
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