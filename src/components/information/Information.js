import React, { Component } from 'react';
import { Facilities } from '../facilities/Facilities';
import { Offer } from '../offer/Offer';
import { Results } from '../results/Results';


import "./Information.css";

export class Information extends Component {
  render = () =>
    <div className='info_container'>
      <div className='info_inner_container'>
        <Facilities />
        <Offer />
        <Results />
        </div>
    </div>
}
