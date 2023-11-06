import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
 //import { ReactDOM } from 'react';

 //import ReactDOM from 'react-dom';

function App() {
  return (
    <div className="App">
    ssszzzzzmmmmmm
    </div>
  );
}


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

class App extends Component {
  render() {
    return (
      <div>
        <h1>Это компонент внутри корневого элемента</h1>
        <PortalExample>
          <h2>Этот компонент рендерится вне корневого элемента</h2>
        </PortalExample>
      </div>
    );
  }
}
*/
export default App;
