import axios from "axios";


import * as types from "./action-types";

const QUEUE_API = 'https://6296b12957b625860611e8c6.mockapi.io/queue'

// const QUEUE_API = 'http://localhost:9000/queue'


export const fetchQueue = () => (dispatch) => {
  axios.get(QUEUE_API).then((res) => {
    const queue = [...res.data];
    dispatch({
      type: types.GET_QUEUE,
      payload: queue,
    });
  });
};

export const deleteQueueItem = (id) => (dispatch) => {
  const headers = {
    "Authorization": "Bearer ya29.c.b0AXv0zTMSFGGMj3GFqd89_kdjFAJA2UY-mr5ckq3-Ahm66Ov2csrQb7AE8POMUEQbFUPuPQcnBt4M9AxEAnkqQIV06i-NhrpIy9apBL_gmOoUDHZHAaoWrZzHXmRe1GLa7p2bLEn38a-X7Quvh6mjRWvYtAm-SKITTVH84DbJplO_HiWKYx9wJo9hLfdJMLD1QQtPOBUzweDbqoGlmNz_1isGRgAMNurO",
  };

  axios
    .delete(`${QUEUE_API}/${id}`, headers)
    .then((res) => {
      const queue = res.data;
      dispatch({
        type: types.DELETE_QUEUE_ITEM,
        payload: queue,
      });
    });
};

export const startBot = () => (dispatch) => {
  axios.post("http://localhost:3001/start", {
    data: "startBot"
    })
    .then(function (res) {
      console.log('StartBot Res: ', res);
    })
    .catch(err => console.error(err))

  dispatch({
    type: types.RUN_BOT,
    payload: {
      running: true,
      connected: true,
      isVoting: false
    },
  });
}

export const startVote = () => (dispatch) => {
  axios.post("http://localhost:3001/startVote", {
    data: "startVote"
    })
    .then(function (res) {
      console.log('StartVote Res: ', res);
    })
    .catch(err => console.error(err))

  dispatch({
    type: types.START_VOTE,
    payload: {
      running: true,
      connected: true,
      isVoting: true
    },
  });
}


export const reloadServer = () => (dispatch) => {
  axios.post("http://localhost:3001/reset", {
    data: "restartServer"
    })
    .then(function (res) {
      dispatch({
        type: types.RELOAD_SERVER,
        payload: {
          running: true,
          connected: true,
          }
          });
    })
    .catch(err => console.error(err))
  dispatch({
    type: types.RELOAD_SERVER,
    payload: {
      running: false,
      connected: false,
    },
  });
}

