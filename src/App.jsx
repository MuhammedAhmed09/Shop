import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from 'react-router'
import './App.css'
import Header from './assets/header/Header';
import Footer from './assets/footer/Footer';
import Home from './assets/home/Home'


const Layout = () => {
  return(
    <>
    <Header />
    <Outlet />
    <Footer />
    </>  
  )
} 

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>} ></Route>
      </Route>
    </Route>
  ))
  return (
    <RouterProvider router={router} />
  )
}

export default App
