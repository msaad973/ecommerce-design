import React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/NavBar';
import ProductList from './Components/ProductList';
import Sidebar from './Components/SideBar';
import Product from './Pages/Product';
import User from './Pages/User';
import NotFound from './Pages/NotFound';
import Blog from './Pages/Blog';



function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ flexGrow: 1 }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/product" element={<Product />} />
            <Route path="/user" element={<User />} />
            <Route path="/*" element={<NotFound />} />
            <Route path='/blog' element={<Blog />} />


          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
