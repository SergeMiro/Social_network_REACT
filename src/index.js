import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/reduxStore'

let renderAllTree = (state) =>{
	const root = ReactDOM.createRoot(document.getElementById('root'));
	root.render(
		  <BrowserRouter>
				<App store={store}
					  state={state}
					  dispatch={store.dispatch.bind(store)} />
		  </BrowserRouter>
	);
}
renderAllTree(store.getState())

store.subscribe( () =>{
	let state = store.getState()
	renderAllTree(state)
})


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();