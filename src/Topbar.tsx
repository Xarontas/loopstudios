import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function TopBar() {
    return (
        <>
            <div className='divTop'>
                <Navbar collapseOnSelect expand="lg" className="navbar-dark shadow-5-strong pad">
                    <Container>
                        <Navbar.Brand href="#home"><img src='/public/logo.svg' alt="logo" width={'100%'} height={'30px'} /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">

                            </Nav>
                            <Nav>
                                <Nav.Link href="#About" eventKey={1}>About</Nav.Link>
                                <Nav.Link eventKey={2} href="#Careers">
                                    Careers
                                </Nav.Link>
                                <Nav.Link href="#Events" eventKey={3}>Events</Nav.Link>
                                <Nav.Link eventKey={4} href="Products">
                                    Products
                                </Nav.Link>
                                <Nav.Link href="#Support" eventKey={5}>Support</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Container>
                    <div className='topTitle'>IMMERSIVE EXPERIENCES THAT DELIVER</div>
                </Container>

            </div>
        </>
    )
}