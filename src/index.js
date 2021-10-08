import React from 'react';
import ReactDOM from 'react-dom';
//-- Components
import WorldMapWithFlags from './components/WorldMapWithFlags';
//-- Styles
import "./style.css";


ReactDOM.render(
  <React.StrictMode>
    <WorldMapWithFlags />
  </React.StrictMode>,
  document.getElementById('root')
);