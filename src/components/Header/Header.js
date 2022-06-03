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
  background-color: ${(pr) => pr.theme.colors.accent};
  color: white;
  min-width: 100%;
  height: 8rem;
  ${'' /* border-radius: 16px; */}

  .header-title {
    font-size: ${(pr) => pr.theme.fontSizes.large};
    font-family: ${(pr) => pr.theme.fonts.primary};
  }
`
