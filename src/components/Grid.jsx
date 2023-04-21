import { Container, Row, Col } from "react-bootstrap";
export default function Grid () {

    return (
        <section>
        <Container className=" grid-container">
            <Row >
             <Col sm={12} md={4}>
             <h2 className="text-center">Why BocaCode?</h2>
             <p className="quote-style">Even though it is possible to learn programming independently, it is ideal to to go to a school where you can find experienced professionals, that will teach and guide you. I chose Boca code because they prepare you to face the tech world. They give you all the tools and skills you need to work in any fields or industries that use software and it is the only place where you can becaome a Software engineer in such little amount of time.</p>
             </Col>

             <Col sm={12} md={4}>
             <h2 className="text-center">Exciting Project?</h2>
             <p className="quote-style">I would like to build a website for my church. this is my main goal after finishing the program. It will be great to show my skills. </p>
             </Col>

             <Col >
             <h2 className="text-center">Ideal Work Place?</h2>
             <p className="quote-style">My ideal work place should have be a Positive work environment: An ideal workplace should be supportive, and inclusive, where employees feel respected and valued. The company should prioritize creating a healthy work culture that fosters teamwork, open communication, and mutual respect.</p>
            
 
             </Col>
            </Row>
        </Container>
        </section>
    )
}