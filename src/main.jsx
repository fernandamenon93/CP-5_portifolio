import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import App from './App'
import PageNotFound from './pages/PageNotFound'
import Projetos from './pages/Projetos'
import Contato from './pages/Contato'
import ConteudoPrincipal from './Componentes/ConteudoPrincipal'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {index:true, element: <ConteudoPrincipal/>},
      {path:'projetos', element: <Projetos/>},
      {path:'contato', element: <Contato/>},
      {path:'*', element: <PageNotFound/>}
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)