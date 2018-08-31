import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
    render() {
        if (!this.props.book) {
            return <div>Select a book to get started</div>;
        }

        return (
            <div>
                <h3>details for:</h3>
                <div>Title: {this.props.book.title}</div>
                <div>Pages: {this.props.book.pages}</div>

            </div>
        )
    }
}

//we made this a Container by connecting it
//now we can give it props 
//we want to give activeBook as a prop because
//BookDetail can render details about it
function mapStateToProps(state) {
    return {
        book: state.activeBook
    }
}

export default connect(mapStateToProps)(BookDetail);