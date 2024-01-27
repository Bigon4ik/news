import React, {createContext, useState} from 'react';
import Header from './component/Header/Header';
import {ThemeContext, ThemeProvider} from './context/ThemeContext';
import Main from './pages/Main/Main';

function App() {

  return (

      <ThemeProvider>
          <div className={`app ${false ? 'dark': "light" }`}>
              <Header/>
              <div className="container">
                  <Main isDark={false}/>
              </div>

          </div>
      </ThemeProvider>

  );
}

export default App;
