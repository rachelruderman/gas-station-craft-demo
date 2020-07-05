import React from 'react';
import { Cta } from './Cta';

export const App = () => {

  const renderHeader = () => {
    return (
      <header>
        <h1>Running on empty?</h1>
        <h3>Take a break, grab a coffee and fuel up!</h3>
      </header>
    )
  }

  const renderBody = () => {
    return (
      <div id='body'>
        <Cta/>
      </div>
    )
  }

  const renderFooter = () => {
    const currentYear = new Date().getFullYear();
    return (
      <footer>
        Fuel Up &copy; {currentYear}
      </footer>
    )
  }

  return (
    <div id="app">
      <div id='content'>
        {renderHeader()}
        {renderBody()}
        {renderFooter()}
      </div>
    </div>
  );
}