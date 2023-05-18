import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import './App.css';
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { Cart } from "./components/Cart/Cart";
import { Checkout } from "./components/Checkout/Checkout";

import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route,
} from "react-router-dom"

import { CartProvider } from "./components/context/CartContext";


function App() {

 


  return (
    <CartProvider>
      <div className="App">
        <Router>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='Cart' element={<Cart/>} />
            <Route path='Checkout' element={<Checkout/>} />
            <Route path='carreras/:categoryId' element={<ItemListContainer />} />
            <Route path='detail/:itemId' element={<ItemDetailContainer />} />
          </Routes>
        </Router>
      </div>
    </CartProvider>
  );
}

export default App;