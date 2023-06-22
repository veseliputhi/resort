import React, { Component } from 'react'

import "./Hero.css";
import ResortImg from "../../assets/resort.jpg";

export class Hero extends Component {
  render = () =>
    <div id='block' className='container'>
      <div id='img' >
          <div id='text'>
            <p id='title'>Enjoy Your<br/>Dream Vacation</p>
            <p id='descr'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
              Donec tincidunt enim a massa molestie, vel volutpat massa dictum.
            </p>
          </div>
          <img src={ResortImg} id="resort" alt='resort_img'/>
      </div>
    </div>
}

