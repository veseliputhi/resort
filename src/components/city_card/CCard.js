import React, { Component } from 'react';
import { FaLocationPinLock } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";


import './CCard.css';

export class CCard extends Component {
  render = () =>
    <div className='ccard'>
      <img src='https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60' alt="city" />
      <div className='ccard_details'>
        <div className='price_tag'>
          <p>$600.00</p>
          <p>Booking ID: 9837432</p>
          <p>Turkey Resort</p>
        </div>
        <div className='location'>
          <i><ImLocation2 /></i>
          <p>{this.props.location}</p>
        </div>
      </div>
    </div>
}
