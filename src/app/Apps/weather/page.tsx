"use client";
import React, { useState } from "react";
import WeatherApp from "../../Components/WeatherApp";
import Navbar from "@/app/Components/Navbar";
import Button from "@/app/Components/Button";

const WeatherPage: React.FC = () => {
  //const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
  const apiKey = "11485cf5e98a9334de4c97ee72e30c90";
  const [latitude, setLatitude] = useState<number>(40.6761472);
  const [longitude, setLongitude] = useState<number>(-73.4696557);

  if (!apiKey) {
    return <p>Invalid or missing API key. Please check again.</p>;
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="weatherAppWrapper flex flex-col gap-5">
          <h1>Weather Information</h1>
          <div className="bg-slate-200 p-5 rounded text-slate-700 dark:bg-slate-700 dark:text-slate-200">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-2">
                <label htmlFor="lat">Latitude </label>
                <input
                  type="number"
                  id="lat"
                  name="lat"
                  value={latitude}
                  onChange={(e) => setLatitude(Number(e.target.value))}
                  placeholder="Lattitude"
                  className="text-slate-500"
                />
                <label htmlFor="lon">Longitude </label>
                <input
                  type="number"
                  id="lon"
                  name="lon"
                  value={longitude}
                  onChange={(e) => setLongitude(Number(e.target.value))}
                  placeholder="Longitude"
                  className="text-slate-500"
                />
              </div> 
              <Button type="submit">Get Weather</Button>
            </form>
          </div>
          <WeatherApp
            apiKey={apiKey}
            latitude={latitude}
            longitude={longitude}
          />
        </div>
      </main>
    </>
  );
};

export default WeatherPage;
