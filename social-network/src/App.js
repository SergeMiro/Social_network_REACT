import './App.css';
import Dialogs from './components/dialogs/dialogs';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import Profile from './components/profile/profile';


const App = () => {
  return (
    <div className="App">
		<Header />
		<Navbar />
	
		<Profile/>
		{/* <Dialogs /> */}
    </div>
  );
}

export default App;
