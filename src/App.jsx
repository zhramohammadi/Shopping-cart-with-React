
import { Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import {CartProvider} from './context/cartContext'
import Navbar from './components/navbar'
import Shop from './pages/shop'
import Success from './pages/Success'
import Login from './pages/login'
import Register from './pages/register'
import handleHomePage from './components/navbar'

function App(){
  return(
    <CartProvider>
    <Container>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/success' element={<Success/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/' element={<handleHomePage/>}/>
      
      </Routes>
    </Container>
    </CartProvider>
  )
}

export default App