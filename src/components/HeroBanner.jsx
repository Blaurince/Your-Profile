import { Container, Row, Col } from "react-bootstrap"

export default function HeroBanner (){
     return (
        <section>
        <Container fluid className="bg-danger">
            <Row>
                <Col className="text-center"></Col>
                Email: NephysKloset@gmail.com
            </Row>
        </Container>
        </section>
     )
}