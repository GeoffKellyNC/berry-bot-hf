/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect} from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import * as actions from "../../redux/action-creators";

import QueueItem from "./QueueItem";

function Queue(props) {
  const { queue, fetchQueue, deleteQueueItem} = props;


  useEffect(() => {
    fetchQueue();
  }, []);

  const refreshQueue = () => {
    fetchQueue();
  };


  return (
    <QueueStyled>
      <h1 className="queue-header-text">Queue</h1>
      <button onClick={refreshQueue} className="refresh-btn">
        Refresh Queue
      </button>
      <div className="queue-items">
        {
          !Array.isArray(queue) ? (
            <h2 className="no-queue-text">No Queue Items</h2>
          ) : (
            queue.map((item) => {
          return (
            <QueueItem
              key={item.id}
              data={item}
              deleteQueueItem={deleteQueueItem}
              refreshQueue = {refreshQueue}
            />
          );
        })
          )
        }
      </div>
    </QueueStyled>
  );
}

const mapStateToProps = (state) => {
  return {
    queue: state.queue,
  };
};

export default connect(mapStateToProps, actions)(Queue);

const QueueStyled = styled.div`
  color: white;
  font-family: ${(pr) => pr.theme.fonts.primary};
  ${'' /* background: ${(pr) => pr.theme.colors.lightBlack}; */}
  width: 50%;
  height: 100%;
  border-radius: 16px;
  ${'' /* background: rgba( 251, 15, 67, 0.15 ); */}


  .queue-header-text {
    font-size: ${(pr) => pr.theme.fontSizes.xlarge};
    margin-bottom: 0;
    margin-top: 0;
    text-align: center;
    color: ${(pr) => pr.theme.colors.secondary};
  }

  .refresh-btn {
    background: ${(pr) => pr.theme.colors.primary};
    color: white;
    border: none;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 10px;
    transition: all 0.3s ease;
    width: 10em;
    font-size: ${(pr) => pr.theme.fontSizes.small};
    cursor: pointer;
    font-family: ${(pr) => pr.theme.fonts.primary};
  }

  .refresh-btn:hover {
    background: ${(pr) => pr.theme.colors.secondary};
    color: white;
  } 

  @media (max-width: 1220px) {
    width: 100%;
  }

  @media (max-width: 585px) {
    .refresh-btn {
      ${'' /* center button */}
      margin: 0 auto;
      display: block;
      width: 100%;

  }
`;
