import React, { Component } from "react";
import House from "../House/House";
import { Link } from "react-router-dom";
import axios from "axios";

//initial state
export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      houses: []
    };
  }

  componentDidMount() {
    axios.get("/api/houses").then(res => {
      this.setState({
        houses: res.data
      });
    });
  }
//gets the houses and connects it to endpoint
  getHouses() {
    axios.get("/api/houses").then(res => {
      this.setState({
        houses: res.data
      });
    });
  }




  render() {
    //map function goes here that returns the house component for each house
    {
      var allHouses = this.state.houses.map(ele => (
        <div key={ele.id}>
          <House ele={ele} />
        </div>
      ));
    }
    return (
      <div>
        <h1>DashBoard</h1>
        <Link to="/wizard">
          <button>Add New Property</button>
        </Link>
        {allHouses}
      </div>
    );
  }
}
