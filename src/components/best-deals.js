import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


export default function AppBestdeals() {
    return (
        <section id="bestdeals" className="block-bestdeals">
            <h4>
                Your best deal in no time!
            </h4>
            <Container>
                <Row>
                    <Col lg={3} className='col-6'>
                        <Image src="../icon1.png" />
                        <p>Compare</p>
                        <p>800+ Airlines
                        </p>
                    </Col>
                    <Col lg={3} className='col-6'>
                        <Image src="../icon2.png" />
                        <p>Easy and
                        </p>
                        <p>Fast booking
                        </p>

                    </Col>
                    <Col lg={3} className='col-6'>
                        <Image src="../icon3.png" />
                        <p>English speaking
                        </p>
                        <p>Customer service
                        </p>

                    </Col>
                    <Col lg={3} className='col-6'>
                        <Image src="../icon4.png" />
                        <p>Inter Travels is a
                        </p>
                        <p>Member of IATA
                        </p>
                    </Col>
                </Row>
            </Container>
        </section >
    );
}