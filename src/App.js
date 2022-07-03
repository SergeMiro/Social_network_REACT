import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dialogs from './components/dialogs/dialogs';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import Profile from './components/profile/profile';


const App = () => {
  return (
	<div className="app-wrapper">
		<Header userName='Serge' userSurname='Miro' />
		<Navbar />
		<div className='app-wrapper-content'>
			<Routes>
				<Route path='/profile' element={<Profile />} />
				<Route path='/dialogs' element={<Dialogs />} />
			</Routes>
		</div>
   </div>
  )
}
export default App;






