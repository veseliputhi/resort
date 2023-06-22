import React, { Component } from 'react'

import "./Navlink.css"

export class Navlink extends Component {
  render = () =>
    <>
        <a className="link" href="">{this.props.name}</a>
    </>
}
