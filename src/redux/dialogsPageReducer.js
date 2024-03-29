const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'


let initialState = {
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

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_NEW_MESSAGE_BODY:
			state.newMessageBody = action.body   // this._state.newMessageBody.push(action.body)
			return state;

		case SEND_MESSAGE:
			let textBody = state.newMessageBody //или body вместо textBody
			state.newMessageBody = '' //зануляем textaria после отправки message
			state.messagesData.push({id: 6, message: textBody}) //или body вместо textBody
			return state;

		default:
			return state;
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

export default dialogsReducer