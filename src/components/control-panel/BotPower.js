import React from 'react'
import styled from 'styled-components'

function BotPower({startBot, botData, getBotData, stopBot}) {

    const handleClick = async () => {
        try {
            await getBotData()
            await startBot()
        } catch (error) {
            console.log(error)
        }
    }

    const handleStop = async () => {
        try {
            await getBotData()
            await stopBot()
        } catch (error) {
            console.log(error)
        }
    }


  return (
    <BotPowerStyled>
         <button 
            className={botData.main_running === true ? 'bot-running-btn' : 'bot-no-running-btn'}
            onClick={handleClick}> Start Bot </button>
            <button
                className= 'disabled'
                onClick={handleStop}> Stop Bot </button>

    </BotPowerStyled>
  )
}

export default BotPower


const BotPowerStyled = styled.div`
    font-family: ${(pr) => pr.theme.fonts.primary};
 

    .bot-no-running-btn {
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

    .bot-running-btn {
        margin: 1rem;
        background: green;
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

    .disabled {
        pointer-events: none;
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

    

    .bot-no-running-text {
        color: red;
        font-size: 1.2rem;
        font-family: ${(pr) => pr.theme.fonts.primary};
    }


`