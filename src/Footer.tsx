import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
export default function Footer() {
    return (
        <>
            <div className="footerWrapper bg-black">
                <Container >
                    <div className="footerDiv">
                        <div className="leftDiv">
                            <div className='footerLogo'><img src='../logo.svg' height={'20px'} width={'120px'} alt='footer logo' /></div>
                            <div className='footerLinks'>
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
                            </div>
                        </div>
                        <div className="rightDiv">
                            <div className='social'>
                                <Nav>
                                    <Nav.Link href="www.facebook.com" target='_blank'><img src="../icon-facebook.svg" alt='facebook' /> </Nav.Link>
                                    <Nav.Link href="www.twitter.com" target='_blank'><img src="../icon-twitter.svg" alt='twitter' /> </Nav.Link>
                                    <Nav.Link href="www.pinterest.com" target='_blank'><img src="../icon-pinterest.svg" alt='pinterest' /> </Nav.Link>
                                    <Nav.Link href="www.instagram.com" target='_blank'><img src="../icon-instagram.svg" alt='instagram' /> </Nav.Link>

                                </Nav>
                            </div>
                            <div className='copyright'>&copy; 2023 developed by Xarontas</div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}
