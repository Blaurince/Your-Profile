import {Col, Container, Row , } from "react-bootstrap";


export default function About () {
    return (
        <main>
           <Container>
            <Row className="text-center">
                <Col sm={12} md={6} >
                
                <img src="https://picsum.photos/300/300" className="rounded-circle" alt="Profile" />
                
                </Col>
                <Col>
                <h1 className="mt-3">Your Name</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptatem? Porro aut voluptas at. Consequuntur dicta quod distinctio architecto est, aspernatur voluptatibus pariatur, libero consequatur officiis minima exercitationem aliquid sequi?</p>
                

                
                </Col>
            </Row>
           </Container>
            
        </main>
    )
}