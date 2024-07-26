import React from "react";
import queryString from 'query-string';
import axios from "axios";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import '../Styles/Details2.css';
import { get, post } from '../service/service'
import Care from "./Carousel";


class Details extends React.Component {
    constructor() {
        super();
        this.state = {
            restaurent: {}
        }
    }
    async componentDidMount() {
        const qs = queryString.parse(this.props.location.search)
        const { restaurent } = qs;
        console.log("data")
        var newData = await get(`restaurent/getRestaurent/${restaurent}`);
        var data = {

        }
        var newData2 = await post(`restaurent/getRestaurent`, data);
        console.log(newData, newData2)

        axios({
            method: 'GET',
            url: `http://localhost:3002/api/restaurent/getRestaurentDetails/${restaurent}`,
            headers: { 'Content-Type': 'application/json' }
        }).then((response) => {
            localStorage.setItem("premkumar", "lozz")
            console.log(localStorage.getItem("premkumar"))
            this.setState({ restaurent: response.data.data.restaurent })
        }).catch(err => console.log(err))

    }
    // handleOrder = (resId) => {

    //     axios({
    //         method: 'GET',
    //         url: `http://localhost:3002/api/restaurent/getRestaurentDetails/${restaurent}`,
    //         headers: { 'Content-Type': 'application/json' }
    //     }).then((response) => {
    //         localStorage.setItem("premkumar", "lozz")
    //         console.log(localStorage.getItem("premkumar"))
    //         this.setState({ restaurent: response.data.data.restaurent })
    //     }).catch(err => console.log(err))
    // }
    render() {
        const { restaurent } = this.state;
        return (
            <div>
                <div>
                    <Care />
                    <button className="clickSearch">Click to see image Gallery</button>
                </div>
                <div className="tabs">
                    <h3 className="heading">{restaurent.name}</h3>
                    {/* <p>{restaurent.cuisine}</p> */}
                    <ul>
                        {
                            restaurent?.cuisine?.map((item, index) => (<li key={index} >{`${item.name}`}</li>))
                        }
                    </ul>

                    {/* {restaurent.map((item) => {
                return */}
                    <Tabs>
                        <TabList>
                            <Tab>Overview</Tab>
                            <Tab>Contact</Tab>
                        </TabList>
                        <TabPanel className="pannel">
                            <h4 className="Phone">Phone number</h4>
                            <h4>{restaurent.contact_number}</h4>
                            <br></br>
                            <h3>{restaurent.name}</h3>
                            <p>{restaurent.locality} <br></br> {restaurent.city} 636 105</p>
                        </TabPanel>
                        <TabPanel className="pannel">
                            <h4 className="Phone">Phone number</h4>
                            <h4>{restaurent.contact_number}</h4>
                            <br></br>
                            <h3>{restaurent.name}</h3>
                            <p>{restaurent.locality}<br></br> {restaurent.city} 645 945</p>
                        </TabPanel>
                    </Tabs>
                    {/* })}  */}
                </div>
                <div>
                    <button className="btn-order" onClick={() => this.handleOrder(restaurent._id)}>Place online order</button>
                </div>

            </div>

        )
    }
}
export default Details;