import React from 'react';
import AvatarDescription from './avaDescriptionPosts/avaDescription';
import NewPost from './myPosts/newPost/newPost';
import Post from './myPosts/post/post';
import mcss from './profile.module.css';
import state from '../../redux/state';

const Profile = (props) => {

	// let postsData = [
	// 	{id: 1, post: 'Hi guys, I have some bananas', likesCount: 23},
	// 	{id: 2, post: 'No way, I have only one banana', likesCount: 74},
	// 	{id: 3, post: 'Me too, I have many bananas. Can I sale or by the bananas?', likesCount: 18},
	// 	{id: 4, post: "It's not a crypto... U can't sale or buy the bananas. I think so.", likesCount: 55}
	// ]	
	let postsElements = state.profilePage.postsData.map (el => <Post myBoardPosts={el.post} myBoardLikes={el.likesCount} />);


		return (
		<div className={mcss.container}>
			<div className={mcss.backgroundFlex}>
				<img src='https://images.hdqwalls.com/download/banana-tv-show-nz-1600x900.jpg' alt='CoverAccountImage'/>
			</div>
			<div className={mcss.contentPrincipal}>
				<AvatarDescription/>
				<NewPost/>
				<p className={mcss.allPostText}>My board</p>
				{postsElements} 
			</div>
		</div>
	)
}
export default Profile