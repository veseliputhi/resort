import React, { Component } from 'react';

import './IconText.css';

export class IconText extends Component {
  render = () =>
    <div>
        <i>{this.props.icon }</i>
        <p>{ this.props.text }</p>
    </div>
}
