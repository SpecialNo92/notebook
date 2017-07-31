import { expect } from 'chai'

import * as noteActions from '../../src/actions/noteActions'
import ActionTypes from '../../src/constants/ActionTypes'

describe('note actions', () => {
    it('should create an action to add note', () => {
        const expectedAction = {
            type: ActionTypes.NOTE_ADD
        }
        expect(noteActions.addNote()).to.eql(expectedAction);
    }),
    it('should create an action to edit note', () => {
        let note = {
            id: 0, 
            title: 'New note', 
            text:''
        }
        const expectedAction = {
            type: ActionTypes.NOTE_EDIT,
            note
        }
        expect(noteActions.editNote(note)).to.eql(expectedAction);
    }),
    it('should create an action to remove note', () => {
        let id = 0;
        const expectedAction = {
            type: ActionTypes.NOTE_DELETE,
            id
        }
        expect(noteActions.deleteNote(0)).to.eql(expectedAction);
    }),
    it('should create an action to select active note', () => {
        let id = 0;
        const expectedAction = {
            type: ActionTypes.NOTE_SELECT,
            id
        }
        expect(noteActions.selectNote(0)).to.eql(expectedAction);
    })
})