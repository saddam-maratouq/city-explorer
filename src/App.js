import React  from 'react'

import axios   from 'axios';

 class App extends   React.Component {
 
 constructor (props) {
   super(props) 
   this.state = {
      CityData :  {},
      DiscovedCity :''
   }
 }


 getlocationCity = async (e) => {
  e.preventDefault() 

  await this.setState ({
    
    DiscovedCity :  e.target.city.value 

  })

console.log('aaaaaa',this.state.DiscovedCity);


  let locUrl=  `https://eu1.locationiq.com/v1/search.php?key=pk.df3290b165e47ceb9d5f7469caaf49ea&q=${this.state.DiscovedCity}&format=json`;

  let result = await axios.get(locUrl)  

  // console.log('sssssss',result);
  // console.log('sssssss',result.data);
  console.log('sssssss',result.data[0]);

  
  this.setState ({

    CityData : result.data[0] 
   })  
}


 

 
 
  render () {
    return (
      <div>
        
      <h2> hello test</h2>  
      {/* <button onClick={this.getlocationCity}  > get Amman location </button> */}
      <form  onSubmit={this.getlocationCity} >
      <input type="text"  placeholder='Enter City' name='city' />
      <button> type the city  </button>
    
      </form> 
     <p>  {this.state.DiscovedCity}      {this.state.CityData.lat} /  {this.state.CityData.lon}    </p>
      </div>
    )
  
  }
}

export default App;
