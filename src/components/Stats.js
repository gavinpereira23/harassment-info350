import {Link} from 'react-router-dom';
import {Container, Col, Row} from 'react-bootstrap';

export function Stats(){
    return(
        <Container>
            <UserStatCard />
        </Container>
    )
}


export function UserStatCard(){
    return(
        <Container className="mx-5">
            <h3>Stats</h3>
            <Row className="mb-3">
                <Col className ='black mx-3'>box 1</Col>
                <Col className ='black mx-3'>box 2</Col>
            </Row>
            <Row className="my-3">
                <Col className ='black mx-3'>box 3</Col>
                <Col className ='black mx-3'>box 4</Col>
            </Row>
        </Container>


    );
}
