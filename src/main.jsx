import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//INSTALANDO AS DEPENDENCIAS PARA CRIAR AS ROTAS
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import Error from './routes/Error.jsx'
import Home from './routes/Home.jsx'
import Aluno from './routes/Aluno.jsx'

{/*CRIANDO A FUNÇAO BROWSER ROUTER */}

const router =createBrowserRouter([
  {
    //CHAMANDO  ELEMENTO PAI
    path:'/',element:<App/>,
    errorElement:<Error/>,

    //CHAMANDO ELEMENTOS FILHOS

    children:[
      {path:'/',element:<Home/>},
      {path:'/aluno', element:<Aluno/>},
    ]

  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
