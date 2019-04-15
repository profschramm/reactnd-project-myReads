import React, {Component} from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

class BookGrid extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired
    }
    render() {
        return (
            <div className="bookshelf-books">
                <ol className="books-grid">
                   {this.props.books.map( (aBook) => (
                        <Book book={aBook}/>
                   ))}
                </ol>
                <Book />
            </div>
        )
    }
}

export default BookGrid