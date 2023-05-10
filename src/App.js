import './App.css';
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { CartProvider } from './context/CartContext';
import CartView from './components/CartView/CartView';
import Checkout from './components/Checkout/Checkout';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path={'/'} element={<ItemListContainer greeting={'Bienvenidos a WichBurger'}/>}/>
            <Route path={'/category/:categoryId'} element={<ItemListContainer greeting={'Productos Filtrados'}/>}/>
            <Route path={'/item/:productId'} element={<ItemDetailContainer />}/>
            <Route path={'/cart'} element={<CartView />} />
            <Route path={'/checkout'} element={<Checkout />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
