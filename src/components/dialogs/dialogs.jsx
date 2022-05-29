import React from 'react';
import mcss from './dialogs.module.css'
import ItemMessage from './itemMessage/itemMessage';
import Message from './message/message';


const Dialogs = (props) =>{

	let dialogsData = [
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
	]
	let dialogsElements =
	dialogsData.map (el=> <ItemMessage name={el.name} surname={el.surname} />);
	/*----------------------------------------------------------------------------*/

	let messagesData = [
		{id: 1, message: 'Hi man, how r u? What do u think about this project?'},
		{id: 2, message: 'Abrakadabra work for this network.'},
		{id: 3, message: 'Blalblabla gavno-kod in this Bananas Network.'}
	]
	let messagesElements =
	messagesData.map(el=> <Message message={el.message}/>);

	return(
		<div className={mcss.container}>
			<div className={mcss.envelopeItem}>
				{dialogsElements}
			</div>

			<div className={mcss.envelopeMessage}>
				{messagesElements}
			</div>
		</div>
	)
}

export default Dialogs