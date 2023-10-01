import React from 'react'
import { Routes,Route } from 'react-router'
import Home from './Components/Home'
import About from './Components/About'
import Navbar from './Navbar'
import Ordersummary from './Components/Ordersummary'
import Nomatch from './Components/Nomatch'
import Product from './Components/Product'
import Featuredproduct from './Components/Featuredproduct'
import Newproduct from './Components/Newproduct'
import User from './Components/User'
import Admin from './Admin'
import UserDetail from './Components/UserDetail'
import Profilepage from './Components/Profilepage'
import Crud from './Components/Crud'
import Pgination from './Components/src/Pgination'




const App = () => {
  return (
    <> 
  <Navbar/>
   <Routes>
      <Route  path='/'  element={<Home/>}/> 
      <Route  path='about'  element={<About/>}/>
      <Route  path='order-summary'  element={<Ordersummary/>}></Route>
      <Route  path='product'  element={<Product/>}>
          <Route index element={<Featuredproduct/>}/>
          <Route path='featured'   element={<Featuredproduct/>}/>  
          <Route  path='new'  element={<Newproduct/>} />
      </Route>
      <Route path='users'  element={<User/> }>
            <Route path='admin'  element={<Admin/> }/>
           <Route path=':userId'  element={<UserDetail/> }/>
      </Route>
       <Route  path='Profile'  element={<Profilepage/>}/>
      <Route  path='*'  element={<Nomatch/>}/>
      <Route  path='crud'  element={<Crud/>}/>
      <Route  path='pagination'  element={<Pgination/>}/>
   </Routes>
   </>
  )
}

export default App
