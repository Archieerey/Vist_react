import { Container, Row, Col, Card } from "react-bootstrap";

const Home =() => {
    return(
        <Container>
            <h1 className="m-4">Главная</h1>
            <Row className="gap-2">
                <Col md={6}>
                    <Card>
                        <Card.Header>Заголовок</Card.Header>
                        <Card.Body>
                            <Card.Title>Описание</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Header>Заголовок</Card.Header>
                        <Card.Body>
                            <Card.Title>Описание</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Header>Заголовок</Card.Header>
                        <Card.Body>
                            <Card.Title>Описание</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Header>Заголовок</Card.Header>
                        <Card.Body>
                            <Card.Title>Описание</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
export default Home;