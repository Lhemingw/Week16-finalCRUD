
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Copyright from './Copyright'

// Had to do a footer, come one you would have to admit it was funny, Chris loved thought it was funny.  I am bit more of a coder- or nerd-jockish than I though
//I put a container which is in import, did col and row to add the sitepage, but just did not want to deal with it.
//technacly I could delete the col and row and put a paragraph what is the fun in doing something easy.
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