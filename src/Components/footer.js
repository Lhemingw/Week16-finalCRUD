
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Copyright from './Copyright'



const Footer = () => {
    return(
        <footer>
            <Container id="footer">
                <Row>
                    <Col className="col menu" xs="6" md="12">
                   
                    <Copyright/>
                    </Col>
                </Row>
            </Container>
        </footer> 
    );
};

export default Footer;