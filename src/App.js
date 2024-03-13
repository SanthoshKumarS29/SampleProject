
import { BrowserRouter, Route ,Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import ViewCart from './components/ViewCart';
import { useState,createContext } from 'react';
import Footer from './components/Footer';


export const carcontext = createContext();
function App() {
  const [cart,setCart] =useState([])
  return (
    <div className="App">
      <carcontext.Provider value={{cart,setCart}}>
      <BrowserRouter>
        <Header cart={cart}/>
        <div className='Container'></div>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Cart' element={<ViewCart/>}></Route>
        </Routes>
      </BrowserRouter>
      </carcontext.Provider>
      <Footer />
      
    </div>
  );
}

export default App;
