import React, { Component } from "react";
import { Link } from "react-router-dom";
import store, {
  UPDATE_NAME,
  UPDATE_ADDRESS,
  UPDATE_CITY,
  UPDATE_STATE,
  UPDATE_ZIP
} from "../../store";

export default class Step1 extends Component {
  constructor() {
    super();
    const reduxState = store.getState();
    this.state = {
      name: reduxState.name,
      address: reduxState.address,
      city: reduxState.city,
      state: reduxState.state,
      zip: reduxState.zip
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
      payload: this.state.name
    });
    store.dispatch({
      type: UPDATE_ADDRESS,
      payload: this.state.address
    });
    store.dispatch({
      type: UPDATE_CITY,
      payload: this.state.city
    });
    store.dispatch({
      type: UPDATE_STATE,
      payload: this.state.state
    });
    store.dispatch({
      type: UPDATE_ZIP,
      payload: this.state.zip
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
            placeholder="zip"
            type="text"
            name="zip"
            onChange={e => this.handleChange(e)}
          />
          </form>
        <Link to="/wizard/step2">
          <button onClick={this.step1}>Next Step</button>
        </Link>
      </div>
    );
  }
}
