import React, {Component} from 'react'
import PropTypes from 'prop-types'
import BookShelfChanger from './BookShelfChanger'

class Book extends Component {

    static propTypes = {
        book: PropTypes.object.isRequired
    }

    moveBook = (event) => {
        console.log('callback', event.target.value)
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
