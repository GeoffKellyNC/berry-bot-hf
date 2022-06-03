import React from "react";
import styled from "styled-components";

import Nav from "./Nav";

function Header() {
  return (
    <HeaderStyled>
      <p className="header-title">hFernz Queue</p>
      <p className = 'tag-text'>Berry Bot Command</p>
      <Nav />
    </HeaderStyled>
  );
}

export default Header;

const HeaderStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${'' /* background-color: ${(pr) => pr.theme.colors.accent}; */}
  color: white;
  min-width: 100%;
  height: 8rem;
  ${'' /* border-radius: 16px; */}
  background: rgba( 252, 16, 67, 0.75 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 2.5px );
  -webkit-backdrop-filter: blur( 2.5px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );

  .header-title {
    font-size: ${(pr) => pr.theme.fontSizes.large};
    font-family: ${(pr) => pr.theme.fonts.primary};
  }
`
