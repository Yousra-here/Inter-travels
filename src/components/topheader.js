import Container from 'react-bootstrap/Container';



export default function AppTop() {
    return (
        <div>
            <div className='top-nav text-light' >
                <Container>
                    <div className='top-items d-flex justify-content-end text-nowrap'>
                        <div><a href="#"> <span className='tele'> +1-202-555-0179</span> </a></div>
                        <div><a href="#"> <span className='mail'>info@intertravels.ca</span></a></div>
                    </div>
                </Container>
            </div>
        </div>
    );
}