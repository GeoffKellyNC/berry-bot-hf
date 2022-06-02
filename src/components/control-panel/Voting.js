import React from 'react'
import styled from 'styled-components'
import * as actions from '../../redux/action-creators'
import { connect } from 'react-redux'

function Voting(props) {

    const { 
        botData, 
        startVote } = props;

  return (
    <VotingStyled>
        <button onClick={startVote} className="  start-vote-btn">
            Start Vote
        </button>
        {
            botData.isVoting === true ? <p className="is-voting-text">Voting is running</p> : <p className="is-not-voting-text">Voting is not running</p>
        }
    </VotingStyled>
  )
}

const mapStateToProps = (state) => {
    return {
        botData: state.botData,
    };
};

export default connect(mapStateToProps, actions)(Voting)


const VotingStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 50%;
    font-family: ${(pr) => pr.theme.fonts.primary};
    background: ${(pr) => pr.theme.colors.lightBlack};

    .start-vote-btn {
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

    .disabled{
        pointer-events: none;
    }

    .is-voting-text {
        color: green;
        font-size: 1.2rem;
        font-family: ${(pr) => pr.theme.fonts.primary};
    }

    .is-not-voting-text {
        color: red;
        font-size: 1.2rem;
        font-family: ${(pr) => pr.theme.fonts.primary};
    }

`