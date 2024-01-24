import React from 'react';
import WeatherApp from '../Components/WeatherApp';

const WeatherPage: React.FC = () => {
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

    if (!apiKey) {
        return <p>Invalid or missing API key. Please check again.</p>
    }

    return (
        <div>
            <h1>Weather Information</h1>
            <WeatherApp apiKey={apiKey} />
        </div>
    )
};

export default WeatherPage;