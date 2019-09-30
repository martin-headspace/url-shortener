import React from 'react';
import Homepage from './pages/Homepage'
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { reset, themes } from "react95";
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
