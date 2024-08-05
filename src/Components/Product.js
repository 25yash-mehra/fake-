import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

function Product() {
    const bannerData = [
        { id: 1, url: 'https://rukminim1.flixcart.com/flap/3376/560/image/d117a62eb5fbb8e1.jpg?q=50' },
        { id: 2, url: 'https://rukminim1.flixcart.com/flap/3376/560/image/57267a180af306fe.jpg?q=50' },
        { id: 3, url: 'https://rukminim1.flixcart.com/flap/3376/560/image/ae9966569097a8b7.jpg?q=50' },
        { id: 4, url: 'https://rukminim1.flixcart.com/flap/3376/560/image/f6202f13b6f89b03.jpg?q=50' }
    ];

    return (
        <>
            <Typography variant="h4" gutterBottom>
                Best Deals on Mobile Phones
            </Typography>
            <Box display="flex" flexWrap="wrap" justifyContent="space-around">
                {bannerData.map((val, ind) => (
                    <Card key={ind} sx={{ maxWidth: 345, margin: 2 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={val.url}
                                alt={`Banner ${val.id}`}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                ))}
            </Box>
        </>
    );
}

export default Product;
