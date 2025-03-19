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

  useEffect(()=>{
      inputRef.current.focus()
  },[])

  const handleEvent = (e)=>{
    if (e.key === "Enter"){
      fetchLatitude()
      fetchWeather()
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
      const json = await response.json();
      if (json.length < 1) {
        setIsLoading(false)
        throw new Error("City not found")
      }
        console.log(json);
        
        setIsLoading(false)
      
      
      
    } catch (error) {
      setError(error.message);
      console.error(error);
    }
  
  }
  
const fetchWeather = async ()=>{

  const lat = data.map((weather)=>weather.lat)
  const lon = data.map((weather)=>weather.lon)

  try{
    setIsLoading(true)
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`)
    if(!res.ok){
      throw new Error("Failed to fetch weather")
    }
    const json = res.json()
    setIsLoading(false)
    setData(json)
    console.log(json);
    
  }
  catch(error){
    setError(error.message)
  }
  
}

const handleFecth = ()=>{
  fetchLatitude()
  fetchWeather()
}

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
          <p >Temp:{data.main.temp}</p>
          </div>
        
      )}
      
    </>
  );
}

export default App;
