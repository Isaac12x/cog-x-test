import { getTopStories, getItem } from '../util/hn_api';

export const GET_TOPSTORIES = 'GET_TOPSTORIES'
export const GET_ITEMS = 'GET_ITEMS'
export const RECEIVE_ITEMS = 'RECEIVE_ITEMS'
export const RECEIVE_STORIES = 'RECEIVE_STORIES'
export const SELECT_SOURCE = 'SELECT_SOURCE'
export const UPDATE_INDEX = 'UPDATE_INDEX'

export function selectSource (source) {
  return {
    type: SELECT_SOURCE,
    source
  }
}

export function updateIndex (newIndex) {
  return {
    type: UPDATE_INDEX,
    newIndex
  }
}

function requestStories (source) {
  return {
    type: GET_TOPSTORIES,
    source
  }
}

function receiveStories (source, json) {
  return {
    type: RECEIVE_STORIES,
    source,
    stories: json,
    receivedAt: Date.now()
  }
}

function requestItems (source) {
  return {
    type: GET_ITEMS,
    source,
  }
}

function receiveItems (source, json) {
  return {
    type: RECEIVE_ITEMS,
    source,
    items: json,
    receivedAt: Date.now()
  }
}

function fetchItems (source) {
  return dispatch => {
    dispatch(requestItems(source))
    return getItem(source)
      .then(response => response.data)
      .then(res => dispatch(receiveItems(source, res)))
  }
}

function fetchStories (source) {
  return dispatch => {
    dispatch(requestStories(source))
    return getTopStories()
      .then(res => {
        dispatch(receiveStories(source, res.data))
        dispatch(requestItems(source, res))
      })
  }
}


function shouldFetchStories (state, source) {
  const stories = state.storiesBySource[source]
  if (!stories) {
    return true
  } else {
    return false
  }
}

function shouldFetchItems (state, items) {
  if (!items) {
    return true
  } else {
    return false
  }
}

export function getNext50 (source, stories, dispatch, getState) {
  const lastIndex = getState().maxLoaded
  const newIndex = lastIndex + 50;
  var items = []
  const rem = stories.slice(lastIndex, newIndex).map(item =>
    getItem(item)
    .then(res => items.append(res))
  ).then(dispatch(receiveItems(source, items)))
  dispatch(updateIndex(newIndex))
}


export function getInitialData (source) {
  return (dispatch, getState) => {
    return dispatch(fetchStories(source)).then(() => {
      const stories = getState().storiesBySource[source].stories
      stories.slice(0, 49).map((item) => {
        return dispatch(fetchItems(item))
      })
      dispatch(updateIndex(49))
    })
  }
}


export function fetchStoriesIfNeeded (source) {
  return (dispatch, getState) => {
    if (shouldFetchStories(getState(), source)) {
      return dispatch(fetchStories(source))
    }
  }
}

export function fetchItemsIfNeeded (items) {
  return (dispatch, getState) => {
    if (shouldFetchItems(getState(), items)) {
      return dispatch(fetchItems(items))
    }
  }
}