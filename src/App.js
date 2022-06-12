import './App.css';
import Navbar from './Components/Navbar';
import Main from './Components/Main';
import Analytics from './Components/Analytics';
import Form from './Components/Form';
import Cards from './Components/Cards';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
     <Navbar/> 
     <Main/>
     <Analytics/>
     <Form/>
     <Cards/>
     <Footer/>
    </div>
  );
}

export default App;
