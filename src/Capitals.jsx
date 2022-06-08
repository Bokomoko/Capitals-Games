import React,{useState,useEffect} from 'react'
export default function Capitals( {listOfCapitals}){
  const [capitals, setCapitals ] = useState({... listOfCapitals})
  const [realButtons,setRealButtons] = useState([])
  const [clickedCountry,setClickedCountry] = useState(null)

  const buttons = []
  for (const [country,capital] of Object.entries(listOfCapitals)) {
    buttons.push({country, value: country,color:"black"})
    buttons.push({country, value: capital,color:"black"})
  }
  buttons.sort( ()=> Math.random() -0.5 )

  useEffect( ()=> {
    setRealButtons([ ... buttons] )  
  },[] )
  
  
  function handleClick( which) {
    if (clickedCountry ) {
      if (realButtons[which].country == clickedCountry) {
        const wbuttons = realButtons.filter( (e)=> e.country != clickedCountry)
        setRealButtons( wbuttons)
      }
      setClickedCountry(null)
      return
    }
    setClickedCountry( realButtons[which].country)
  }
  
  return (
    <div>
      {realButtons.map( (entry,index) => 
          <button 
            key = {entry.value}
            style={ {color : entry.color , margin: "2px"}}
            onClick= { ()=> handleClick(index)}
          >
            {entry.value}
          </button>)}
    </div>
  )
}