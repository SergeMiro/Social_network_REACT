import React from 'react';
import mcss from './dialogs.module.css'
import ItemMessage from './itemMessage/itemMessage';
import Message from './message/message';
import state from '../../redux/state';

const Dialogs = (props) =>{
	let dialogsElements =
	state.messagesPage.dialogsData.map (el=> <ItemMessage name={el.name} surname={el.surname} id={el.id} />); //перебираем массив данных (обьектов) пришедших с сервака
	/*----------------------------------------------------------------------------*/
	let messagesElements =
	state.messagesPage.messagesData.map(el=> <Message message={el.message}/>);

	return(
		<div className={mcss.container}>
			<div className={mcss.envelopeItem}>
				<span>{dialogsElements}</span> 
			</div>
				
			<div className={mcss.envelopeMessage}>
				<span>{messagesElements}</span> 
			</div>
		</div>
	)
}

export default Dialogs