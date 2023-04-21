import {Col, Container, Row , } from "react-bootstrap";
import "../App.css"



export default function About () {
    return (
        <main>
           <Container>
            <Row className="text-center">
                <Col sm={12} md={6} >
                
                <img src="/images/46942.jpg" className="profile-pic" alt="Profile " />
                
                </Col>
                <Col>
                <h1 className="mt-3">Barbara Laurince</h1>
                <p className="biography" ><mark> My name is Barbara, I am from the beautiful Island of Haiti. I love to sing, read,cook, bake, and garden. After being in the medical field, I have decided to switch to the Tech World. My goal after finishing the course is to find a job, continue my tech journey, and reach out in my community to empower women to get into tech.</mark> </p>
                <p className="quote-style"> Life is a dream</p>

                
                </Col>
            </Row>
           </Container>
            
        </main>
    )
}