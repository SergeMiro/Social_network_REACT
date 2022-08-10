import dialogsReducer from './dialogsPageReducer'
import profileReducer from './profilePageReducer'

/*-------------------Creation of Store--------------------------------*/
let store = {
	_state: {
		profilePage: {
			postsData : [
				{id: 1, post: 'Hi guys, I have some bananas', likesCount: 23},
				{id: 2, post: 'No way, I have only one banana', likesCount: 74},
				{id: 3, post: 'Me too, I have many bananas. Can I sale or by the bananas?', likesCount: 18},
				{id: 4, post: "It's not a crypto... U can't sale or buy the bananas. I think so.", likesCount: 55}
			],
			newPostText : 'SergeMiro text' //для постов на стене
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
			],
			newMessageBody: "text text text" //для сообщения в диалогах
		}
	},
	getState() {
		return this._state
	},

	_callSubscriber() {
		console.log("Hi man, I'am empty function")
	},
	subscribe(observer) {
		this._callSubscriber = observer
	},

	// dispatch method
	dispatch(action) {
		this._state.profilePage = profileReducer(this._state.profilePage, action)
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
		this._callSubscriber(this._state)
	}
}


export default store