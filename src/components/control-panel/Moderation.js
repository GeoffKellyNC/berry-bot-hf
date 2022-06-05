import React from 'react'
import styled from 'styled-components'

function Moderation({ startMod, botData }) {
  return (
    <ModStyled>
        <button 
            className = 'mod-btn'
            onClick = { startMod }>
            Start Moderation
        </button>
        {
            botData.isMod === true ? <p className = 'bot-running-txt'>Mod Active </p> :
            <p className = 'bot-no-running-text'>Mod Not Active </p>
        }

    </ModStyled>
  )
}

export default Moderation


const ModStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 50%;
    font-family: ${(pr) => pr.theme.fonts.primary};
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 2.5px );
    -webkit-backdrop-filter: blur( 2.5px );
    border-radius: 10px;

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
        outline: none;
        transition: all 0.2s ease-in-out;
        &:hover {
            background: ${(pr) => pr.theme.colors.accent};
            scale: 1.1;
        }

    }

    .bot-running-txt {
        color: green;
        font-size: 1.2rem;
        font-family: ${(pr) => pr.theme.fonts.primary};
    }

    .bot-no-running-text {
        color: red;
        font-size: 1.2rem;
        font-family: ${(pr) => pr.theme.fonts.primary};
    }
`