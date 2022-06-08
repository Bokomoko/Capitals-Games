import React from 'react';
import './App.css';
import Capitals from './Capitals'

const API_REGION_URL = "https://restcountries.com/v3.1/region/"

function App() {

  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"]
  const [list,setList] = React.useState(null) 
  const [region , setRegion] = React.useState(null)

  async function loadRegion( aRegion ) {
    const listOfCountries = await fetch( API_REGION_URL + aRegion )
    const countries = {}
    listOfCountries.forEach( (country)=>{
      countries[country.name.common] = country.capital
    })
    setRegion(aRegion)
    setList({ ... countries} )
    
  }
    
  return (
    <div>
      Select the region you want to play 
      <select> 
        {regions.map( (region)=> <option key={region} onClick={
          (e) => {
            loadRegion( e.target.value)
          }
        }>{region}</option>)}
      </select>
      {region && <Capitals listOfCapitals={list}/> } 
    </div>
  );
}

export default App;