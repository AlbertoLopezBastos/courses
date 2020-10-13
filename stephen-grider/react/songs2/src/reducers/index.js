import { combineReducers } from 'redux';

const selectedSongReducer = (state = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return state;
}

const songsReducer = () => {
  return [
    { title: 'No Scrubs', duration: '4:05' },
    { title: 'Macarena', duration: '2:30' },
    { title: 'All Start', duration: '3:15' },
    { title: 'I Want it That Wat', duration: '1:45' }
  ];
}

export default combineReducers({ selectedSong: selectedSongReducer, songs: songsReducer });