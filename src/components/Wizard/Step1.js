import React, { Component } from "react";
import { Link } from "react-router-dom";
import store, {
  UPDATE_NAME,
  UPDATE_ADDRESS,
  UPDATE_CITY,
  UPDATE_STATE,
  UPDATE_ZIPCODE
} from "../../store";
import axios from 'axios'

export default class Step1 extends Component {
  constructor() {
    super();
    const reduxState = store.getState();
    this.state = {
      name: reduxState.name,
      address: reduxState.address,
      city: reduxState.city,
      state: reduxState.state,
      zipcode: reduxState.zipcode
    };
  }
//how do I add subscribe in here
  // componentDidMount() {
  //   axios.get("/api/houses").then(res => {
  //     this.setState({
  //       houses: res.data
  //     });
  //   });
  // }





  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };


  step1 = () => {
    store.dispatch({
      type: UPDATE_NAME,
      payload: this.state
    });
    store.dispatch({
      type: UPDATE_ADDRESS,
      payload: this.state
    });
    store.dispatch({
      type: UPDATE_CITY,
      payload: this.state
    });
    store.dispatch({
      type: UPDATE_STATE,
      payload: this.state
    });
    store.dispatch({
      type: UPDATE_ZIPCODE,
      payload: this.state
    });
  };

  render() {
    return (
      <div>
      <form action="step1">
          <input
            placeholder="name"
            type="text"
            name="name"
            onChange={e => this.handleChange(e)}
          />
          <input
            placeholder="address"
            type="text"
            name="address"
            onChange={e => this.handleChange(e)}
          />
          <input
            placeholder="city"
            type="text"
            name="city"
            onChange={e => this.handleChange(e)}
          />
          <input
            placeholder="state"
            type="text"
            name="state"
            onChange={e => this.handleChange(e)}
          />
          <input
            placeholder="zipcode"
            type="text"
            name="zipcode"
            onChange={e => this.handleChange(e)}
          />
          </form>
        <input onChange={e => this.handleChange(e)} />
        <Link to="/wizard/step2">
          <button onClick={this.step1}>Next Step</button>
        </Link>
      </div>
    );
  }
}
