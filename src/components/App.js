import "../master-styles/App.css";

import React from "react";
import styled from "styled-components";

import Header from "./Header/Header";
import Queue from "./Request-Queue/Queue";
import ControlPanel from "./control-panel/ControlPanel";
import ModPanel from "./modPanel/ModPanel";


function App() {

  return (
    <AppStyled className="App">
      <Header />
      <div className="app-content">
        <ControlPanel />
        <Queue />
        <ModPanel />
      </div>
    </AppStyled>
  );
}

export default App;

const AppStyled = styled.div`

 


  @media (max-width: 1150px) {
    .app-content {
      flex-direction: column;
      align-items: center;
    }
  }

`;
