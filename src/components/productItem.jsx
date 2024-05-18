//فضایی درست میکنیم تا بتونیم داده های محصول را  درش قرار بدیم 

import { useContext } from "react";
import { Card, Button, Form, Row, Col } from "react-bootstrap"


import {CartContext} from '../context/cartContext'

function ProductItem({product}){
    const cart = useContext(CartContext);

  const productQuantity = cart.getProductQuantity(product.id);

    return (
        <Card className="mt-5 card-bg">
            <Card.Body>
                <Card.Img
                 variant="top"
                 src={product.image}
                 height='200px'
                 style={{objectFit: 'cover'}}
                />
                <Card.Title align='right' className="text-light pt-4">{product.title}</Card.Title>
                <Card.Text align='right' className="text-light" dir="rtl">{product.price} تومان</Card.Text>
                {productQuantity >0? (
                    <>
                        <Button
                            onClick={()=> cart.deleteFromCart(product.id)}
                             className=""variant="btn btn-outline-danger">حذف از سبد خرید </Button>
                    </>
                ): (
                    <Button onClick={()=> cart.addItemToCart(product.id)} variant="btn btn-outline-secondary" className="text-white">افزودن به سبد خرید</Button>
                )}
            </Card.Body>
        </Card>
    )
}

export default ProductItem;
