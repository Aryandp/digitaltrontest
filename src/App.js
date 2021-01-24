import Header  from "./components/Header";
import './App.css';
import Footer from "./components/Footer";
import Main from "./components/Main";
import { useEffect } from "react";
import slotsData from './data/slots.json'

function App() {
  useEffect(()=>{
    if(localStorage.getItem('slotsData')===null){
       localStorage.setItem('slotsData',JSON.stringify(slotsData))
    }
   },[localStorage.getItem('slotsData')!==null?0:localStorage.getItem('slotsData')])
  return (
    <div className="App">
     <Header />
     <Main />
     <Footer/>
    </div>
  );
}

export default App;
