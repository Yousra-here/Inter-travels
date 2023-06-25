import React, { useEffect } from 'react'
import { Link, Carousel, Button, InputGroup, Accordion, FormControl, Row, Col, ProgressBar, Form, Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { ImFacebook, ImInstagram, ImCross, ImCheckmark, ImTwitter, ImLinkedin2, ImPlay3, ImCreditCard, ImPaypal, ImCoinDollar, ImCoinPound } from "react-icons/im";
import AOS from 'aos';
import 'aos/dist/aos.css';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const options = {
    margin: 30,
    responsiveClass: true,
    nav: false,
    dots: false,
    autoplay: false,
    navText: ["Prev", "Next"],
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 2,
        },
        400: {
            items: 2,
        },
        600: {
            items: 2,
        },
        700: {
            items: 3,
        },
        1000: {
            items: 5,

        }
    },
};


AOS.init();
export default function About() {

    return (
        <div>

            {/* <OwlCarousel items={5} margin={20} center={true} loop={true} autoplay={true} owl-dot={true} {...options}>

                <div className='owl-row'>
                    00
                </div>

                <div className='owl-row'>
                    00
                </div>

                <div className='owl-row'>
                    00
                </div>

                <div className='owl-row'>
                    00
                </div>

            </OwlCarousel> */}
        </div>
    );
}