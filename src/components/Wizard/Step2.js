import React, { Component } from "react";
import { Link } from "react-router-dom";
import store, { UPDATE_IMG } from "../../store";

export default class Step2 extends Component {
  state = {
    img: ""
  };
  //work on showing an image of the houses themselves and the overall
  //functionality of delete and post of image [to see houses]
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submit = () => {
    store.dispatch({
      type: UPDATE_IMG,
      payload: this.state
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
          <button>Next Step</button>
        </Link>
        <Link to="/wizard/step1">
          <button>Back</button>
        </Link>
      </div>
    );
  }
}
