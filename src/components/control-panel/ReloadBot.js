import React from 'react'
import styled from 'styled-components'

function ReloadBot({ reloadServer, botData }) {
  return (
    <ReloadStyled>
        <button 
        className='reload-btn'
        onClick={reloadServer}> Reload Bot </button>
    </ReloadStyled>
  )
}

export default ReloadBot


const ReloadStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 50%;
    font-family: ${(pr) => pr.theme.fonts.primary};
    background: ${(pr) => pr.theme.colors.lightBlack};
    ${'' /* border-radius: 16px; */}

    .reload-btn {
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


`