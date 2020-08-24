import {SongData} from 'components/Song';

const CHOSEN_SONG = 'CHOSEN_SONG'
const EMPTY = 'EMPTY'

export const chosenSong = (item) => ({
    type: CHOSEN_SONG,
    payload: item
})

export const empty = () => ({
    type: EMPTY,
})

const initialState = {
    chosen: {
        song: null, //Song interface
        playlist: [] //Array<Song>
    },
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHOSEN_SONG:
            return {
                ...state,
                chosen: action.payload
            }

        case EMPTY:
            return {
                ...state,
                chosen: {
                    song: null,
                    playlist: []
                }
            }

        default:
            return state;
    }
}

export default rootReducer;
