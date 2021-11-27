import logo from './logo.svg';
import './App.css';
import { Productos } from './componentes/Productos';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProductList } from './componentes/ProductList';
import { Comentarios } from './componentes/Comentarios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Productos />} />
        <Route path="/producto/lista" element={<ProductList />} />
        <Route path="/comments" element={<Comentarios />} />
        <Route path="/prueba" element={<Comentarios />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
