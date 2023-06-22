import React, { Component } from 'react';
import { IconText } from '../icon_text/IconText';
import { ProfileImage } from '../profile_image/ProfileImage';
import { FaSwimmingPool, FaWifi } from 'react-icons/fa';

import Profile from '../../assets/profile.jpg';
import './Surprises.css';

export class Surprises extends Component {
  render = () =>
    <div className='surprises_container container'>
        <div className='surprise_list'>
            <h1>Resort Surprises</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
                Donec 
            </p>
            <div className='surprise_items'>
                <IconText icon={<FaSwimmingPool/>} text="Infinity Pool" />
                <IconText icon={<FaSwimmingPool/>} text="The Beach" />
                <IconText icon={<FaSwimmingPool/>} text="Beach Surprise" />
                <IconText icon={<FaSwimmingPool/>} text="Beach Activities" />
            </div>
            
        </div>
        <div className='surprise_image'>
            <div className='big_image'>
                <img src='https://images.unsplash.com/photo-1687178101608-fadc5f1b5a2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=400&q=60' alt="surprise" />
            </div>
            <div className='surprise_profile_container'>
                <div className='surprise_profiles'>
                    <ProfileImage image={Profile} alt="profile" />
                    <ProfileImage image={Profile} alt="profile" />
                    <ProfileImage image={Profile} alt="profile" />
                    <ProfileImage image={Profile} alt="profile" />
                    <ProfileImage image={Profile} alt="profile" />
                </div>
                <p>Play your favorite</p>
            </div>
        </div>
    </div>
}
