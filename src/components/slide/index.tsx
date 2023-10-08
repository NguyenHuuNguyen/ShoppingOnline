import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Index: React.FC = () => {
    const carouselImages = [
        '/asset/images/slide/RectangleGrey.png',
        '/asset/images/slide/RectanglePink.png',
        '/asset/images/slide/RectangleGreen.png',
    ];

    return (
        <Carousel>
            {carouselImages.map((imageUrl, index) => (
                <div key={index}>
                    <img src={imageUrl} alt={`Slide ${index}`} />
                </div>
            ))}
        </Carousel>
    );
};

export default Index;
