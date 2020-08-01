import {Song} from 'components/Song';

const initialState = {
    recentlyPlayed : [],
    favourite : 
    
    [],
    // playlists : Array 
}

function counter(state = 0, action) {
    switch (action.type) {
      case 'recentlyPlayed':
        return recentlyPlayed.push()
      case 'favourite':
        return state - 1
      default:
        return state
    }
  }