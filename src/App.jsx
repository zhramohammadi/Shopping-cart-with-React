
import { Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import {CartProvider} from './context/cartContext'
import Navbar from './components/navbar'
import Shop from './pages/shop'

function App(){
  return(
    <CartProvider>
    <Container>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Shop/>}/>
      </Routes>
    </Container>
    </CartProvider>
  )
}

export default App