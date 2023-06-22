import React, { Component } from 'react'
import { IconText } from '../icon_text/IconText';
import { FaSwimmingPool, FaWifi } from 'react-icons/fa';
import { TbAirConditioning } from "react-icons/tb";
import { GiMeal } from "react-icons/gi";

import './Facilities.css';

export class Facilities extends Component {
  render = () =>
    <div className='facilities_card'>
        <div className='heading'>
            <h2>Facilities</h2>
            <a href=''>See More</a>
        </div>
        <div className='facilities' >
            <IconText className='icon_text' icon={<FaSwimmingPool />} text='Swimming' />
            <IconText className='icon_text' icon={<FaWifi />} text='Wi-Fi' />
            <IconText className='icon_text' icon={<TbAirConditioning />} text='AC' />
            <IconText className='icon_text' icon={<GiMeal />} text='Dinner' />
        </div>
    </div>

}
