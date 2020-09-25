import React from 'react';
import Home from '../Home/Home';

const NoMatch = () => {
    return (
        <div>
            <Home></Home>
            <h1 style={{color: 'white', textAlign:'center', marginTop:'200px',fontSize:'70px'}}>Error 404!! <br/>Page Not Found!!</h1>
        </div>
    );
};

export default NoMatch;