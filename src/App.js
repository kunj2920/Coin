import './App.css';
import Header from './Component/Header';
import { BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./Component/Home";
import Coin from "./Component/Coin";
import Exchanges from "./Component/Exchanges";
import Contact from "./Component/Contact";
import Footer from './Component/Footer';
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";




function App() {
  return(

    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Coin' element={<Coin/>}></Route>
      <Route path='/Exchanges' element={<Exchanges/>}></Route>
      <Route path='/Contact' element={<Contact/>}></Route>
      
    </Routes>
    <Footer/>
    
    </BrowserRouter>
  )
  
};

export default App;