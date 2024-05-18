import { useContext } from "react";
import { Button,Form,Col,Row } from "react-bootstrap";
import {getProductData} from '../data/items'
import {CartContext} from '../context/cartContext'

function CartProduct({id, quantity,product}){
    const cart = useContext(CartContext);
    const productData = getProductData(id)
    const productQuantity = cart.getProductQuantity(product);
    return(
        <>
        <p className="border-bottom border-secondary"></p>
        <img src={productData.image} height={'70px'} className="row  m-auto" alt="" />
        <p>نام محصول:{productData.title}</p>
        <p>تعداد:{quantity}</p>
        <p>قیمت:{quantity * productData.price}</p>

        <Form as={Row}>
            <Col className="">
                <Button
                 onClick={()=> cart.addItemToCart(id)}
                  size="sm" className=" text-white"variant="btn btn-outline-secondary">+</Button>
                 <Button
                 onClick={()=> cart.removeItemFromCart(id)}
                 size="sm" className="mx-2 text-white"variant="btn btn-outline-secondary">-</Button>
                 <Button size="sm" className=" mb-1 text-white mt-1" variant="btn btn-outline-danger" onClick={()=>cart.deleteFromCart(id) }>حذف</Button>
            </Col>
        </Form>
        </>
    )
}
export default CartProduct;