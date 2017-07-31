import ActionTypes from '../constants/ActionTypes'


export function addNote() {
    return {
        type: ActionTypes.NOTE_ADD
    }
}

export function editNote(note) {
    return {
        type: ActionTypes.NOTE_EDIT,
        note
    }
}

export function deleteNote(id) {
    return {
        type: ActionTypes.NOTE_DELETE,
        id
    }
}

export function selectNote(id) {
    return {
        type: ActionTypes.NOTE_SELECT,
        id
    }
}
