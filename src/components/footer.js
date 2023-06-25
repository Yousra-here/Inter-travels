import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function AppFooter() {
    return (
        <section id="footer">
            <div id='footer1'>
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className='headings'>
                                <h6>Inter Travels is affiliated with.
                                </h6>
                                <div className='images'>
                                    <Image id='img1' src="../aff1.png" />
                                    <Image id='img2' src="../aff2.png" />
                                </div>
                            </div>

                        </Col>
                        <Col lg={6}>
                            <div className='headings'>
                                <h6>Top Airlines.
                                </h6>
                                <div className='images'>
                                    <Image id='img1' src="../top1.png" />
                                    <Image id='img2' src="../top2.png" />
                                    <Image id='img2' src="../top3.png" />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div id='footer2'>
                <Container>
                    <Row>
                        <Col lg={3}>
                            <Image src='logo-white.e37b995.svg' />
                        </Col>
                        <Col lg={3}>
                            <h5>Inter Travels</h5>
                            <Nav.Link href="#aboutus">About Us</Nav.Link>
                            <Nav.Link href="#news">News</Nav.Link>
                            <Nav.Link href="#faqs">FAQ'S</Nav.Link>
                            <Nav.Link href="#contactus">Contact Us</Nav.Link>
                        </Col>
                        <Col lg={3}>
                            <h5>Read More about</h5>
                        </Col>
                        <Col lg={3}>
                            <h5>Contact Us</h5>
                            <Nav.Link href=''>
                                <i class="fa-sharp fa-solid fa-location-dot fa-sm"></i>
                                678 chemin du Lac, Canada</Nav.Link>
                            <Nav.Link href=''>
                                <i class="fa-solid fa-envelope fa-sm"></i>
                                info@intertravels.ca   News</Nav.Link>
                            <Nav.Link href=''>
                                <i class="fa-sharp fa-solid fa-phone fa-sm"></i>
                                Contact Us
                            </Nav.Link>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>



    );
}