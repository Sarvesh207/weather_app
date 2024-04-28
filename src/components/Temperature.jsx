import React from "react";

function Temperature({
  condition,
  icon,
  temp,
  feelsLike,
  humidity,
  uv,
  pressure,
  wind,
}) {
  console.log(condition);

  return (
    <div className="flex justify-evenly items-center sm:flex-row flex-col py-5 ">
      <div>
        <h1 className="font-[800] text-7xl bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text ">
          {temp}&nbsp;°C
        </h1>
        <h3 className="font-[600] text-3xl bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
          Feels like:{feelsLike}&nbsp;°C
        </h3>
       
      </div>
      <div className="text-center">
        <div className="text-yellow-500 text-9xl ">
          <img src={`https://${icon}`} className="w-32" alt="weather_icon" />
        </div>
        <h1 className="text-4xl font-[300] mb-3">{condition}</h1>
      </div>
      <div className="grid grid-cols-2 text-center ">
        <div className="flex justify-center items-center flex-col gap-2">
          <img className="w-10 h-10" src="../../public/humidity.png" alt="" />
          <p>{humidity}</p>
          <p>Humidity</p>
        </div>
        <div className="flex justify-center items-center flex-col gap-2">
          <img className="w-10 h-10" src="../../public/wind.png" alt="" />
          <p>{wind}</p>
          <p>Wind Speed</p>
        </div>
        <div className="flex justify-center items-center flex-col gap-2">
          <img
            className="w-10 h-10"
            src="../../public/pressure-white.png"
            alt=""
          />
          <p>{pressure}</p>
          <p>Pressure</p>
        </div>
        <div className="flex justify-center items-center flex-col gap-2">
          <img className="w-10 h-10" src="../../public/uv-white.png" alt="" />
          <p>{uv}</p>
          <p>UV</p>
        </div>
      </div>
    </div>
  );
}

export default Temperature;
