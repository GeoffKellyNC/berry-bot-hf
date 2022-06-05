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
        <div className="top-row">
          <Queue />
          <ControlPanel />
        </div>
        <ModPanel />
      </div>
    </AppStyled>
  );
}

export default App;

const AppStyled = styled.div`

  .top-row {
    margin: 5%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
  }


  @media (max-width: 1150px) {
    .app-content {
      flex-direction: column;
      align-items: center;
  }

`;
