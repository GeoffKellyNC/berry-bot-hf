import "../master-styles/App.css";

import React from "react";
import styled from "styled-components";

import Header from "./Header/Header";
import Queue from "./Request-Queue/Queue";
import ControlPanel from "./control-panel/ControlPanel";


function App() {






  return (
    <AppStyled className="App">
      <Header />
      <div className="app-content">
        <Queue />
        <ControlPanel />
      </div>
    </AppStyled>
  );
}

export default App;

const AppStyled = styled.div`

  .app-content {
    display: flex;
    flex-direction: ;
    justify-content: space-between;
    width: 100%;
  }

`;
