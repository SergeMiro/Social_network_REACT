import React from 'react';
import AvatarDescription from './avaDescriptionPosts/avaDescription';
import NewPost from './myPosts/newPost/newPost';
import Post from './myPosts/post/post';
import mcss from './profile.module.css';

const Profile = () => {
	return (
		<div className={mcss.container}>
			<div className={mcss.background}>
				<img src='https://images.hdqwalls.com/download/banana-tv-show-nz-1600x900.jpg' alt='coverImage'/>
			</div>
		
			<div className={mcss.contentPrincipal}>
				<AvatarDescription/>
				<NewPost/>
				<p className={mcss.allPostText}>My board</p>
				<Post message="Hi guys, I have some bananas"/>
				<Post message="No way, I have only one banana"/>
				<Post message="Me too, I have many bananas. Can I sale my bananas?"/>
				<Post message="It's not a crypto... U can't sale your bananas."/>
			</div>
		</div>
	)
}

export default Profile