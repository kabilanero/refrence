import React from "react";

import "../Styles/filter.css";
import queryString from 'query-string';
import axios from "axios";

class Filter extends React.Component {
  constructor() {
    super();
    this.state = {
      restaurents: [],
      locations: []
    }
  }
  componentDidMount() {
    const qs = queryString.parse(this.props.location.search);   //this is from mealtype from home page when we select the mealtype it will give us restaurent list
    const { mealtype, location_id } = qs;                                    //capturing the value from the query string....for this we need one package that package name is (npm i query-string)

    const filterObj = {
      searchFilter: {
        mealtype_id: Number(mealtype),
        location_id: Number(location_id)
      }

    }

    axios({
      method: 'POST',
      url: 'http://localhost:3002/api/restaurent/filter',
      headers: { 'Content-Type': 'application/json' },
      data: filterObj
    }).then(response => {
      this.setState({ restaurents: response.data.data.restaurent })
      console.log(response.data.data.restaurent)
    }).catch(err => console.log(err))

    axios({
      method: 'GET',
      url: 'http://localhost:3002/api/restaurent/getRestaurent/',
      headers: { 'Content-Type': 'application/json' }
    }).then(response => {
      this.setState({ locations: response.data.data.restaurent })
      console.log(response.data.data.restaurent)
    }).catch(err => console.log(err))


  }

  handleLocationChange = (even) => {
    const location = even.target.value
  }

  render() {
    const { restaurents, locations } = this.state;
    return (
      <div>
        <div className="container">
          {restaurents.length > 0 ?
            <div className="row heading d-flex justify-content-center">
              Breakfast places in Salem
            </div> : null}
          <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-3 filterup">
              <div className="filterPanel">
                <div className="filterPanelHeading">Filters</div>
                <div className="filterPannelSubHeading">Select Location</div>
                <select className="locationSelection" onChange={this.handleLocationChange}>
                  <option>Select City</option>
                  {locations.map((item, i) => {
                    return <option key={i} value={item.location_id}>
                      {`${item.name}, ${item.city}`}
                    </option>

                  })}
                </select>
                <div className="filterPanelSubHeading">Cuisine</div>
                <input type="checkbox" className="cuisinOption" />
                <label>North Indian</label>

                <br />
                <input type="checkbox" className="cuisinOption" />
                <label>South Indian</label>

                <br />
                <input type="checkbox" className="cuisinOption" />
                <label>Chinese</label>

                <br />
                <input type="checkbox" className="cuisinOption" />
                <label>Fast Food</label>

                <br />
                <input type="checkbox" className="cuisinOption" />
                <label>Street Food</label>

                <br />
                <div className="filterPanelSubHeading">Cost for two</div>
                <input type="radio" className="cuisinOption" name="cost" />
                <label>Less than 500</label>

                <br />
                <input type="radio" className="cuisinOption" name="cost" />
                <label>500 to 1000</label>

                <br />
                <input type="radio" className="cuisinOption" name="cost" />
                <label>1000 to 1500</label>

                <br />
                <input type="radio" className="cuisinOption" name="cost" />
                <label>1500 to 2000</label>

                <br />
                <input type="radio" className="cuisinOption" name="cost" />
                <label>2000+</label>

                <br />
                <div className="filterPanelSubHeading">Sort</div>
                <input type="radio" className="cuisinOption" name="price" />
                <label>Price low to high</label>

                <br />
                <input type="radio" className="cuisinOption" name="price" />
                <label>Price high to low</label>

                <br />
              </div>
            </div>
            <div className="col-sm-12 col-md-8 col-lg-9">

              {restaurents.map((item, ele) => {
                return <div className="resultPanel" key={ele}>
                  <div className="row upperSection">
                    <div className="col-2">
                      <img
                        src="https://b.zmtcdn.com/data/dish_photos/6a3/c5b5044bd1f8cf94b946af4bfe0936a3.jpg?output-format=webp"
                        alt="notshown"
                        className="resultsImage"
                      />
                    </div>
                    <div className="col-10">
                      <div className="resultsHeading">{item.name}</div>
                      <div className="resultsSubHeading">{item.locality}</div>
                      <div className="resultsAddress">
                        {item.city}
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="row lowerSection">
                    <div className="col-2">
                      <div className="resultsAddress">
                        cuisine:
                      </div>
                      <div className="resultsAddress">COST FOR TWO:</div>
                    </div>
                    <div className="col-10">
                      <div className="resultsSubHeading">{item.cuisine.map(cuisineItem => { return `${cuisineItem.name}` })}</div>
                      <div className="resultsSubHeading">{item.min_price}</div>
                    </div>
                  </div>
                </div>
              })}

              {restaurents.length > 0 ?
                <div className="pagination d-flex justify-content-center">
                  <nav aria-label="Page navigation example">
                    <ul className="pagination">
                      <li className="page-item">
                        <a
                          className="page-link"
                          href="_blank"
                          aria-label="Previous"
                        >
                          <span aria-hidden="true">&laquo;</span>
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="_blank">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="_blank">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="_blank">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="_blank">
                          4
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="_blank">
                          5
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="_blank" aria-label="Next">
                          <span aria-hidden="true">&raquo;</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div> : <h1>Oops No Item found here!</h1>
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Filter;
