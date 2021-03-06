import axios from "axios";
import * as types from "./action-types";
// const {config} = require('dotenv');


const QUEUE_API = process.env.REACT_APP_QUEUE_API;

const POINTS_API = process.env.REACT_APP_POINTS_API;

const LOCAL_URL = process.env.REACT_APP_LOCAL_URL;

const STATUS_API = process.env.REACT_APP_STATUS_API;

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

  axios
    .delete(`${QUEUE_API}/${id}`)
    .then((res) => {
      const queue = res.data;
      dispatch({
        type: types.DELETE_QUEUE_ITEM,
        payload: queue,
      });
    });
};

export const startBot = () => (dispatch) => {
  axios.post(`${LOCAL_URL}/start`, {
    data: "startBot"
    })
    .then(function (res) {
      console.log('StartBot Res: ', res);
    })
    .catch(err => console.error(err))

   // change object to json

  axios.patch(`${STATUS_API}`, {
    "main_running" : true,
    "is_connected" : true
  })
    .then(function (res) {
      console.log('StartBot Res: ', res);
    })
    .catch(err => console.error(err))
}

export const stopBot = () => (dispatch) => {
  axios.post(`${LOCAL_URL}/stop`, {
    data: "stopBot"
    })
    .then(function (res) {
      console.log('StopBot Res: ', res);
    })
    .catch(err => console.error(err))

    axios.patch(`${STATUS_API}`, {
      "main_running" : false,
      "is_connected" : false
    })
      .then(function (res) {
        console.log('StartBot Res: ', res);
      })
      .catch(err => console.error(err))
  }




export const startVote = () => (dispatch) => {
  axios.post(`${LOCAL_URL}/vote`, {
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
  axios.post(`${LOCAL_URL}/reset`, {
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

export const startMod = () => (dispatch) => {
  axios.post(`${LOCAL_URL}/mod`, {
    data: "startMod"
    })
    .then(function (res) {
      console.log('StartMod Res: ', res);
    })
    .catch(err => console.error(err))
}

export const getPoints = () => (dispatch) => {
  axios.get(POINTS_API)
    .then((res) => {
      const data = res.data;
      dispatch({
        type: types.GET_POINTS,
        payload: data,
      });
    })
}

