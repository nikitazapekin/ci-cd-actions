/*import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
*/


import React, { Component } from 'react';
 import ReactDOM from 'react-dom';
import App from './App';
/*
class PortalExample extends Component {
  constructor(props) {
    super(props);
    this.portalContainer = document.createElement('div');
    document.body.appendChild(this.portalContainer);
  }

  componentWillUnmount() {
    document.body.removeChild(this.portalContainer);
  }

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.portalContainer
    );
  }
} */
ReactDOM.render(<App />, document.getElementById('root'));
