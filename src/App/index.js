import React from 'react';
import { Body } from './Body';

export const App = () => {

  const renderHeader = () => {
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
        <a href="https://clearbit.com" target='_blank' rel='noopener noreferrer'>
          Logos provided by Clearbit
        </a>
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