import React, { Component } from 'react'
import House from './components/House'
import {Link} from 'react-router-dom'
import axios from 'axios'




export default class Dashboard extends Component {
    constructor(){
        super()
        this.state = {
            houses:[]
        }
    }


componentDidMount(){
    axios.get('/api/houses').then( res => {
        this.setState({
        houses:res.data
        })
    })
}




    render() {
        return (
            <div>
               <h1>DashBoard</h1> 
               <Link to='/wizard'>
               <button>Add New Property</button>
               </Link>
            </div>

        )
    }
}
