const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_NEW_POST = 'ADD-NEW-POST'


let initialState = {
		postsData : [
			{id: 1, post: 'Hi guys, I have some bananas', likesCount: 23},
			{id: 2, post: 'No way, I have only one banana', likesCount: 74},
			{id: 3, post: 'Me too, I have many bananas. Can I sale or by the bananas?', likesCount: 18},
			{id: 4, post: "It's not a crypto... U can't sale or buy the bananas. I think so.", likesCount: 55}
		],
		newPostText : 'SergeMiro text' //для постов на стене
}



const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_NEW_POST_TEXT:
			state.newPostText = action.newText
		return state;
		
		case ADD_NEW_POST:
			let newPost = {
				id: 5,
				post: state.newPostText,  //или newPostText вместо postMessage
				likesCount: 0
			}
			state.postsData.unshift(newPost) 
			state.newPostText = ''//может можно удалить эту строку ?
		return state;

		default: 
		return state;
	}
}

export const updateNewPostTextActionCreator = (text) =>{
	return {
		type: 'UPDATE-NEW-POST-TEXT',
		newText: text
	}
}
export const addNewPostActionCreator = (text) =>{
	return {
		type: 'ADD-NEW-POST'
	}
} 

export default profileReducer
