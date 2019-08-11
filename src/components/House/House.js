import React, { Component } from 'react'





export default class House extends Component {

    render() {
        // console.log(this.props.remove)
        return (
            <div>
               <h1>{this.props.ele.name}</h1> 
               <h1>{this.props.ele.address}</h1> 
               <h1>{this.props.ele.state}</h1> 
               <h1>{this.props.ele.city}</h1> 
               <h1>{this.props.ele.zipcode}</h1> 
               <button onClick={(id) => this.props.remove(this.props.ele.id)}>Delete</button>
               </div>
        )
    }
}
