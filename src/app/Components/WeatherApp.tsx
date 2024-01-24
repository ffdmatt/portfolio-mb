import React, { useState, useEffect } from "react";
import axios from "axios";

type WeatherData = {
  main: {
    temp: number;
  };
  name: string;
  country: string;
  sys: {
    country: string;
  };
  weather: {
    main: string;
    description: string;
  }[];
};

type Props = {
  apiKey: string;
  latitude: number;
  longitude: number;
};


const WeatherApp: React.FC<Props> = ({ apiKey, latitude, longitude }) => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        // Replace "cityName" with the city you want to fetch the weather for.
        //const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=MassapequaPark&appid=${apiKey}&units=metric`);

        // Lat and Long method
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
        );

        // BELOW is to get LAT AND LONG. CAN PULL THEM AND USE
        //const response = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=${apiKey}`);
        setWeatherData(response.data);
        setLoading(false);
      } catch (error) {
        setError("Error fetching weather");
        setLoading(false);
      }
    };

    fetchWeather();
  }, [apiKey, latitude, longitude]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <div className="bg-slate-200 p-5 rounded text-slate-700 dark:bg-slate-700 dark:text-slate-200">
        {weatherData && (
          <div>
            <h2>
              Weather in {weatherData.name}, {weatherData.sys.country}
            </h2>
            <p>Temperature: {weatherData.main.temp}°C</p>
            <p>
              {weatherData.weather[0].main}:{" "}
              {weatherData.weather[0].description}
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default WeatherApp;
