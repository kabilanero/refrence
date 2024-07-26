import React from "react";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../Styles/carousel.css";

// import car1 from "../Assets/car1";
class Care extends React.Component {
  render() {
    return (
      <div>
        <Carousel showThumbs={false}>
          <div>
            <img
              src="https://img.freepik.com/free-vector/restaurant-mural-wallpaper_23-2148692632.jpg?w=2000"
              alt="not found"
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8&w=1000&q=80"
              alt="not found"
            />
          </div>
          <div>
            <img
              src="https://images.vexels.com/media/users/3/173778/raw/21db866c2086a86c5ec0f55b70269fa9-best-bbq-food-background-design.jpg"
              alt="not found"
            />
          </div>
        </Carousel>
        <Carousel showThumbs={false}>
          <button className="button">Click to see Image Gallery</button>
        </Carousel>
      </div>
    );
  }
}

export default Care;
