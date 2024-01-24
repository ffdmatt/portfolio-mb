import React from 'react';
import WeatherApp from '../../Components/WeatherApp';
import Navbar from '@/app/Components/Navbar';

const WeatherPage: React.FC = () => {
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

    if (!apiKey) {
        return <p>Invalid or missing API key. Please check again.</p>
    }

    return (
        <>
        <Navbar />
        <main className="flex min-h-screen flex-col items-center justify-center">
            <div className="weatherAppWrapper flex flex-col gap-5">
                <h1>Weather Information</h1>
                <WeatherApp apiKey={apiKey} />
            </div>
        </main>
        </>
    )
};

export default WeatherPage;