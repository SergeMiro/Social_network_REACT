import React from 'react';
import mcss from './post.module.css'

const Post = (props) =>{
	return (
	<div className={mcss.container}>
		<img className={mcss.logo} src="https://static.vecteezy.com/system/resources/previews/001/610/393/non_2x/man-face-avatar-cartoon-free-vector.jpg" alt="User avatar"/>
		<div className={mcss.post}>
			{props.myBoardPosts} 
		</div>
		<div className={mcss.likes}>
			<img src='https://www.shareicon.net/data/256x256/2017/05/30/886565_heart_512x512.png' alt='like'/>
			<span> {props.myBoardLikes} </span> 
		</div>
	</div>
	)
}
export default Post