import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Login from './routes/Login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ToastContainer } from 'react-toastify';
import Cadastro from './routes/Cadastro/Cadastro';
import Navbar from './components/NavBar/NavBar';
import Home from './routes/Home/Home';
import Footer from './components/Footer/Footer';
import ListaTemas from './components/temas/ListaTemas/ListaTemas';
import FormularioTema from './components/temas/FormularioTema/FormularioTema'
import DeletarTema from './components/temas/DeletarTema/DeletarTema';
import ListaPostagens from './components/Postagens/ListaPostagens/ListaPostagens';
import FormularioPostagem from './components/Postagens/FormularioPostagem/FormularioPostagem';

import Perfil from './routes/Perfil/Perfil';
import DeletarPostagem from './components/Postagens/DeletarPostagem/DeletarPostagem';

function App() {
  
  return (
    <>
      <AuthProvider>
      <ToastContainer />
        <BrowserRouter>
        <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/home" element={<Home />} />
              <Route path="/temas" element={<ListaTemas />} />
              <Route path="/cadastroTema" element={<FormularioTema />} />
              <Route path="/editarTema/:id" element={<FormularioTema />} />
              <Route path="/deletarTema/:id" element={<DeletarTema />} />
              <Route path="/postagens" element={<ListaPostagens />} />
              <Route path="/cadastroPostagem" element={<FormularioPostagem />} />
              <Route path="/editarPostagem/:id" element={<FormularioPostagem />} />
              <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
              <Route path="/perfil" element={<Perfil />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;