import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { editNote } from '../actions/noteActions'

class NoteForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: this.props.note.title,
            text: this.props.note.text
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            title: nextProps.note.title,
            text: nextProps.note.text
        });
    }
    
    onChangeTitle(e) {
        this.setState({title: e.target.value});
    }

    onChangeText(e) {
        this.setState({text: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();

        this.props.onNoteSave({
            id: this.props.note.id,
            title: this.state.title,
            text: this.state.text
        });
    }

    render() {
        let {note, onSubmit} = this.props;
        
        return (            
            <form onSubmit={this.onSubmit.bind(this)}>
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input type="text" className="form-control" id="title" onChange={this.onChangeTitle.bind(this)} value={this.state.title} />
                </div>
                <div className="form-group">
                    <label htmlFor="textarea">Note:</label>
                    <textarea className="form-control" id="textarea" rows="15" onChange={this.onChangeText.bind(this)} value={this.state.text}></textarea>
                </div>
                <button type="submit" className="btn btn-success btn-lg">SAVE</button> 
            </form>
        );
    }
}

NoteForm.propTypes = {
    note: PropTypes.object,
    onNoteSave: PropTypes.func.isRequired
}

export default NoteForm