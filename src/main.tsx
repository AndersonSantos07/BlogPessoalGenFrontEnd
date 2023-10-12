import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Home from './routes/Home/Home.tsx'
import Login from './routes/Login/Login.tsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './routes/layout.tsx'
import { AuthProvider } from './contexts/AuthContext.tsx'
import Cadastro from './routes/Cadastro/Cadastro.tsx'
import ListaTemas from './components/temas/ListaTemas/ListaTemas.tsx'
import FormularioTema from './components/temas/FormularioTema/FormularioTema.tsx'
import DeletarTema from './components/temas/DeletarTema/DeletarTema.tsx'
import ListaPostagens from './components/Postagens/ListaPostagens/ListaPostagens.tsx'
import FormularioPostagem from './components/Postagens/FormularioPostagem/FormularioPostagem.tsx'
import DeletarPostagem from './components/Postagens/DeletarPostagem/DeletarPostagem.tsx'
import Perfil from './routes/Perfil/Perfil.tsx'
import { ToastContainer } from 'react-toastify'

const router = createBrowserRouter([
  {
    path: "/",
    element:
      <AuthProvider>
        <ToastContainer />
          <Layout>
            <App />
          </Layout>
      </AuthProvider>
    ,

    children: [
      { path: "/", element: <Login /> },
      { path: "/home", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/cadastro", element: <Cadastro /> },
      { path: "/temas", element: <ListaTemas /> },
      { path: "/cadastroTema", element: <FormularioTema /> },
      { path: "/editarTema/:id", element: <FormularioTema /> },
      { path: "/deletarTema/:id", element: <DeletarTema /> },
      { path: "/postagens", element: <ListaPostagens /> },
      { path: "/cadastroPostagem", element: <FormularioPostagem /> },
      { path: "/editarPostagem/:id", element: <FormularioPostagem /> },
      { path: "/deletarPostagem/:id", element: <DeletarPostagem /> },
      { path: "/perfil", element: <Perfil /> }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
