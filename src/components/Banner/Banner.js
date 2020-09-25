import React, { useState } from 'react';
import Slider from '../Slider/Slider';
import './Banner.css'
import fakeData from '../../fakeData';
import Home from '../Home/Home';

const Banner = () => {
    const destinationList = fakeData;
    const [places, setplaces] = useState(destinationList);

    return (
        <div>
            <Home/>            
            {
                places.map(place => <Slider key={place.id} place={place}></Slider>)
            }
        </div>
    );
};

export default Banner;