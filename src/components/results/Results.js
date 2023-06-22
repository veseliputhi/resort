import React, { Component } from 'react';
import { ProfileImage } from '../profile_image/ProfileImage';
import { ImPencil, ImSearch } from "react-icons/im";

import Profile from '../../assets/profile.jpg';

import './Results.css';

export class Results extends Component {
  render = () =>
    <div>
        <div className='results_container'>
            <p>150 Results</p>
            <i><ImPencil /></i>
            <i><ImSearch /></i>
        </div>
        <div className='profiles'>
            <ProfileImage image={Profile} alt="profile" />
            <ProfileImage image={Profile} alt="profile" />
            <ProfileImage image={Profile} alt="profile" />
            <ProfileImage image={Profile} alt="profile" />
            <ProfileImage image={Profile} alt="profile" />
        </div>
    </div>
}
