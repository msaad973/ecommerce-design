import React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/NavBar';
import ProductList from './Components/ProductList';
import Sidebar from './Components/SideBar';


function App() {
  return (
      <Router>
        <div style={{ display: 'flex' }}>
          <Sidebar />
          <div style={{ flexGrow: 1 }}>
            <Navbar />
            <Routes>
              <Route path="/" element={<ProductList />} />
            </Routes>
          </div>
        </div>
      </Router>
  );
}

export default App;
