import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';


export default function AppHeader() {

  return (
    <div >

      <Navbar expand="lg">
        <div className='top-nav text-light' >
          <Container>
            <div className='top-items d-flex justify-content-end text-nowrap'>
              <div><a href="#"> <span className='tele'> +1-202-555-0179</span> </a></div>
              <div><a href="#"> <span className='mail'>info@intertravels.ca</span></a></div>
            </div>
          </Container>
        </div>
        <Container>

          <Navbar.Brand variant="main" href="#home"> <Image src="https://api.intertravels.ca/assets/uploads/L0BLoMcVS13ggnat06L3YbSkl6AaztGnOHWeeXI8.svg" /> </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className='active'>Home</Nav.Link>
              <Nav.Link href="#About">About</Nav.Link>
              <Nav.Link href="#whyus" className='text-nowrap'>Why Us</Nav.Link>
              <Nav.Link href="#packages">Packages</Nav.Link>
              <Nav.Link href="#faqs">FAQs</Nav.Link>
              <Nav.Link href="#contactus">Contact US</Nav.Link>
              <Nav.Link href="intertravels">Inter Travels</Nav.Link>
              <Nav.Link href="#myaccount"> <a><i class="fa-regular fa-square-user fa-lg"></i></a> My Account</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}