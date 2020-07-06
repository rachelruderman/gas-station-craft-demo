import React from 'react';
import { Body } from './Body';

export const App = () => {

  const renderHeader = () => {
    console.log('hi rachel, heres your env variables', process.env);
    return (
      <header>
        <h1>Running on empty?</h1>
        <h3>Take a break, grab a coffee and fuel up!</h3>
      </header>
    )
  }

  const renderBody = () => <Body/>;

  const renderFooter = () => {
    const currentYear = new Date().getFullYear();
    return (
      <footer>
        <div>Fuel Up &copy; {currentYear}</div>
        <a href="https://clearbit.com">Logos provided by Clearbit</a>
      </footer>
    )
  }

  return (
    <div id="app">
        {renderHeader()}
        {renderBody()}
        {renderFooter()}
    </div>
  );
}