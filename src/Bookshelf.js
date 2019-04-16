import React, {Component} from 'react'
import BookGrid from './BookGrid'
import PropTypes from 'prop-types'


class Bookshelf extends Component {

    static propTypes = {
        bookshelfTitle:PropTypes.string.isRequired,
        bookshelfName:PropTypes.string.isRequired,
        books:PropTypes.array.isRequired
    }

    render() {

/* From before when I passed in ALL books 
        const booksOnThisShelf = this.props.books.filter( (book) => (
            book.shelf === this.props.bookshelfName
        ))
*/
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.bookshelfTitle}</h2>
                <BookGrid books={this.props.books}/>
            </div>
        )
    }
}

export default Bookshelf

/*                 <BookGrid books={this.props.books}/> */