import React from 'react';
import axios from 'axios';
import '../Styles/home.css';
import Wallpaper from './Wallpaper';
import QuickSearch from './QuickSearch';

class Home extends React.Component {
   constructor() {
    super()
    this.state = {
      events: []
    }
  }

  componentDidMount() {
    axios({
      method: 'GET',
      url: 'http://localhost:9099/locations',
      headers: { 'Content-Type': 'application/json' }
    }).then((response) => 
    { 
      this.setState({ events: response.data.locations })
      console.log(response.data.locations)
    }).catch(err => console.log(err))
  }
  render() {
    const { events } = this.state;
    return (
      <div>
        <Wallpaper />{/* <Wallpaper  locationsData={events} /> */}
        <QuickSearch />                    
      </div>
    );
  }
}
export default Home;

