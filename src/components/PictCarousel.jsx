import { Container, Row, Col, Carousel } from "react-bootstrap";

export default function PictCarousel () {

    return (
        <section>
            <Container className="carousel-container">
            <Row>
            <Col className="p-0" >

            <Carousel fade>
            <Carousel.Item>
            <img src="/images/pic1.jpg?random=1"
            className="d-block w-100"
            alt="slide 1" />
            <Carousel.Caption>
            <h2>Family is everything</h2>
            <p>This is my handsome husband and my beautiful princess.</p>
            </Carousel.Caption>
            </Carousel.Item>


            <Carousel.Item>
            <img src="/images/pic2.jpg?random=2"
            className="d-block w-100"
            alt="slide 1" />
            <Carousel.Caption>
            <h2>My Garden</h2>
            <p>I enjoy gardening. It is a great way to relax and forget about the rest of the world.</p>
            </Carousel.Caption>
            </Carousel.Item>


            <Carousel.Item>
            <img src="/images/pic3.jpg?random=3"
            className="d-block w-100"
            alt="slide 1" />
            <Carousel.Caption>
            <h2>Baking</h2>
            <p>Life is better with cake!</p>
            </Carousel.Caption>
            </Carousel.Item>

            </Carousel>
            </Col>
            </Row>
            </Container>
        </section>
    )
}