import { combineReducers } from "redux";

// import { started } from "./helpers/running";


import * as types from "./action-types";

function count(state = 0, action) {
  switch (action.type) {
    case types.INCREMENT:
      return state + 1;
    default:
      return state;
  }
}

function queue(state = [], action) {
  switch (action.type) {
    case types.GET_QUEUE:
      return action.payload;
    case types.DELETE_QUEUE_ITEM:
      return action.payload;
    default:
      return state;
  }
}

function botData (state = {
  running: false, 
  connected: false, 
  isVoting: false, 
  isMod: false
  }, action) {
  switch (action.type) {
    case types.RUN_BOT:
      return action.payload;
    case types.RELOAD_SERVER:
      return action.payload;
    case types.START_VOTE:
      return action.payload;
    case types.START_MOD:
      return action.payload;
    default:
      return state;
  }
}

function userPoints(state = [], action) {
  switch (action.type) {
    case types.GET_POINTS:
      return action.payload;
    default:
      return state;
  }
}

export default combineReducers({ 
  count, 
  queue,
  botData,
  userPoints });
