import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
export default function Section1() {
    return (
        <>
            <Container>
                <div className='section1Div'>
                    <Row>

                        <Col lg={7}>
                            <div className='section1Photo'> </div>
                        </Col>
                        <Col lg={5}>
                            <div className='section1TxtDiv'>
                                <div className='section1Title'>The leader in interactive VR</div>
                                <div className='section1Txt'>Founded in 2011, Loopstudios has been producing world-class virtual reality projects foe some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand. </div>
                            </div>
                        </Col>

                    </Row>
                </div>
            </Container >

        </>
    )
}