import React, {Component} from 'react'
import PropTypes from 'prop-types'
import BookShelfChanger from './BookShelfChanger'
import * as BooksAPI from './BooksAPI'

class Book extends Component {

    static propTypes = {
        book: PropTypes.object.isRequired,
        refresh: PropTypes.func.isRequired        
    }

    state = {
        thisBook: this.props.book
    }

    moveBook = (event) => {
        BooksAPI.update(this.state.thisBook, event.target.value)
        .then( (thisBook) => {
          this.setState( () => ({
            thisBook
          }))
          this.props.refresh()
        })
    }

    render() {

        const thumbnailURL = this.props.book.imageLinks.thumbnail
/*        const thumbnailString = 'url("' + thumbnailURL + '")' */
        const thumbnailString = `url("${thumbnailURL}")`
        
        return (

            <div className="book">
               <div className="book-top">
                    <div 
                        className="book-cover" 
                        style={{ 
                            width: 128, 
                            height: 192, 
                            backgroundImage: thumbnailString }}>
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
