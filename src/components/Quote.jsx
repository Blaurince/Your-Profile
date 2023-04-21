import { Container, Row ,Col } from "react-bootstrap";

const quotes = [
    {saying: "la raison du plus fort est", author: "La Fontaine"}
    
]

export default function Quote () {

    return (
        <section>
       <Container className="quote-container ">
        <Row className="text-center">
        <Col>
        <h2>Le monde est un livre et ceux qui ne voyagent pas n'en lisent qu'une page.- Saint Augustin d'Hippone</h2>
        </Col>
        </Row>
       </Container>
        </section>
    )
}