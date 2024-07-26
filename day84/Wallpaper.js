import React from "react";

class Wallpaper extends React.Component {
  render() {
    const { locationsData } = this.props;
    return (
      <div>
        <img
          src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png"
          alt="Zomato Website"
          className="homeImage"
        />
        {/* <div className="navs">
          <button className="loginButton">Login</button>
          <button className="createButton">Create an Account</button>
        </div> */}
        <div className="topSection">
          <div className="logo">Zomato</div>
          <div className="headerText">
            Discover the best food & drinks in Salem
          </div>
          <div className="searchOptions">
            <span>
              <select className="locationBox">
                <option selected disabled>
                  Select City
                </option>
                {locationsData.map((item) => {
                  return (
                    <option value="coimbatore" label="coimbatore">
                      {item.location_id}
                    </option>
                  );
                })}
              </select>
            </span>
            <span className="searchBox">
              <i className="bi bi-search searchIcon"></i>
              <input
                type="text"
                className="searchInput"
                placeholder="Search for Restuarants"
              />
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Wallpaper;
