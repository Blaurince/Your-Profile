import { Container, Row} from "react-bootstrap";

export default function Video () {

    return (

        <section>
        <Container className="video-container">
            <Row>
        <h2>Video</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In quisquam incidunt cumque blanditiis, adipisci magnam, iusto aliquid sint labore quidem similique dicta dolor voluptatem quaerat! Officiis dolorem repudiandae fugit obcaecati!</p>
        <iframe width="100" height="315" src="https://www.youtube.com/embed/YMXHopvMSUo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Row>
        </Container>
        </section>
    )
}