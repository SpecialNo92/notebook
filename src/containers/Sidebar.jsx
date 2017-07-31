import React from 'react'
import { connect } from 'react-redux'
import { addNote } from '../actions/noteActions'

import NotesList from './NotesList'

class Sidebar extends React.Component {

    onClickAddNote(e) {
        this.props.onClickAddNote();
    }

    render() {
        return (
            <div>
                <NotesList />
                <button type="button" className="btn btn-primary btn-lg btn-block add" onClick={this.onClickAddNote.bind(this)}>Add new note</button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClickAddNote() {
            dispatch(addNote())
        }
    }
}

export default connect(undefined, mapDispatchToProps)(Sidebar)