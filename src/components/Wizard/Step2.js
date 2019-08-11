import React, { Component } from "react";
import { Link } from "react-router-dom";
import store, { UPDATE_IMG } from "../../store";

export default class Step2 extends Component {
  constructor(){
    super()
    const reduxState = store.getState()
    this.state = {
      img: reduxState.img
    };
  }
  //work on showing an image of the houses themselves and the overall
  //functionality of delete and post of image [to see houses]
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  step2 = () => {
    store.dispatch({
      type: UPDATE_IMG,
      payload: this.state.img
    });
  };

  render() {
    return (
      <div>
        <input
          placeholder="img"
          type=""
          name="img"
          onChange={e => this.handleChange(e)}
        />
        <Link to="/wizard/step3">
          <button onClick={this.step2}>Next Step</button>
        </Link>
        <Link to="/wizard/step1">
          <button>Back</button>
        </Link>
      </div>
    );
  }
}
