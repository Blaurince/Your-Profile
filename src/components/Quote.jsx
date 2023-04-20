import { Container, Row ,Col } from "react-bootstrap";

export default function Quote () {

    return (
        <section>
       <Container className="quote-container ">
        <Row className="text-center">
        <Col>
         <p><q>Le monde est un livre et ceux qui ne voyagent pas n'en lisent qu'une page.</q>- Saint Augustin d'Hippone</p>
        </Col>
        </Row>
       </Container>
        </section>
    )
}