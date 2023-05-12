
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const name = "Bangkok"
  const apiKey ="01acf729d2ff5190096d9d49c9430b94"
  const [city,setcity]=useState({})
  const [isLoading,setIsLoading] = useState(false)

   useEffect (()=>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apiKey}`
      fetch(url)
      .then(res=>res.json())
      .then(data=>{
        setcity(data)
        setIsLoading(true)
      })
  },[name])

  const convertTemp=(k)=>{
    return (k-273).toFixed()
  }

  return (
    (isLoading && <div className='App'>
    <section>
      <div className='location'>
        <h1 className='city'> {city.name}</h1>
        <p className='state'>{city.sys.country}</p>
      </div>
      <div className='card'>
        <div className='weather'>
          <h1>{convertTemp(city.main.temp)} &deg;C</h1>
          <small> Max : {convertTemp(city.main.temp_max)}&deg;C , Min : {convertTemp(city.main.temp_min)}&deg;C </small>
        </div>
        <div className='info'>
          <div className='status'>{city.weather[0].main}</div>
          <div className='humidity'>Humidity : {city.main.humidity}</div>
          <div className='wind'>WindSpeed : {city.wind.speed}</div>
        </div>
      </div>
    </section>
  </div>)
 
  );
}

export default App;
