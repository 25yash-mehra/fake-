import { Box } from '@mui/material';
import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Home() {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const navData = [
        { url: 'https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100', text: 'Top Offers' },
        { url: 'https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100', text: 'Grocery' },
        { url: 'https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100', text: 'Mobile' },
        { url: 'https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100', text: 'Fashion' },
        { url: 'https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100', text: 'Electronics' },
        { url: 'https://rukminim1.flixcart.com/flap/128/128/image/ee162bad964c46ae.png?q=100', text: 'Home' },
        { url: 'https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100', text: 'Appliances' },
        { url: 'https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100', text: 'Travel' },
        { url: 'https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100', text: 'Beauty, Toys & More' }
    ];

    const bannerData = [
        { id: 1, url: 'https://rukminim1.flixcart.com/flap/3376/560/image/d117a62eb5fbb8e1.jpg?q=50' },
        { id: 2, url: 'https://rukminim1.flixcart.com/flap/3376/560/image/57267a180af306fe.jpg?q=50' },
        { id: 3, url: 'https://rukminim1.flixcart.com/flap/3376/560/image/ae9966569097a8b7.jpg?q=50' },
        { id: 4, url: 'https://rukminim1.flixcart.com/flap/3376/560/image/f6202f13b6f89b03.jpg?q=50' }
    ];

    return (
        <>
            <div style={{ marginTop: "90px" }}>
                <Box display={'flex'} justifyContent={'space-around'}>
                    {
                        navData.map((val, ind) => {
                            return (
                                <div key={ind} style={{ textAlign: 'center', margin: '10px' }}>
                                    <img src={val.url} alt={val.text} style={{ width: '120px', height: '120px' }} />
                                    <h5>{val.text}</h5>
                                </div>
                            )
                        })
                    }
                </Box>
            </div>
            <Box marginTop={'50px'} style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <Carousel
                    responsive={responsive}
                    showDots={true}
                    infinite={true}
                    autoPlay={false}
                    autoPlaySpeed={2000}
                    transitionDuration={500}
                    arrows={true}
                     containerClass="carousel-container"
                >
                    {
                        bannerData.map((val, ind) => {
                            return (
                                <div key={ind} style={{ position: 'relative' }}>
                                    <img src={val.url} alt={val.id} style={{ width: "100%", height: "auto", maxHeight: "500px" }} />
                                </div>
                            )
                        })
                    }
                </Carousel>
            </Box>
        </>
    );
}

export default Home;
