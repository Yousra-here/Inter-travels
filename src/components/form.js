
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';





export default function AppForm() {
    let [num, setNum] = useState(0);
    let incNum = () => {
        if (num < 10) {
            setNum(Number(num) + 1);
        }
    };
    let decNum = () => {
        if (num > 0) {
            setNum(num - 1);
        }
    }
    let handleChange = (e) => {
        setNum(e.target.value);
    }


    return (
        <section id='form' className='block-form'>
            <div className='form-container'>
                <div className='form-inside' >

                <Tabs
      defaultActiveKey="flights"
      transition={false}
      id="noanim-tab-example"
      className="mb-3 text-center"
    >
      <Tab eventKey="flights" title="Flights" > 
     {/* Form body */}

     <Form id='form1'>
                    
                        {['radio'].map((type) => (
                            <div key={`inline-${type}`} className="mb-3 mt-3 ms-4">
                                
                                <Form.Check
                                    inline
                                    label="Return"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-1`}
                                />
                                <Form.Check
                                    inline
                                    label="On way"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-2`}
                                />
                                <Form.Check
                                    inline
                                    label="Multi city"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-2`}
                                />

                            </div>
                        ))}


                        {/* first row  */}
                        <Row className='px-4 pt-2 g-3' id='row-1st'>
                            <Col lg={5}>
                                <InputGroup >
                                    <InputGroup.Text id="field basic-addon1" > <i class="fa-duotone fa-plane-departure fa-sm"></i> </InputGroup.Text>
                                    <Form.Control id='field' type='text'
                                        placeholder="Where you are flying from?"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>
                            </Col>
                            <Col lg={5}>
                                <InputGroup>
                                    <InputGroup.Text id="basic-addon1"> <i class="fa-duotone fa-plane-departure fa-sm"></i> </InputGroup.Text>
                                    <Form.Control id='field' type='text'
                                        placeholder="Where do you want to go?"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>
                            </Col>
                        </Row>

                        {/* Second Row  */}
                        <Row className='px-4 pb-3 g-3 pt-3' id='row-2nd' >
                            <Col auto={2}>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Control type="date" placeholder="name@example.com" />
                                </Form.Group>
                            </Col>

                            <Col auto={2}>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Control type="date" placeholder="name@example.com" />
                                </Form.Group>
                            </Col>
                            <Col lg={5}>
                                <div id='dropdown-input'>
                                    <Dropdown className='form-control'>
                                        <Dropdown.Toggle id="dropdown-basic">
                                            <div className='d-flex' id='dropdown-menu' >
                                                <i class="fa-solid fa-user fa-sm"></i>
                                                <div className='person'>1
                                                    <i class="fa-sharp fa-solid fa-person"></i>,
                                                </div>
                                                <i class="fa-solid fa-person-seat fa-sm"></i>
                                                <p>Any Class</p>
                                            </div>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <div id='menu'>
                                                <h6>Who is Going ?</h6>
                                                <Row>
                                                    <Col>
                                                        <Form.Select aria-label="Default select example">
                                                            <option>Any</option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </Form.Select>
                                                    </Col>
                                                    <Col>
                                                        <Form.Select aria-label="Default select example">
                                                            <option>Any class</option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </Form.Select>
                                                    </Col>
                                                </Row>
                                                <Row className='pt-3' id='row-2'>
                                                    <Col>
                                                        <h5>
                                                            Adult
                                                        </h5>
                                                        <p>Adult and older than</p>
                                                    </Col>
                                                    <Col>
                                                        <div class="input-group">
                                                            <div class="input-group-prepend">
                                                                <button class="btn btn-outline-one" type="button" onClick={decNum}>-</button>
                                                            </div>
                                                            <input class="form-control text-center" value={num} onChange={handleChange} />
                                                            <div class="input-group-prepend">
                                                                <button class="btn btn-outline-second" type="button" onClick={incNum}>+</button>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                                {/* 3rd row  */}
                                                <Row className='pt-1' id='row-3'>
                                                    <Col>
                                                        <h5>
                                                            Child
                                                        </h5>
                                                        <p>2 until 11 years</p>
                                                    </Col>
                                                    <Col>
                                                        <div class="input-group">
                                                            <div class="input-group-prepend" >
                                                                <button class="btn btn-outline-one" type="button" onClick={decNum}>-</button>
                                                            </div>
                                                            <input class="form-control text-center" value={num} onChange={handleChange} />
                                                            <div class="input-group-prepend">
                                                                <button class="btn btn-outline-second" type="button" onClick={incNum}>+</button>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <Row className='pt-3' id='row-3'>
                                                    <Col>
                                                        <h5>
                                                            Infant
                                                        </h5>
                                                        <p>Younger than 2</p>
                                                    </Col>
                                                    <Col>
                                                        <div class="input-group">
                                                            <div class="input-group-prepend">
                                                                <button class="btn btn-outline-one" type="button" onClick={decNum}>-</button>
                                                            </div>
                                                            <input class="form-control text-center" value={num} onChange={handleChange} />
                                                            <div class="input-group-prepend">
                                                                <button class="btn btn-outline-second" type="button" onClick={incNum}>+</button>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>

                                            </div>

                                        </Dropdown.Menu>

                                    </Dropdown>
                                </div>
                            </Col>
                            <Col lg={2}>
                                <Button id='btn' >Search for flghts <i class="fa-sharp fa-solid fa-chevron-right"></i></Button>
                            </Col>
                        </Row>
                    </Form>
      </Tab>
      <Tab eventKey="hotels" title="Hotels">
       {/* Form body */}
       <Form id='form2' > 
                        {['radio'].map((type) => (
                            <div key={`inline-${type}`} className=" mb-3 mt-3 ms-4" id='form-check' >
                                <Form.Check
                                    inline
                                    label="Return"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-1`}
                                />
                                <Form.Check
                                    inline
                                    label="On way"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-2`}
                                />
                                <Form.Check
                                    inline
                                    label="Multi city"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-2`}
                                />

                            </div>
                        ))}


                        {/* first row  */}
                        <Row className='px-4 pt-2 g-3' id='row-1st'>
                            <Col lg={10}>
                                <InputGroup >
                                    <InputGroup.Text id="basic-addon1" ><i class="fa-sharp fa-solid fa-location-dot fa-sm"></i> </InputGroup.Text>
                                    <Form.Control id='field' type='text'
                                        placeholder="Enter a destination"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>
                            </Col>
                           
                        </Row>

                        {/* Second Row  */}
                        <Row className='px-4 pb-3 g-3 pt-3' id='row-2nd' >
                            <Col auto={2}>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Control type="date" placeholder="name@example.com" />
                                </Form.Group>
                            </Col>

                            <Col auto={2}>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Control type="date" placeholder="name@example.com" />
                                </Form.Group>
                            </Col>
                            <Col lg={5}>
                                <div id='dropdown-input'>
                                    <Dropdown className='form-control'>
                                        <Dropdown.Toggle id="dropdown-basic">
                                            <div className='d-flex' id='dropdown-menu' >
                                    
                                                <div className='person'>
                                                <i class="fa-sharp fa-solid fa-person fa-sm"></i>
                                                    Total Guest: 2
                                                  
                                                </div>
                                                <i class="fa-solid fa-bed fa-sm"></i>
                                                <p>Rooms: 1</p>
                                            </div>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <div id='menu'>
                                                <h6>Who is Going ?</h6>
                                                <Row>
                                                    <Col>
                                                        <Form.Select aria-label="Default select example">
                                                            <option>Any</option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </Form.Select>
                                                    </Col>
                                                    <Col>
                                                        <Form.Select aria-label="Default select example">
                                                            <option>Any class</option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </Form.Select>
                                                    </Col>
                                                </Row>
                                                <Row className='pt-3' id='row-2'>
                                                    <Col>
                                                        <h5>
                                                            Adult
                                                        </h5>
                                                        <p>Adult and older than</p>
                                                    </Col>
                                                    <Col>
                                                        <div class="input-group">
                                                            <div class="input-group-prepend">
                                                                <button class="btn btn-outline-one" type="button" onClick={decNum}>-</button>
                                                            </div>
                                                            <input class="form-control text-center" value={num} onChange={handleChange} />
                                                            <div class="input-group-prepend">
                                                                <button class="btn btn-outline-second" type="button" onClick={incNum}>+</button>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                                {/* 3rd row  */}
                                                <Row className='pt-1' id='row-3'>
                                                    <Col>
                                                        <h5>
                                                            Child
                                                        </h5>
                                                        <p>2 until 11 years</p>
                                                    </Col>
                                                    <Col>
                                                        <div class="input-group">
                                                            <div class="input-group-prepend" >
                                                                <button class="btn btn-outline-one" type="button" onClick={decNum}>-</button>
                                                            </div>
                                                            <input class="form-control text-center" value={num} onChange={handleChange} />
                                                            <div class="input-group-prepend">
                                                                <button class="btn btn-outline-second" type="button" onClick={incNum}>+</button>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <Row className='pt-3' id='row-3'>
                                                    <Col>
                                                        <h5>
                                                            Infant
                                                        </h5>
                                                        <p>Younger than 2</p>
                                                    </Col>
                                                    <Col>
                                                        <div class="input-group">
                                                            <div class="input-group-prepend">
                                                                <button class="btn btn-outline-one" type="button" onClick={decNum}>-</button>
                                                            </div>
                                                            <input class="form-control text-center" value={num} onChange={handleChange} />
                                                            <div class="input-group-prepend">
                                                                <button class="btn btn-outline-second" type="button" onClick={incNum}>+</button>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>

                                            </div>

                                        </Dropdown.Menu>

                                    </Dropdown>
                                </div>
                            </Col>
                            <Col lg={2}>
                                <Button id='btn' >Search for Hotels <i class="fa-sharp fa-solid fa-chevron-right"></i></Button>
                            </Col>
                        </Row>
                    </Form>
      </Tab>
      <Tab eventKey="cars" title="Cars">
       {/* Form body */}
       <Form id='form3' > 
                        {['radio'].map((type) => (
                            <div key={`inline-${type}`} className=" mb-3 mt-3 ms-4" id='form-check' >
                                <Form.Check
                                    inline
                                    label="One way"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-1`}
                                />
                                <Form.Check
                                    inline
                                    label="Return"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-2`}
                                />
                            
                            </div>
                        ))}


                        {/* first row  */}
                        <Row className='px-4 pt-2 g-3' id='row-1st'>
                            <Col lg={10}>
                                <InputGroup >
                                    <InputGroup.Text id="basic-addon1" ><i class="fa-solid fa-car fa-sm"></i> </InputGroup.Text>
                                    <Form.Control id='field' type='text'
                                        placeholder="Type your destination"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>
                            </Col>
                           
                        </Row>

                        {/* Second Row  */}
                        <Row className='px-4 pb-3 g-3 pt-3' id='row-2nd' >
                            <Col lg={10}>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Control type="date" placeholder="name@example.com" />
                                </Form.Group>
                            </Col>

                          
                            <Col lg={2}>
                                <Button id='btn' >Search for Cars <i class="fa-sharp fa-solid fa-chevron-right"></i></Button>
                            </Col>
                        </Row>
                    </Form>
      </Tab>
    </Tabs>


                    
                </div>
            </div >

            {/* CHEAP FLIGHTS  */}
            <div div className='cheap-flights' >
                <h2>Cheap Flights</h2>
                <div className='home-flights'>
                    <p className='home' id='home' >Home</p>
                    <span><i class="fa-sharp fa-solid fa-chevrons-right"></i></span>
                    <p id='flights'>Flights</p>
                </div>
            </div > 
        </section >
    );


}

