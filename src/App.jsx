import React from 'react'
import Home from './pages/home/Home'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import NoPage from './pages/noPage/NoPage';
import ProductInfo from './pages/productInfo/ProductInfo';
import ScrollTop from './component/scrollTop/ScrollTop';
import CartPage from './pages/cart/CartPage';
import AllProduct from './pages/allProducts/AllProducts';
import Signup from './pages/registration/Signup';
import Login from './pages/registration/Login';
import UserDashboard from './pages/user/UserDashboard.jsx';
import AdminDashboard from './pages/admin/AdminDashboard.jsx';
import AddProductPage from './pages/admin/AddProductPage.jsx';
import UpdateProductPage from './pages/admin/UpdateProductPage.jsx';
import MyState from './context/myState.jsx';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/*' element={<NoPage/>} />
          <Route path="/productinfo" element={<ProductInfo />} />
          <Route path='/srolltop' element={<ScrollTop/>}/>
          <Route path="/cart" element={<CartPage />} />
          <Route path='/allproduct' element={<AllProduct/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path='/addproduct' element={<AddProductPage/>}/>
          <Route path='/updateproduct' element={<UpdateProductPage/>}/>
        </Routes>
        <Toaster/>
      </Router>
    </MyState>
  )
}

export default App
