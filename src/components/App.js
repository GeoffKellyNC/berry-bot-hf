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
    margin: 5%;
    display: flex;
    flex-direction: ;
    justify-content: space-around;
    width: 100%;
  }


  @media (max-width: 1150px) {
    .app-content {
      flex-direction: column;
      align-items: center;
  }

`;
