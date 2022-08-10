import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dialogs from './components/dialogs/dialogs';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import Profile from './components/profile/profile';


const App = (props) => {
  return (
	<div className="app-wrapper">
		<Header userName='Serge' userSurname='Miro' />
		<Navbar />
		<div className='app-wrapper-content'>
			<Routes>
				<Route path='/profile' element={<Profile profilePage={props.state.profilePage} 
																	  dispatch={props.dispatch} />} />
				<Route path='/dialogs' element={<Dialogs store={props.store} />} />
			</Routes>
		</div>
   </div>
  )
}
export default App;


