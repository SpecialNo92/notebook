import { expect } from 'chai'

import noteReducer from '../../src/reducers/noteReducer'
import ActionTypes from '../../src/constants/ActionTypes'

describe('noteReducer test', () => {
    it('should return initial state', () => {
       expect(noteReducer(undefined, {}))
       .to.eql({
            notes: [],
            activeId: -1
        })
    }),
    it('can add new note', () => {
        let note = {
            id: 0, 
            title: 'New note', 
            text:''
        }

        let initialState = {
            notes: [],
            activeId: -1
        }

       expect(noteReducer(initialState, {type: ActionTypes.NOTE_ADD}))
           .to.eql({
                notes: [note],
                activeId: -1
            })
    }),
    it('can edit note', () => {
        let id = 0;
        let beforeEditNote = {
            id, 
            title: 'New note', 
            text:''
        }
        let initialState = {
            notes: [beforeEditNote],
            activeId: -1
        }

        let afterEditNote = {
            id, 
            title: 'Note1', 
            text:'Txt1'
        }
        let updatedState = {
            notes: [afterEditNote],
            activeId: -1
        }

        expect(noteReducer(initialState, {type: ActionTypes.NOTE_EDIT, note: afterEditNote}))
            .to.eql(updatedState);

    }),
    it('can delete note', () => {
        let id = 0;
        let noteToDelete = {
            id, 
            title: 'New note', 
            text:''
        }
        let initialState = {
            notes: [noteToDelete],
            activeId: -1
        }
        let updatedState = {
            notes: [],
            activeId: -1
        }
        expect(noteReducer(initialState, {type:ActionTypes.NOTE_DELETE, id}))
            .to.eql(updatedState);
    }),
    it('can select activeId for active note', () => {
        let id=0;
        let noteToSelect = {
            id, 
            title: 'New note', 
            text:''
        }
        let initialState = {
            notes: [noteToSelect],
            activeId: -1
        }
        let updatedState = {
            notes: [noteToSelect],
            activeId: id
        }
        expect(noteReducer(initialState, {type:ActionTypes.NOTE_SELECT, id}))
            .to.eql(updatedState);
    })
})