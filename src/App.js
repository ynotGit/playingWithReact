import React, { Component } from 'react';

//Components 
import Header from './components/headerComponent/header';
import MainPage from './components/pages/mainPage';
import Footer from './components/footer';

//CSS
import './assets/css/default.min.css';

class App extends Component {
  render() {
    return (
      <div className='appContainer'>
        <Header />
        <MainPage />
        <Footer />
      </div>
    );
  }
}

export default App;
