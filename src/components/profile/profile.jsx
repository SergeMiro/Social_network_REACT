import React from 'react';
import AvatarDescription from './avaDescriptionPosts/avaDescription';
import NewPost from './myPosts/newPost/newPost';
import Post from './myPosts/post/post';
import mcss from './profile.module.css';

const Profile = (props) => {

		let postData = [
		{id: 1, chat: 'Hi guys, I have some bananas'},
		{id: 2, chat: 'No way, I have only one banana'},
		{id: 3, chat: 'Me too, I have many bananas. Can I sale or by the bananas?'},
		{id: 4, chat: "It's not a crypto... U can't sale or buy the bananas. I think so."}
		]	

		let postsElements = 
		postData.map (el => <Post message={el.chat}/>);

		
		return (
		<div className={mcss.container}>
			<div className={mcss.backgroundFlex}>
				<img src='https://images.hdqwalls.com/download/banana-tv-show-nz-1600x900.jpg' alt='coverImage'/>
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