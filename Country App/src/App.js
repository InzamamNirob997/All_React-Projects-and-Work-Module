import React, {useState, useEffect} from 'react'
import CountryList from './File/CountryList'


const url = 'https://restcountries.com/v3.1/all' // Countries URL from restcountries

 const App = () => {

  // object selection for fetching usestate:
   const [loading, setLoading] = useState(true)
   const [error, setError] = useState (null)
   const [countries, setCountries] = useState([])

   // Fecting those all objects now: 

   const fetchData = async (url) => {
    setLoading(true)

    try{
      const response =  await fetch(url)
      const data = await response.json()
      setCountries(data)
      setLoading(false)
      setError(null)
  
    } catch(error){
      setLoading(false)
      setError(error)

    }

   }

   useEffect(() => {
    fetchData(url)
    
   }, [])
   








    return (
      <div>
      <h1>Country Info Website</h1>
      {loading && <h2>Loading...</h2>}
      {error && <h2>{error.message}</h2>}
      {countries && <CountryList  countries ={countries}/>}
      </div>
      
    )
  }


export default App