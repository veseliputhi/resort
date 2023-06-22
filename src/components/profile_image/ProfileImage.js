import React, { Component } from 'react';

import "./ProfileImage.css";

export class ProfileImage extends Component {
  render = () =>
    <div>
        <img className='profile_image' src={this.props.image} alt={this.props.alt} />
    </div>
}
