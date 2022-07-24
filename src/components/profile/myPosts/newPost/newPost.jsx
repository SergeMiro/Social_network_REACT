import React from 'react';
import mcss from './newPost.module.css'
import { addNewPostActionCreator } from '../../../../redux/state';
import { updateNewPostTextActionCreator } from '../../../../redux/state';


const NewPost = (props) =>{

	let newPostElement = React.createRef()
	let addPost = () =>{
		let text = newPostElement.current.value
		props.dispatch(addNewPostActionCreator(text))
	}
	let onPostChange = () =>{
		let text = newPostElement.current.value
		props.dispatch(updateNewPostTextActionCreator(text))
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