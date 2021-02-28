import React from "react";
import CityInput from "./components/CityInput";
import CityWeather from "./components/CityWeather";
import './App.css';

function App(){

  const [city,setCity]=React.useState("");
  const [cityWeather,setCityWeather]=React.useState({});
  const fetchCityWeather=()=>{
    fetch(`https://crossorigin.me/http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=67ec045673b3933175daaa40e2f8a618`)
    .then((response)=>response.json())
    .then((result)=>{
      setCityWeather(result);
      //console.log(cityWeather);
    })
  }
  return (
    <div>
    <CityInput city={city} setCity={setCity} fetchCityWeather={fetchCityWeather}/>
    {Object.keys(cityWeather).length===0?"":<CityWeather cityWeather={cityWeather}/>}
    </div>
    );
}

export default App;