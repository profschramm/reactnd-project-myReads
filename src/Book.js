import React, {Component} from 'react'
import PropTypes from 'prop-types'
import BookShelfChanger from './BookShelfChanger'
import * as BooksAPI from './BooksAPI'

class Book extends Component {

    static propTypes = {
        book: PropTypes.object.isRequired
    }

    state = {
        thisBook: this.props.book
    }

    moveBook = (event) => {
        console.log('callback', event.target.value)
        console.log('before callback', this.state.thisBook.shelf)
        BooksAPI.update(this.state.thisBook, event.target.value)
        .then( (thisBook) => {
          this.setState( () => ({
            thisBook
          }))
        })
        this.props.refresh()
        console.log('after callback', this.state.thisBook.shelf)
    }

    render() {

        const thumbnailURL = this.props.book.imageLinks.thumbnail
        const shelfOfBook = this.props.book.shelf
        const thumbnailString = 'url("' + thumbnailURL + '")'
        /*const thumbnailString = 'url(\' + thumbnailURL + '\')' */

        return (

            <div className="book">
               <div className="book-top">
                    <div 
                        className="book-cover" 
                        style={{ 
                            width: 128, 
                            height: 192, 
                            backgroundImage: {thumbnailString} }}>
                    </div>
                    <div className="book-shelf-changer">
                        <BookShelfChanger 
                            shelf={this.props.book.shelf}
                            handleMoveShelf={this.moveBook}
                        />
                    </div>
                </div>
                <div className="book-title"> {this.props.book.title} </div>
                <div className="book-authors"> {this.props.book.author}</div>
            </div>
        )
    }
}

export default Book
