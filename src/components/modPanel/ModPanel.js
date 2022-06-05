import React, { useEffect } from 'react'
import styled from 'styled-components'

import * as actions from '../../redux/action-creators'
import { connect } from 'react-redux'

import UserPoints from './UserPoints'

function ModPanel(props) {

    const { 
    userPoints,
    getPoints } = props

    useEffect(() => {
        getPoints()
        console.log('userPoints: ', userPoints)

    }, [])


  return (
    <ModPanelStyled>
        <div className = 'chat-points-sec'>
            <h3> Chat Mod Points</h3>
            {
                userPoints.map(obj => {
                    return <UserPoints key={obj.id} userPoints ={obj} />
                })
            }
        </div>
    </ModPanelStyled>
  )}

const mapStateToProps = (state) => {
    return {
        userPoints: state.userPoints,
    }
}


export default connect(mapStateToProps, actions)(ModPanel)


const ModPanelStyled = styled.div`

    .chat-points-sec h3 {
        color: ${pr => pr.theme.colors.primary};
        font-family: ${pr => pr.theme.fonts.primary};
        font-size: ${pr => pr.theme.fontSizes.large};
    }

`