import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { deleteNote, selectNote } from '../actions/noteActions'

class NotesListItem extends React.Component {
    onClickDelete(e) {
        e.preventDefault();
        this.props.onClickDelete();
    }

    onClickIsActive(e) {
        this.props.onClickIsActive();
    }

    render() {
        let {id, title, text} = this.props.note;
        let activeCls = this.props.activeId == id ? ' active': '';
        return (
            <Link to={`/note/${id}`} className={`list-group-item list-group-item-action justify-content-between${activeCls}`} onClick={this.onClickIsActive.bind(this)}>
               {title} <span className="badge badge-danger badge-pill" onClick={this.onClickDelete.bind(this)}>X</span>
            </Link>
        );
    }
}

NotesListItem.propTypes = {
    note: PropTypes.object.isRequired,
    activeId: PropTypes.number.isRequired
};

let mapStateToProps = (state) => ({
    activeId: state.activeId
})

let mapDispatchToProps = (dispatch, ownProps) => ({
    onClickDelete() {
        dispatch(deleteNote(ownProps.note.id))
    },
    onClickIsActive() {
        dispatch(selectNote(ownProps.note.id));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(NotesListItem)