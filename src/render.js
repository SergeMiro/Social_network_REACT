import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/state'
// import {dialogsData} from './redux/state'
// import {messagesData} from './redux/state'
// import {addNewPost} from './redux/state'
// import {newPostText} from './redux/state'
// import {updateNewPostText} from './redux/state'

export let renderAllTree = () =>{
	const root = ReactDOM.createRoot(document.getElementById('root'));
	root.render(
		  <BrowserRouter>
				<App store={store}
					  state={store.getState()}
					  dispatch={store.dispatch.bind(store)} />
		  </BrowserRouter>
	);
}
renderAllTree()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();