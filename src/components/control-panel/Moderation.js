import React from 'react'
import styled from 'styled-components'

function Moderation({ startMod }) {
  return (
    <ModStyled>
        <button 
            className = 'mod-btn'
            onClick = { startMod }>
            Start Mod Bot
        </button>
    </ModStyled>
  )
}

export default Moderation


const ModStyled = styled.div`
    font-family: ${(pr) => pr.theme.fonts.primary};


    .mod-btn {
        margin: 1rem;
        background: ${(pr) => pr.theme.colors.primary};
        color: white;
        border: none;
        border-radius: 5px;
        padding: 8px 16px;
        font-size: 16px;
        font-family: ${(pr) => pr.theme.fonts.primary};
        cursor: pointer;
        height: 3rem;
        width: 8rem;
        outline: none;
        transition: all 0.2s ease-in-out;
        &:hover {
            background: ${(pr) => pr.theme.colors.accent};
            scale: 1.1;
        }
    }

    ${'' /* .bot-running-txt {
        color: green;
        font-size: 1.2rem;
        font-family: ${(pr) => pr.theme.fonts.primary};
    }

    .bot-no-running-text {
        color: red;
        font-size: 1.2rem;
        font-family: ${(pr) => pr.theme.fonts.primary};
    } */}
`