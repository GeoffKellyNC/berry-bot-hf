import React from 'react'
import styled from 'styled-components'

function UserPoints({ userPoints }) {


  return (
    <UserPointsStyled>
        <p className = 'points-name title'>User: 
            <span>{ userPoints.user }</span>
        </p>
        <p className = 'points title'>Points:
            <span>{ userPoints.points }</span>
        </p>
    </UserPointsStyled>
  )
}

export default UserPoints

const UserPointsStyled = styled.div`
    color: ${(pr) => pr.theme.colors.fontSecondary};
    font-family: ${(pr) => pr.theme.fonts.primary};
    padding: 10px;
    border-bottom: 1px solid ${(pr) => pr.theme.colors.primary};
    ${'' /* background-color: ${(pr) => pr.theme.colors.lightBlack}; */}
    transition: all 0.3s ease-in;
    background: rgba( 251, 15, 67, 0.15 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 2.5px );
    -webkit-backdrop-filter: blur( 2.5px );
    border-radius: 10px;
    padding: 10px;
    margin: 10px 0;
    display: flex;
    flex-direction: row;
    gap: 5%;
    margin: 2% 0;
    width: 30%;
    



    .title {
        font-size: ${pr => pr.theme.fontSizes.medium};
    }

    .title span {
        margin-left: 25px;
    }


`