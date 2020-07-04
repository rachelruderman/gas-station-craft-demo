import React from 'react';

export const App = () => {

  const renderHeader = () => {
    return (
      <header>
        <h1>Low on fuel?</h1>
        <h3>Find your nearest gas stations</h3>
      </header>
    )
  }

  const renderBody = () => {
    return (
      <div>
        <button>Find local gas stations</button>
      </div>
    )
  }

  return (
    <div id="app">
      <div id='content'>
        {renderHeader()}



      </div>

    </div>
  );
}