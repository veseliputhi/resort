import React, { Component } from 'react';
import { Navbar } from "./components/navbar/Navbar";
import { Hero } from "./components/hero/Hero";
import { Information } from "./components/information/Information";
import { Cities } from './components/cities/Cities';
import { Surprises } from './components/surprises/Surprises';
import "./App.css";


export default class App extends Component {

  render = () =>
    <>
      <Navbar />
      <Hero />
      <Information />
      <Cities />
      <Surprises />
    </>
    
}
