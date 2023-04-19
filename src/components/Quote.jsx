import { Container, Row ,Col } from "react-bootstrap";

export default function Quote () {

    return (
        <section>
       <Container className="quote-container ">
        <Row className="text-center">
        <Col>
         <p><q>You have power over your mind- not outside events.</q>- Marcue Aurelius</p>
        </Col>
        </Row>
       </Container>
        </section>
    )
}