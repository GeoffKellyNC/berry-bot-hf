import React from 'react'
import styled from 'styled-components'

function Nav() {
  return (
    <NavStyled>
        {/* <p>Home</p> */}
    </NavStyled>
  )
}

export default Nav

const NavStyled = styled.nav`
    padding: 0;
    margin: 0;
    font-family: ${(pr) => pr.theme.fonts.primary};

`