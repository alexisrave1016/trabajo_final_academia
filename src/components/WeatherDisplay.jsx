import React from 'react'
import Clima from './Clima'

const WeatherDisplay = () => {
    return (
        <div className="container-weatherDisplay">
           <input type="text" placeholder="location" /> 
           <Clima/> 
        </div>
    )
}

export default WeatherDisplay
