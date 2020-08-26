
const CHOSEN_SONG = 'CHOSEN_SONG'
const EMPTY = 'EMPTY'
const TEMP_RECENTS = 'TEMP_RECENTS'
const TEMP_FAVORITES = 'TEMP_FAVORITES'

export const chosenSong = (item) => ({
    type: CHOSEN_SONG,
    payload: item
})

export const empty = () => ({
    type: EMPTY,
})

export const tempRecents = (item) => ({
    type: TEMP_RECENTS,
    payload: item
})

export const tempFavorites = (item) => ({
    type: TEMP_FAVORITES,
    payload: item
})

export const hidePlayer = () => ({})

const initialState = {
    chosen: {
        song: null, //Song interface
        playlist: [] //Array<Song>
    },
    tempRecents: [],
    tempFavorites: [],
    refresh: false
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

        case TEMP_RECENTS:
            return {
                ...state,
                tempRecents: action.payload,
                refresh: !state.refresh
            }

        case TEMP_FAVORITES:
            return {
                ...state,
                tempFavorites: action.payload,
                refresh: !state.refresh
            }

        default:
            return state;
    }
}

export default rootReducer;
