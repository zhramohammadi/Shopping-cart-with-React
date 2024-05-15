
import { Button,Col,Row,Container,Form,Image } from "react-bootstrap";
import { useNavigate,Link } from "react-router-dom";

function Register(){
    const navigate = useNavigate()
    function homePage(){
        navigate('/')
    }
    return(
        <Container  className=" mt-5" dir="rtl">
            <Row>
                <Col className="d-flex justify-content-center align-items-center ">
                    <Image src="../public/images/register.svg" width={650}/>
                </Col>
                <Col  className="d-flex justify-content-center align-items-center p-5 ">
                <Form className="col-8">
                    <Form.Group >
                        <Form.Label>نام و نام خانوادگی:</Form.Label>
                        <Form.Control className="opacity" type="text" placeholder="نام و نام خانوادگی خود را وارد کنید"/>
                    </Form.Group >
                    <Form.Group className="mt-3">
                        <Form.Label>شماره تماس:</Form.Label>
                        <Form.Control className="opacity" type="number" placeholder="شماره تماس خود را وارد کنید"/>
                    </Form.Group>
                    <Form.Group className="mt-3">
                        <Form.Label>ایمیل:</Form.Label>
                        <Form.Control className="opacity" type="email" placeholder="ایمیل خود را وارد کنید"/>
                    </Form.Group>
                    <Form.Group className="mt-3">
                        <Form.Label>رمز عبور:</Form.Label>
                        <Form.Control className="opacity" type="password" placeholder="رمز خود را وارد کنید"/>
                    </Form.Group>
                <Button onClick={homePage} type="submit" variant="btn btn-outline-secondary" className="text-white mt-3">ثبت نام
                    <Link to={'/'}></Link>
                </Button>
                </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Register;