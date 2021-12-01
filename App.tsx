import React, { Component } from 'react';
import './App.css';
import FormJSON from "./FormElements.json"
import  { useState, useEffect } from 'react';
import DynamicElements from './DynamicElements';
import { createContext } from 'react';
import Card from './Card';
import AutoComplete from './AutoComplete';
import {CitiesData, renderCityTitle} from "./CitiesList"


function App() {
  
  
  return (
    <div className="App styleAdd">
      <header className="App-header">
<AutoComplete />      </header>
    </div>
  );
}

export default App;
