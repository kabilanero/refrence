import React from "react";
import "../Styles/details.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Care from "./Carousel";

class Details extends React.Component {
  render() {
    return (
      <div>
        <Care />
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-3">
              <button className="button">Click to see Image Gallery</button>
            </div>
            <div className="heading1">The Big Chill Cakery</div>
            <button className="btn-order">Place online order</button>
            <Tabs>
              <div className="tabs">
                <div className="tab">
                  <TabList>
                    <input type="radio" id="tab-1" name="tab-group-1" checked />

                    <Tab>
                      <label for="tab-1">Overview</label>
                    </Tab>
                  </TabList>

                  <div className="content">
                    <TabPanel>
                      <div className="about">About this place</div>
                      <div className="head">Cuisine</div>
                      <div className="value">Bakery,Fast-food</div>
                      <div className="head">Average cost</div>
                      <div className="value">
                        &#8377; 700 for two people(approx)
                      </div>
                    </TabPanel>
                  </div>
                </div>
              </div>
            </Tabs>
            <Tabs>
              <div className="tab2">
                <TabList>
                  <input type="radio" id="tab-2" name="tab-group-1" checked />
                  <Tab>
                    <label for="tab-2">Contact</label>
                  </Tab>
                </TabList>
                <div className="content">
                  <TabPanel>
                    <div className="head">Phone Number</div>
                    <div className="value">8248818716</div>
                    <div className="head">The Big Chill Cakery</div>
                    <div className="value">
                      shop 1, plot D, samruddhi complex, chincoli,mumbai-400002,
                      maharastra
                    </div>
                  </TabPanel>
                </div>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    );
  }
}

export default Details;
