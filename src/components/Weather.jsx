import { useState } from "react";


export const Weather = () => {
  const [weather, setWeather] = useState(null)
  const weatherData = async () => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/forecast?lat=40.7306&lon=-73.9352&appid=${import.meta.env.VITE_API_KEY}&units=imperial`
      const response = await fetch(url);
      const data = await response.json();
      setWeather(data)
      console.log(data)
     

    } catch (error) {
      console.log(error)
      return data
    }
  }
  const cityName = weather?.city?.name;
  const next5Days = weather?.list?.slice(1, 40);
  return (
    <div>
      <button className="bg-gray-400 border-none p-2 text-white cursor-pointer rounded ml-2"
        onClick={weatherData} type="submit">Weather for New York</button>
      {weather? (
        <div className="container bg-gray-600 mt-20 p-8 rounded-md text-white">
          <p>City: {cityName}</p>
          <h3>Next 5 days:</h3>
          {next5Days? (
            <ul>
              {next5Days.map((day) => (
                <li key={day.dt_txt}>
                  {new Date(day.dt * 1000).toLocaleDateString()} - {day.main.temp}°F - {day.weather[0].description}
                </li>
              ))}
            </ul>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
};