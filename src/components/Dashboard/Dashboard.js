import React, { Component } from "react";
import House from "../House/House";
import { Link } from "react-router-dom";
import axios from "axios";

//initial state
export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      houses: []
    };


    this.deleteHouses = this.deleteHouses.bind(this)
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

  deleteHouses(id){
    // console.log('any')
    axios.delete(`/api/houses/${id}`).then(res => {
      this.setState({
        houses:res.data
      })
    })
  }




  render() {
    //map function goes here that returns the house component for each house
    {
      var allHouses = this.state.houses.map(ele => (
        <div key={ele.id}>
          <House ele={ele} remove={this.deleteHouses} />
        </div>
      ));
    }
    return (
      <div>
        <h1>DashBoard</h1>
        <Link to="/wizard/step1">
          <button>Add New Property</button>
        </Link>
        {allHouses}
      </div>
    );
  }
}
