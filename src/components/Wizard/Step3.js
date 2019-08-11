import React, { Component } from "react";
import { Link } from "react-router-dom";
import store, { UPDATE_RENT_AMOUNT,UPDATE_MORTGAGE } from "../../store";
import axios from "axios";

export default class Step3 extends Component {
  state = {
    rentAmount: "",
    mortgage:''
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  step3 = () => {
    store.dispatch({
      type: UPDATE_RENT_AMOUNT,
      payload: this.state
    });
    store.dispatch({
      type: UPDATE_MORTGAGE,
      payload: this.state
    })
  };
  //Is this assignment necessary? How about the axios call?
  // let reduxState = store.getState()
  // axios.post('/api/houses',reduxState)

  addHouses = () => {
    const { name, address, city, state, zipcode } = this.state;
    axios
      .post("/api/houses", { name, address, city, state, zipcode })
      .then(res => {
        console.log("ok");
      });
  };

  

  render() {
    return (
      <div>
        <input
          placeholder="rent amount"
          type=""
          name="rentAmount"
          onChange={e => this.handleChange(e)}
        />
        <input 
        placeholder='mortgage'
        type=''
        name='mortgage'
        onChange={e => this.handleChange(e)}
        />
        <Link to="/wizard/step2">
          <button onClick={this.handleChange}>Back</button>
        </Link>
        <button onClick={this.addHouses}>Complete</button>
      </div>
    );
  }
}
