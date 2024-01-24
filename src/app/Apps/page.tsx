import React from 'react';
import Navbar from '../Components/Navbar';

const AppsPage: React.FC = () => {

    return (
        <>
        <Navbar />
        <div>
            <h1>These are my apps!</h1>
            <ul>
                <li><a href="/apps/weather">Weather App</a></li>
            </ul>
        </div>
        </>
    )
};

export default AppsPage;