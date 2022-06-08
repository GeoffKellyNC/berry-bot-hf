/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios';

import * as actions from '../../redux/action-creators'
import { connect } from 'react-redux'

import BotPower from './BotPower';
import ReloadBot from './ReloadBot';
import Voting from './Voting';
import Moderation from './Moderation';

function ControlPanel(props) {

    const { 
        startBot,
        reloadServer,
        startMod,
        stopBot
        } = props;


    const [ botData, setBotData ] = useState({})

    const STATUS_API = process.env.REACT_APP_STATUS_API;

    function getBotData () {
        axios.get(STATUS_API)
        .then(res => {
            setBotData(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    useEffect(  () => {
        async function onLoad () {
            await getBotData()
        }
        onLoad()
    }, []);




    return (
        <ControlPanelStyled>
            <h2 className = 'control-header'> Bot Controls </h2>
            <div className='control-btns'>
                <BotPower  startBot={startBot} botData = {botData} getBotData = {getBotData} stopBot = {stopBot} />
                <ReloadBot reloadServer={reloadServer}  />
                <Voting  />
                <Moderation  startMod = {startMod} />
            </div>
        </ControlPanelStyled>
    )
}

const mapStateToProps = (state) => {
    return {
        botData: state.botData,
    };
};

export default connect(mapStateToProps, actions)(ControlPanel);

const ControlPanelStyled = styled.div`


    .control-header {
        font-size: ${(pr) => pr.theme.fontSizes.large};
        font-family: ${(pr) => pr.theme.fonts.primary};
        margin-bottom: 1rem;
        color: ${(pr) => pr.theme.colors.primary};
        text-align: center;
        margin-top: 1rem;
    }

    .control-btns {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        margin-bottom: 1rem;
    }
   
   
    


`