import React, { Component } from 'react';

import { Navlink } from '../navlink/Navlink';
import { Button } from '../button/Button';

import "./Navbar.css";

export class Navbar extends Component{

  render = () =>
    <div className="navbar container">
      <h1>jdP Resort</h1>
      <ul className="nav-links">
        <li><Navlink name="Home" /></li>
        <li><Navlink name="Rooms" /></li>
        <li><Navlink name="Prices" /></li>
        <li><Navlink name="Locations" /></li>
      </ul>
      <div className='button'>
        <Button name="Login" />
      </div>
    </div>
}
