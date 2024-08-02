import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar';
import { Footer } from './Components/Footer';
import { Panel } from './Components/Panel';

function App() {
  return (
    <div className="App">
      
        <Navbar></Navbar>
        <Panel></Panel>
        <Footer></Footer>
    
    </div>
  );
}

export default App;
