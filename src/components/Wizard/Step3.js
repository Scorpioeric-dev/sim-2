import React, { Component } from "react";
import { Link } from "react-router-dom";
import store, { UPDATE_RENT_AMOUNT, UPDATE_MORTGAGE,CANCEL } from "../../store";
import axios from "axios";

export default class Step3 extends Component {
  constructor() {
    super();
    const reduxState = store.getState();

    this.state = {
      rentAmount: reduxState.rentAmount,
      mortgage: reduxState.mortgage
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  
  getHouses= () => {
    axios.get("/api/houses").then(res => {
      this.setState({
        houses: res.data
      });
    });
  }
  step3 = () => {
    store.dispatch({
      type: UPDATE_RENT_AMOUNT,
      payload: this.state.rentAmount
    });
    store.dispatch({
      type: UPDATE_MORTGAGE,
      payload: this.state.mortgage
    });
    let reduxState = store.getState();
    axios.post("/api/houses", reduxState).then(res => {
      console.log("ok");
    });
    store.dispatch({
      type: CANCEL
    });
    this.getHouses()

    
  };






  goBack = () => {
    store.dispatch({
      type: UPDATE_RENT_AMOUNT,
      payload: this.state.amount
    });
    store.dispatch({
      type: UPDATE_MORTGAGE,
      payload: this.state.mortgage
    });
  };
  //Is this assignment necessary? How about the axios call?
  // let reduxState = store.getState()
  // axios.post('/api/houses',reduxState)

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
          placeholder="mortgage"
          type=""
          name="mortgage"
          onChange={e => this.handleChange(e)}
        />
        <Link to="/wizard/step2">
          <button onClick={this.goBack}>Back</button>
        </Link>
        <Link to="/">
          <button onClick={this.step3}>Complete</button>
        </Link>
      </div>
    );
  }
}
