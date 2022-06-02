import React from 'react'
import styled from 'styled-components'

import * as actions from '../../redux/action-creators'
import { connect } from 'react-redux'

import BotPower from './BotPower';
import ReloadBot from './ReloadBot';
import Voting from './Voting';

function ControlPanel(props) {

    const { 
        botData, 
        startBot,
        reloadServer,
        } = props;


    return (
        <ControlPanelStyled>
            <BotPower botData={botData} startBot={startBot} />
            <ReloadBot reloadServer={reloadServer} botData = {botData} />
            <Voting  />
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
    color: white;
    width: 50%;


`