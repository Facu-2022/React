
import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import './App.css';
import { Pika } from "./components/Pika/Pika";
import { ItemContador } from "./components/contador/ItemContador";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";

import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route,
} from "react-router-dom"



function App() {
  return (
    // <>
    // <div>
    //   <NavBar/>
    //   <ItemListContainer greeting="soy el greeting"/>
    //   <Pika/>
      
      

    // </div>
    // </>
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
         <Route path='/' element={<ItemListContainer/>}/>
         <Route path='/Pika' element={<Pika/>}/>
         <Route path='/contador' element={<ItemContador/>}/>
         <Route path='*' element={<Navigate to='/'/>}/>
         <Route path='carreras/:categoryId' element={<ItemListContainer/>}/>
         <Route path='detail/:itemId' element={<ItemDetailContainer/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;