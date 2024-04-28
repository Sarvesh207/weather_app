import React, { useEffect, useState, useRef } from "react";
import Navbar from "./components/Navbar";
import Temperature from "./components/Temperature";
import { FiSunrise } from "react-icons/fi";
import Forecast from "./components/Forecast";
import Error from "./components/Error";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("Pune");
  const [error, setError] = useState(false)

  console.dir(weatherData);

  const getWeatherData = async () => {
    try {
        const res =
          await fetch(`https://api.weatherapi.com/v1/forecast.json?key=98f52081122f432ab0052329242704&q=${city}&days=5&aqi=no&alerts=no
            `);
            if(!res.ok) {
                throw new Error("City not found")
                setError(true)
            }
        const data = await res.json();
        setError(false)
        setWeatherData(data);
    } catch (error) {
        console.warn(error)
        setError(true)
    }

    
  };
  useEffect(() => {
    getWeatherData();
  }, [city]);
  return (
    <>
      <Navbar setCity={setCity} />
      {
        error&& <Error/>
      }
      <div className="  text-white grid sm:grid-cols-12 grid-cols-1  sm:mx-40 mx-0  mt-3  sm:gap-4  ">
        <div className=" col-span-4 rounded-lg border  text-center sm:mb-0 mb-3 flex justify-center items-center flex-col bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
          <h1 className="font-[700] text-6xl">{weatherData?.location?.name}</h1>

          <p className="text-3xl font-semibold mt-2">{weatherData?.location?.localtime}</p>
          <img src="./assets/clear.png" alt="" />
        </div>
        <div className="col-span-8  rounded-lg  border ">
          <Temperature
            condition={weatherData?.current?.condition?.text}
            icon={weatherData?.current?.condition?.icon}
            temp={weatherData?.current?.temp_c}
            feelsLike={weatherData?.current?.feelslike_c}
            humidity={weatherData?.current?.humidity}
            uv={weatherData?.current?.uv}
            pressure={weatherData?.current?.pressure_in}
            wind={weatherData?.current?.wind_kph}

          />
        </div>
      </div> 
      
    </>
  );
};

export default App;
