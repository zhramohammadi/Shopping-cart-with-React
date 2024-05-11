import { useContext } from "react";
import { Button } from "react-bootstrap";
import {getProductData} from '../data/items'
import {CartContext} from '../context/cartContext'

function CartProduct({id, quantity}){
    const cart = useContext(CartContext);
    const productData = getProductData(id)

    return(
        <>
        <p className="border-bottom border-secondary"></p>
        <img src={productData.image} height={'70px'} className="row float-left m-auto" alt="" />
        <p>نام محصول:{productData.title}</p>
        <p>تعداد:{quantity}</p>
        <p>قیمت:{quantity * productData.price}</p>
        <Button size="sm" className=" mb-5 text-white" variant="btn btn-outline-danger" onClick={()=>cart.deleteFromCart(id) }>حذف</Button>
        </>
    )
}
export default CartProduct;