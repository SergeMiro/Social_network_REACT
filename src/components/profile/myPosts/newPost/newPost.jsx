import React from 'react';
import mcss from './newPost.module.css'
import { addNewPostActionCreator, updateNewPostTextActionCreator } from '../../../../redux/profilePageReducer';


const NewPost = (props) =>{

	let newPostElement = React.createRef()
	let onPostChange = () =>{
		let text = newPostElement.current.value
		props.dispatch(updateNewPostTextActionCreator(text))
	}
	let addPost = () =>{
		let text = newPostElement.current.value
		props.dispatch(addNewPostActionCreator(text))
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