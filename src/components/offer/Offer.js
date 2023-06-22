import React, { Component } from 'react'
import { BsCheckCircleFill } from "react-icons/bs";

import './Offer.css';

export class Offer extends Component {
  render = () =>
    <div className='hotel_offer'>
        <h2>Hotels For You</h2>
        <p>5 Days 6 Nights</p>
        <div className='hotel_offer_price'>
            <i><BsCheckCircleFill /></i>
            <p>USD $506.00</p>
        </div>
    </div>
}
