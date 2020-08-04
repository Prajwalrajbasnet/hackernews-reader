import React from 'react';
import Header from './components/Header';
import StoriesList from './components/StoriesList';
import Footer from './components/Footer';
// import { Switch, Route } from 'react-router-dom';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <Header />
        <div className="stories-container">
          <StoriesList />
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;
