import React from 'react';
import './App.css';
import Dialogs from './components/dialogs/dialogs';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import Profile from './components/profile/profile';
import { BrowserRouter, Route } from 'react-router-dom';


const App = () => {
  return (
	<BrowserRouter>
	<div className="app-wrapper">
		<Header />
		<Navbar />
		<div className="app-wrapper-content">
			<Route path="/profile" component={Profile}/>
			<Route path="/dialogs" component={Dialogs}/>
		</div>
   </div>
	</BrowserRouter>
  )
}

export default App;
