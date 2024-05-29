import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddAddress from './pages/AddAddress';
import EditAddress from './pages/EditAddress';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <div className="nav-buttons">
            <Link to="/">
              <button>Home</button>
            </Link>
            <Link to="/add">
              <button>Adicionar Endereço</button>
            </Link>
            <Link to="/edit/1">
              <button>Editar Endereço</button>
            </Link>
          </div>
        </nav>
        <Routes>
          <Route path="/add" element={<AddAddress />} />
          <Route path="/edit/:id" element={<EditAddress />} />
          <Route path="/" element={<h1>Bem-vindo ao Sistema de Delivery Interplanetário!</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
