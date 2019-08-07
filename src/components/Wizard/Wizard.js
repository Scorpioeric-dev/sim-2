import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Wizard extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zipcode: ""
    };
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <form action="submit">
          <input placeholder="name" type="text" name="name" onChange={e => this.handleChange(e)}/>
          <input placeholder="address" type="text" name="address" onChange={e => this.handleChange(e)} />
          <input placeholder="city" type="text" name="city" onChange={e => this.handleChange(e)} />
          <input placeholder="state" type="text" name="state" onChange={e => this.handleChange(e)} />
          <input placeholder="zipcode" type="text" name="zipcode" onChange={e => this.handleChange(e)} />
        </form>
        <h1>Wizard</h1>
        <Link to="/dashBoard">
          <button>Cancel</button>
        </Link>
      </div>
    );
  }
}
