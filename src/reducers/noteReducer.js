import ActionTypes from '../constants/ActionTypes'

const initialState = {
    notes: [],
    activeId: -1
}

function noteReducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.NOTE_ADD:
            let latestId = state.notes.reduce((prev, curr) => {
                return (prev.id > curr.id) ? prev.id : curr.id
            }, -1)
            return Object.assign({}, state, {
                notes: [...state.notes, {id: latestId+1, title: 'New note', text:''}]
            });
        break;
        case ActionTypes.NOTE_EDIT:
            let editedNotes = state.notes.map(note => {
                if (note.id == action.note.id) {
                    note = action.note;
                }
                return note;
            }) 

            return Object.assign({}, state, {
                notes: editedNotes
            })
        break;
        case ActionTypes.NOTE_DELETE:
            let afterDeletionNotes = state.notes.filter(note => note.id != action.id);

            return Object.assign({}, state, {
                notes: afterDeletionNotes
            })
        break;
        case ActionTypes.NOTE_SELECT:
            return Object.assign({}, state, {
                activeId: action.id
            })
        break;
        default:
            return state;
    }
}

export default noteReducer