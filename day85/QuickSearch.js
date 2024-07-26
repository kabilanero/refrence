import React from "react";

class QuickSearch extends React.Component {
  render() {
    return (
      <div>
        <div className="bottomSection">
          <h1 className="heading">Quick Search</h1>
          <h3 className="subHeading">Discover restuarants by type of meal</h3>
          <div className="boxContainer">
            <div className="boxes">
              <div className="boxContent">
                <img
                  src="https://b.zmtcdn.com/data/dish_photos/2d6/e461836ea875040690229d755faa72d6.jpg?output-format=webp"
                  alt="idly"
                  className="qsImage"
                />
                <h4 className="itemHeading">Breakfast</h4>
                <p className="itemDescription">
                  Start your day with exclusive Breakfast options
                </p>
              </div>
            </div>
            <div className="boxes">
              <div className="boxContent">
                <img
                  src="https://b.zmtcdn.com/data/dish_photos/b17/37e9b8605672359922aa6bdf16a1eb17.jpg?output-format=webp"
                  alt="meals"
                  className="qsImage"
                />
                <h4 className="itemHeading">Lunch</h4>
                <p className="itemDescription">
                  Start your day with exclusive Breakfast options
                </p>
              </div>
            </div>
            <div className="boxes">
              <div className="boxContent">
                <img
                  src="https://b.zmtcdn.com/data/dish_photos/f43/25f432059fb6c3eca0730630c7438f43.jpg?output-format=webp"
                  alt="chappati"
                  className="qsImage"
                />
                <h4 className="itemHeading">Dinner</h4>
                <p className="itemDescription">
                  Start your day with exclusive Breakfast options
                </p>
              </div>
            </div>
            <div className="boxes">
              <div className="boxContent">
                <img
                  src="https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png"
                  alt="biryani"
                  className="qsImage"
                />
                <h4 className="itemHeading">Biryani</h4>
                <p className="itemDescription">
                  Start your day with exclusive Breakfast options
                </p>
              </div>
            </div>
            <div className="boxes">
              <div className="boxContent">
                <img
                  src="https://b.zmtcdn.com/data/dish_images/8187d3223ac2cc42cc24f723c92877511634805403.png"
                  alt="shake"
                  className="qsImage"
                />
                <h4 className="itemHeading">Shake</h4>
                <p className="itemDescription">
                  Start your day with exclusive Breakfast options
                </p>
              </div>
            </div>
            <div className="boxes">
              <div className="boxContent">
                <img
                  src="https://b.zmtcdn.com/data/dish_images/1437bc204cb5c892cb22d78b4347f4651634827140.png"
                  alt="chaat"
                  className="qsImage"
                />
                <h4 className="itemHeading">Chaat</h4>
                <p className="itemDescription">
                  Start your day with exclusive Breakfast options
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default QuickSearch;
