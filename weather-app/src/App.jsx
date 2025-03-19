import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const key = "78c1eee980b22b39fde9fe5d79766b76";
  const inputRef = useRef(null)
  
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  // const [longitude, setLongitude] = useState();
  // const [latitude, setLatitude] = useState();
  const [city, setCity] = useState();

  // a useEffect that applies auto focus on input when component renders
  useEffect(()=>{
      inputRef.current.focus()
  },[])

  // handling enter key when user press enter api should be fethced
  const handleEvent = (e)=>{
    if (e.key === "Enter"){
      fetchLatitude()
    }
  }

  // This will fetch the latitude which we later convert to city
  const fetchLatitude = async () => {
    try {
      setIsLoading(true)
      const response = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${key}`
      );
      if (!response.ok) {
        throw new Error("Error occured while fetching API");
      }
      
      const [json] = await response.json();
      if (json.name.length < 1) {
        setIsLoading(false)
        throw new Error("City not found")
      }
      fetchWeather(json.lat,json.lon)
        console.log("Latitude",json);
        console.log("Lat",json.lat);
        console.log("Lon",json.lon);
        
        
        setIsLoading(false)
      
      
      
    } catch (error) {
      setError(error.message);
      console.error(error);
    }
  
  }
  
const fetchWeather = async (lat,lon)=>{

  try{
    setIsLoading(true)
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`)
    if(!res.ok){
      throw new Error("Failed to fetch weather")
    }
    const json = await res.json()
    setData(json)
    setIsLoading(false)
    console.log("Weather Data",json);
    
    console.log("Temp: ",tempInCelcius.toFixed(2));
    
  }
  catch(error){
    setError(error.message)
  }
  
}

const handleFecth = ()=>{
  fetchLatitude()
}

const condition = data?.weather[0].main
const tempInCelcius = data?.main.temp-273.15

  // if (error) return <p>Error...{error}</p>;
 
  return (
    <>
      <h1>Weather app</h1>
      <input ref={inputRef} type="text" value={city} onChange={(e)=>setCity(e.target.value)} onKeyDown={handleEvent}/>
      <button onClick={handleFecth}>Search</button>
      {
        isLoading && <p>Loading...</p>
      }

      {
        error && <p>{error}</p>
      }

      {data && !isLoading && (
        
        <div key={data.name}>
          <p >Temp:{tempInCelcius.toFixed(2)}</p>
          <p >Condition: {condition}</p>
          {/* <p >Temp:{data.cod}</p> */}
          </div>
        
      )}
      
    </>
  );
}

export default App;
