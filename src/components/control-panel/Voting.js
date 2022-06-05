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
        <button onClick={startVote} className="  start-vote-btn disabled">
            Start Vote
        </button>
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
    font-family: ${(pr) => pr.theme.fonts.primary};


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
        height: 3rem;
        width: 8rem;
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

`