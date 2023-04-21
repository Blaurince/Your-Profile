import { Container, Row} from "react-bootstrap";

export default function Video () {

    return (

        <section>
        <Container className="video-container">
            <Row>
        <h2>Video</h2>
        <p>I love watching cooking videos.</p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/YMXHopvMSUo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Row>
        </Container>
        </section>
    )
}