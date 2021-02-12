import React from "react";
import {Container} from "react-bootstrap";
import "./style.css";

function CityWeather({cityWeather}){
	console.log(cityWeather);
	let tem=cityWeather.main.temp;
	tem-=273.15;
  return (
  	<Container className="cc">
  	<div>Country: {cityWeather.sys.country}</div>
  	<div>City: {cityWeather.name}</div>
  	<div>Temp: {tem} <sup>o</sup>C</div>
  	<div>Wind Speed: {cityWeather.wind.speed} km/h</div>
	</Container>
    );
}

export default CityWeather;