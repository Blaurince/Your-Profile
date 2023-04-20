import {Col, Container, Row , } from "react-bootstrap";


export default function About () {
    return (
        <main>
           <Container>
            <Row className="text-center">
                <Col sm={12} md={6} >
                
                <img src="/images/46942.jpg" className="rounded-circle" alt="Profile " />
                
                </Col>
                <Col>
                <h1 className="mt-3">Barbara Laurince</h1>
                <p>My name is Barbara, I am from the beautiful Island of Haiti. I love to sing, to read, and to cook/bake. After being in the medical field, I have decided to switch to the Tech World. My goal after finishing the course is to find work, continue my tech journey, and reach out to my community. </p>
                

                
                </Col>
            </Row>
           </Container>
            
        </main>
    )
}