import React from "react";
import {Container,Form,Button} from "react-bootstrap";

function CityInput({city,setCity,fetchCityWeather}){
	
	const [error,setError]=React.useState("");

	const handleInputChange=(e)=>{
		setCity(e.target.value);
	}

	const handleClick=()=>{
		if(!city)
			setError("City field is empty");
		else
		{
			setError("");
			fetchCityWeather();
		}
	}

	console.log(city);
  return (
  	<Container>
  	<Form>
	  <Form.Group controlId="formBasicEmail">
	    <Form.Label>City</Form.Label>
	    <Form.Control type="text" value={city} placeholder="Enter city" onChange={handleInputChange}/>
	    <p className="text-danger">{error}</p>
	  </Form.Group>
	  <Button variant="primary" onClick={handleClick}>
	    Submit
	  </Button>
	</Form>
	</Container>
    );
}

export default CityInput;