import { Container, Row, Col } from "react-bootstrap";
export default function Grid () {

    return (
        <section>
        <Container className=" grid-container">
            <Row >
             <Col sm={12} md={4}>
             <h2>Why BocaCode?</h2>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, voluptas porro velit eius eaque assumenda provident rem vel sit, perspiciatis voluptatum veniam nulla quaerat ducimus soluta. Quisquam incidunt iste pariatur?</p>
             </Col>

             <Col sm={12} md={4}>
             <h2>Exciting Project?</h2>
             <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur veritatis voluptas, exercitationem rem eos nisi incidunt aliquam repellat reprehenderit, iste similique tempore non veniam natus ipsum distinctio minus qui magni.</p>
             </Col>

             <Col >
             <h2>Ideal Work Place?</h2>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nulla facere nihil enim vitae cupiditate mollitia labore dolore, iure explicabo aliquam ducimus aut itaque tempora! Quia mollitia facere blanditiis voluptas!</p>
             </Col>
            </Row>
        </Container>
        </section>
    )
}