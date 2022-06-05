import React from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { BsPlayBtn } from "react-icons/bs";
import styled from "styled-components";

function QueueItem(props) {
  const { data, deleteQueueItem, refreshQueue } = props;


  const handleDelete = () => {
    deleteQueueItem(data.id);
    setTimeout(() => {
      refreshQueue();
    }, 150);
  };


  return (
    <QueueItemStyled>
      <div className="item-text">
        <p className="name item-title">
          User: <span className="userName item-title">{data.user}</span>
        </p>
        <p className="message item-title">
          Link:{" "}
          <a
            href={data.message}
            className="sub-link"
            target="_blank"
            rel="noreferrer"
          >
            SUBMISSION LINK
            <span> <BsPlayBtn /> </span>
          </a>{" "}
        </p>
        <p className="id item-title">
          ID: <span className="item-id">{data.id}</span>
        </p>
        <div className = 'delete-btn'>
          <TiDeleteOutline onClick={() => handleDelete(data.id)} />
        </div>
      </div>
    </QueueItemStyled>
  );
}

export default QueueItem;

const QueueItemStyled = styled.div`
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

  &:hover {
    background-color: ${(pr) => pr.theme.colors.secondary};
    color: ${(pr) => pr.theme.colors.lightBlack};
  }

  .item-text {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 0 auto; 
  }

  .sub-link {
    color: ${(pr) => pr.theme.colors.primary};
    text-decoration: none;
    transition: all 0.3s ease;
  }

  .sub-link:hover {
    text-decoration: underline;
    color: ${(pr) => pr.theme.colors.accent};
  }

  .userName {
    color: ${(pr) => pr.theme.colors.accent};
    font-size: ${(pr) => pr.theme.fontSizes.small};
  }

  .item-title {
    font-size: ${(pr) => pr.theme.fontSizes.medium};
    margin-bottom: 0;
  }

  .delete-btn {
    font-size: ${(pr) => pr.theme.fontSizes.small};
    color: ${(pr) => pr.theme.colors.accent};
    cursor: pointer;
  }

  @media (max-width: 585px) {
    .item-text {
      flex-direction: column;
    }

    .item-title {
      font-size: ${(pr) => pr.theme.fontSizes.small};
    }

    .delete-btn {
      font-size: ${(pr) => pr.theme.fontSizes.small};
    }
  }
`;
