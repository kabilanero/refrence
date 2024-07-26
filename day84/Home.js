import React from "react";
import axios from "axios";
import "../Styles/home.css";
import Wallpaper from "./Wallpaper";
import QuickSearch from "./QuickSearch";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      locations: [],
    };
  }
  componentDidMount() {
    axios({
      method: "GET",
      url: "http://localhost:8900/locations",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        this.setState({
          locations: response.data.locations,
        });
      })
      .catch((err) => console.log(err));
  }
  render() {
    const { locations } = this.state;
    return (
      <div>
        <Wallpaper locationsData={locations} />
        <QuickSearch />
      </div>
    );
  }
}
export default Home;
