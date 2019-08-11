import React, { Component } from 'react'





export default class House extends Component {

    render() {
        console.log(this.props.ele)
        return (
            <div>
               <h1>{this.props.ele.name}</h1> 
               <h1>{this.props.ele.address}</h1> 
               <h1>{this.props.ele.state}</h1> 
               <h1>{this.props.ele.city}</h1> 
               <h1>{this.props.ele.zipcode}</h1>
               <h1>{this.props.ele.rentAmount}</h1>
               <h1>{this.props.ele.mortgage}</h1>
               <img src={this.props.ele.img} alt=""/> 
               <button onClick={(id) => this.props.remove(this.props.ele.id)}>Delete</button>
               </div>
        )
    }
}
