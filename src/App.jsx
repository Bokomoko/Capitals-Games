import React from 'react';
import './App.css';
import Capitals from './Capitals'

const API_REGION_URL = "https://restcountries.com/v3.1/region/"

function App() {

  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"]
  const [list,setList] = React.useState(null) 
  const [region , setRegion] = React.useState(null)

  async function loadRegion( aRegion ) {
    const listOfCountries = await fetch( API_REGION_URL + region )
    const countries = {}
    listOfCountries.forEach( (country)=>{
      countries[country.name.common] = contry.capital
    })
    setList({ ... countries} )
    
  }
    
  return (
    <div>
      Select the region you want to play 
      <select>
        {regions.map( (e)=> <option onClick={
          () => {
            loadRegion( e.target.value)
          }
        }>{e}</option>)}
      </select>
      {region && <Capitals listOfCapitals={list}/> } 
    </div>
  );
}

export default App;