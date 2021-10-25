import React from 'react'
import Search from './Search'
import WeatherDisplay from './WeatherDisplay'   
import axios from 'axios';



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state={
           heading:'DargSky API and locationIQ API',
           search: ''
        }
    }

    changeSearch= (e)=>{
        this.setState({search: e.target.value})
    }
    submit=async (e)=>{
        console.log('obtener datos');
        const searchLocation = this.state.search;
        console.log(searchLocation);
        const locationUrl= `https://api.mapbox.com/geocoding/v5/mapbox.places/city.json?${locationUrl}=pk.eyJ1Ijoiamdhd mlyMjMiLCJhIjoiY2pwMzMwanYwMDJkeTNwcDduODR5bXRlayJ9.p_HLVm6sK-X0d5-JIpSdxA`
        const locationData= await axios.get(locationUrl)
        console.log(locationData);
        const darSkyUrl =`https://api.darksky.net/forecast/${darSkyUrl}/LAT,LO`
        const weatherData= await axios.get(darSkyUrl)
        console.log(weatherData);
    }

    render(){
        const {heading, search} = this.state;
        return (
            <div class="App">
                <h1>{heading}</h1>
               <Search 
               input={search} 
               changeSearch={this.changeSearch} 
               submit={this.submit}
               />
               <WeatherDisplay/>
            </div>
        )
    }
}

export default App
