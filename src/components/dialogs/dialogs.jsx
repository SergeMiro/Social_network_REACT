import React from 'react';
import mcss from './dialogs.module.css'
import ItemMessage from './itemMessage/itemMessage';
import Message from './message/message';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/state';

const Dialogs = (props) =>{
	let state = props.store.getState()

	let dialogsElements =
	state.dialogsPage.dialogsData.map (el=> <ItemMessage name={el.name} surname={el.surname} id={el.id} />); //перебираем массив данных (обьектов) пришедших с сервака
	
	let messagesElements =
	state.dialogsPage.messagesData.map(el=> <Message message={el.message}/>);

	let newMessageBody = state.newMessageBody
	/*----------------------------------------------------------------------------*/

	let onNewMessageChange = (event) =>{
		let text = event.target.value //body заменить на text ?
		props.store.dispatch(updateNewMessageBodyCreator(text))
	}
	let onSendMessageClick = () =>{
		props.store.dispatch(sendMessageCreator())
	}


	return(
		<div>
			<div className={mcss.container}>
				<div className={mcss.envelopeItem}>
					<span>{dialogsElements}</span> 
				</div>
				<div className={mcss.envelopeMessage}>
					<span>{messagesElements}</span> 
				</div>
			</div>

			<div className={mcss.inputMessage}>
				<div>
					<textarea placeholder='Enter your message' 
								 value={newMessageBody} 
								 onChange={onNewMessageChange} />
				</div>
				<div>
					<button onClick={onSendMessageClick}>Send</button>
				</div>
			</div>
		</div>
	)
}

export default Dialogs