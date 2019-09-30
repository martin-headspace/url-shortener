import React from 'react';
import Homepage from './pages/Homepage'
import createBrowserHistory from 'history/createBrowserHistory'
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { reset, themes } from "react95";
export const history = createBrowserHistory()
const ResetStyles = createGlobalStyle`
  ${reset}
`;

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ResetStyles />
        <ThemeProvider theme={themes.default}>
          <Homepage/>
        </ThemeProvider>
      </div>
    )
  }
}

export default App;
