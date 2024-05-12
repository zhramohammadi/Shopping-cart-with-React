
import { Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import {CartProvider} from './context/cartContext'
import Navbar from './components/navbar'
import Shop from './pages/shop'
import Success from './pages/Success'
function App(){
  return(
    <CartProvider>
    <Container>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/success' element={<Success/>}/>
      
      </Routes>
    </Container>
    </CartProvider>
  )
}

export default App