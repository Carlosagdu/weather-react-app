import "./App.css";
import React, { useState, useEffect } from "react";

const App = () => {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(position=>{
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    })

    console.log("Latitude is:", lat);
    console.log("Longitude is:", long);
  }, [lat, long])

  return (
  <div className="App">
    <h1>Esto es un H1</h1>
  </div>)
};

export default App;
