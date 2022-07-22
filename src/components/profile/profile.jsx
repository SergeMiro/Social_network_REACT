import React from 'react';
import AvatarDescription from './avaDescriptionPosts/avaDescription';
import NewPost from './myPosts/newPost/newPost';
import Post from './myPosts/post/post';
import mcss from './profile.module.css';


const Profile = (props) => {

	let postElement = 
	props.postsData.map (el => <Post myBoardPosts={el.post} myBoardLikes={el.likesCount} />);

		return (
		<div className={mcss.container}>
			<div className={mcss.backgroundFlex}>
				<img src='https://images.hdqwalls.com/download/banana-tv-show-nz-1600x900.jpg' alt='CoverAccountImage'/>
			</div>
			<div className={mcss.contentPrincipal}>
				<AvatarDescription/>
				<NewPost addNewPost={props.addNewPost} 
							newPostText={props.newPostText}
							updateNewPostText={props.updateNewPostText} />
				<p className={mcss.allPostText}>My board</p>
				{postElement}  {/* This is "POST"-component */}
			</div>
		</div>
	)
}
export default Profile