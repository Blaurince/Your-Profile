import { Container, Row , Col} from "react-bootstrap";

export default function Footer ()  {

    const currentYear = new Date().getFullYear();
    const gitHubUrl = "https://github.com/blaurince/your-profile"

    return (
        <footer>
            <Container>
                <Row>
                    <Col className="text-center">
                    <p>&Copy; {currentYear} Barbara Laurince
                    <br />
                        <a href={gitHubUrl} 
                    target="_blank"
                    rel="noreferrer">Code in Github</a></p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

