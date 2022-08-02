import { rerenderAllTree } from '../index'

/*-------------------Creation of Store--------------------------------*/
let store = {
	_state: {
		profilePage: {
			postsData : [
				{id: 1, post: 'Hi guys, I have some bananas', likesCount: 23},
				{id: 2, post: 'No way, I have only one banana', likesCount: 74},
				{id: 3, post: 'Me too, I have many bananas. Can I sale or by the bananas?', likesCount: 18},
				{id: 4, post: "It's not a crypto... U can't sale or buy the bananas. I think so.", likesCount: 55}
			]
		},
		dialogsPage : {
			dialogsData : [
				{id: 1, name: 'Fred', surname: 'Unbelievable'},
				{id: 2, name: 'Serge', surname: 'Miro'},
				{id: 3, name: 'Roman', surname: 'Orcheed'},
				{id: 4, name: 'Alina', surname: 'Miro'},
				{id: 5, name: 'Paul', surname: 'Van Dyk'},
				{id: 6, name: 'Aleksey', surname: 'Fedotov'},
				{id: 7, name: 'Volodymyr', surname: 'Golosnyouk'},
				{id: 8, name: 'Lyoudmila', surname: 'Pryimak'},
				{id: 9, name: 'Veronika', surname: 'Miroshnyk'},
				{id: 10, name: 'Dasha', surname: 'Melnik'}
			],
			messagesData : [
				{id: 1, message: 'Hi man, how r u? What do u think about this project?'},
				{id: 2, message: 'Abrakadabra work for this network.'},
				{id: 3, message: 'Blalblabla gavno-kod in this Bananas Network.'}
			]
		},
		newPostText : 'SergeMiro text', //для постов на стене
		newMessageBody: "text text text" //для сообщения в диалогах
	},

	getState() {
		return this._state
	},

	// dispatch method
	dispatch(action) {
			if (action.type === 'UPDATE-NEW-POST-TEXT' ) {
				this.getState().newPostText.push(action.newText)
				rerenderAllTree()
			}
			else if (action.type === 'ADD-NEW-POST') {
				let newPost = {
					id: 5,
					post: action.postMessage,  
					likesCount: 0
				}
					this.getState().profilePage.postsData.unshift(newPost)
					rerenderAllTree()
			} 





				else if (action.type === 'UPDATE-NEW-MESSAGE-BODY') {
					this.getState().newMessageBody = action.body     // this._state.newMessageBody.push(action.body) 
					rerenderAllTree()
			}
				else if (action.type === 'SEND-MESSAGE') {
					let textBody = this.getState().newMessageBody
					this.getState().newMessageBody = '' //зануляем textaria после отправки message
					this.getState().dialogsPage.messagesData.push({id: 6, message: textBody})
					rerenderAllTree()
			}
	}
}





// Это наши ACTIONS : функции которые вызывают наши Экшены
	export const updateNewPostTextActionCreator = (text) =>{
		return {
			type: 'UPDATE-NEW-POST-TEXT',
			newText: text
		}
	}
	export const addNewPostActionCreator = (text) =>{
		return {
			type: 'ADD-NEW-POST',
			postMessage: text
		}
	} 


	export const updateNewMessageBodyCreator = (text) => {
		return {
			type: 'UPDATE-NEW-MESSAGE-BODY',
			body: text
		}
	} 
	export const sendMessageCreator = () => {
		return {
			type: 'SEND-MESSAGE'
		}
	} 

	
export default store