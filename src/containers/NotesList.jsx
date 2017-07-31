import React from 'react'
import { connect } from 'react-redux'

import NotesListItem from './NotesListItem'

class NotesList extends React.Component {
    render() {
        if (this.props.notes.length == 0) {
            return <p>No notes</p>;
        }
        return (
            <div className="list-group">
                {this.props.notes.map(note => <NotesListItem note={note} key={note.id}/>)}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    notes: state.notes
});

export default connect(mapStateToProps)(NotesList)