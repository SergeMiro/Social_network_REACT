import './App.css';
import Content from './components/content/content';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';


const App = () => {
  return (
    <div className="App">
		<Header />
		<Navbar />
		<Content/>
		<Footer/>
    </div>
  );
}

export default App;
