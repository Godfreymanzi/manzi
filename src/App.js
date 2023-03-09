import { Component } from 'react';
import './App.css';
import Footer from './components/footer';
import Main from './components/main';
import NavBar from './components/nav';
import Login from './components/login';
import Store from './components/store';
import {Routes,Route} from "react-router-dom"
class App extends Component {
  render(){
  return (
   <>
  <NavBar className='break-after-auto'/>
<Routes>
<Route axact path="/" element={<Main/>}></Route>
<Route  exact path="/login" element={<Login/>}></Route>

<Route exact path="/store" element={<Store/>}></Route>

  </Routes>
  <Footer/>


   
   </>
  );
}
}

export default App;
