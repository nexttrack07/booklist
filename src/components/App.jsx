import React, { Component } from 'react';
import BookList from '../containers/booklist';
import BookDetail from '../containers/book-detail';
import '../styles/main.css';

class App extends Component {
    render() {
        return (
            <div>
                <BookList />
                <BookDetail />
            </div>
        )
    }
}

export default App;

