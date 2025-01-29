import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from 'react-router'
import './App.css'
import Header from './assets/header/Header';
import Footer from './assets/footer/Footer';
import Cart from './assets/cart/Cart';
import Home from './assets/home/Home'
import { productData } from './api/Api';



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
        <Route index element={<Home/>} loader={productData}></Route>
        <Route path='/cart' element={<Cart />} ></Route>
      </Route>
    </Route>
  ))
  return (
    <RouterProvider router={router} />
  )
}

export default App
