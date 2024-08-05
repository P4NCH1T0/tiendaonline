
import './App.css';
import React from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer'
import SliderComponent from './Components/Carousel';

function App() {
    return (
        <div className="App">
            <Navbar/>
            <SliderComponent/>
            <Footer/>
        </div>
    );
}

export default App;
