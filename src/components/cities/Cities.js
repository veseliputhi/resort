import React, { Component } from 'react';
import { CCard } from '../city_card/CCard';

import { AiOutlineDown } from "react-icons/ai";

import './Cities.css';

export class Cities extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        cities: ['USA', 'Thiland', 'India'],
      }
    }

    addCities = () => {
        this.setState({cities: [...this.state.cities, 'Inida']});
    }

    render = () =>
    <>
        <div className='cities_container container'> 
            <h1>Entire city of choice</h1>
            <div className='cities'>
                {this.state.cities.map( city => 
                    <CCard location={city}/>
                )}
                {/* <CCard location="USA" />
                <CCard location="Thailand"/>
                <CCard location="India"/> */}
            </div>
        </div>
        <div className="more_container container">
            <button onClick={this.addCities}>
                <i><AiOutlineDown /></i>
            </button>
        </div>
    </>
}
