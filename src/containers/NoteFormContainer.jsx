import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { editNote } from '../actions/noteActions'
import NoteForm from '../components/NoteForm'

class NoteFormContainer extends React.Component {

    onNoteSave(note) {        
        this.props.saveNote(note);
    }

    render() {
        if (!this.props.note) {
            return (<Redirect to="/" />);
        }
        return (    
            <NoteForm note={this.props.note} onNoteSave={this.onNoteSave.bind(this)}/>
        );
    }
}

let mapStateToProps = (state, ownProps) => ({
        note: state.notes.find(note => note.id == (ownProps.match.params.id || 0)),
});
let mapDispatchToProps = (dispatch) => ({
    saveNote(note) { 
        dispatch(editNote(note))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteFormContainer)