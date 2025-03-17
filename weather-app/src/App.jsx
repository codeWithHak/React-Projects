import { useEffect, useState } from 'react'
import './App.css'

function App() {
const key = "aecf17d11b9a1bf1cfb719e72f11b477"
const [data,setData] = useState()
const [error,setError] = useState()
const [isLoading, setIsLoading] = useState(true)

  const fetchLatitude = async ()=>{

try{
  const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=London&limit=1&appid=${key}`)
  if (!response.ok){
    throw new Error("Failed to fetch API response.")
  }
  const json = await response.json()
  console.log(json);
  setData(json)
  setIsLoading(false)
}
catch(error){
  setError(error.message)
  console.error(error)
}
}

useEffect(()=>{
  fetchLatitude()
},[])


if(error) return <p>Error...{error}</p>
if (isLoading) return <p>Loading...</p>
  return (
    <>
     <h1>Weather app</h1>
     {data.map((weather)=>(
      <>
      <p key={weather.name}>{weather.name}</p>
      <p key={weather.lat}>{weather.lat}</p>
      <p key={weather.lon}>{weather.lon}</p>
    </>))}
    </>
  )
}

export default App
