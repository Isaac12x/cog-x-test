import axios from 'axios';

var endPoint = 'https://hacker-news.firebaseio.com/v0'


export function getTopStories() {
  return axios.get(endPoint + '/topstories.json')
}

export function getNewStories() {
  return axios.get(endPoint + '/newstories.json')
}

export function getBestStories() {
  return axios.get(endPoint + '/beststories.json')
}

export function getUser(id) {
  return axios.get(endPoint + '/user/' + id + '.json')
}

export function getItem(id) {
  return axios.get(endPoint + '/item/' + id + '.json')
}

export function getComments(id) {
  return axios.get(endPoint + '/comment/' + id + '.json')
}
