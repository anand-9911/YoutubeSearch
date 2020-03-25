import React from 'react';
import './App.css';
import Searchbar from './components/Searchbar';

class App extends React.Component {
  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <Searchbar />
      </div>
    );
  }
}

export default App;
