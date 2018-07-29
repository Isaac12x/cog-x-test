import { combineReducers } from 'redux';
import {
  SELECT_SOURCE,
  GET_TOPSTORIES,
  RECEIVE_STORIES,
  GET_ITEMS,
  RECEIVE_ITEMS,
  UPDATE_INDEX
} from '../actions/hackernews';

function selectedSource(state = 'topstories', action) {
  switch (action.type) {
    case SELECT_SOURCE:
      return action.source
    default:
      return state
  }
}

function maxLoaded(state = 0, action) {
  switch (action.type) {
    case UPDATE_INDEX:
      return action.newIndex
    default:
      return state
  }
}

function stories (state = { isFetching: false, stories: [] }, action) {
  switch (action.type) {
    case GET_TOPSTORIES:
      return Object.assign({}, state, {
        isFetching: true,
      })
    case RECEIVE_STORIES:
      return Object.assign({}, state, {
        isFetching: false,
        stories: action.stories,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

function storiesBySource (state = {}, action) {
  switch (action.type) {
    case RECEIVE_STORIES:
    case GET_TOPSTORIES:
      return Object.assign({}, state, {
        [action.source]: stories(state[action.source], action)
      })
    default:
      return state
  }
}

function items (
  state = {
    isFetching: false,
    items: [],
  },
  action
) {
  switch (action.type) {
    case GET_ITEMS:
      return Object.assign({}, state, {
        isFetching: true,

      })
    case RECEIVE_ITEMS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.items,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

function itemsBySource(state = {}, action) {
  switch (action.type) {
    case RECEIVE_ITEMS:
    case GET_ITEMS:
      return Object.assign({}, state, {
        [action.source]: items(state[action.source], action)
      })
    default:
      return state
  }
}


const rootReducer = combineReducers({
  storiesBySource,
  itemsBySource,
  selectedSource,
  maxLoaded
})


export default rootReducer;
