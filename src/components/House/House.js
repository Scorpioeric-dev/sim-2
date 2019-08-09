import React, { Component } from 'react'





export default class House extends Component {
    render() {
        return (
            <div>
               <h1>{this.props.ele.name}</h1> 
               <h1>{this.props.ele.address}</h1> 
               <h1>{this.props.ele.state}</h1> 
               <h1>{this.props.ele.city}</h1> 
               <h1>{this.props.ele.zipcode}</h1> 
               <button>Delete</button>
               </div>
        )
    }
}
