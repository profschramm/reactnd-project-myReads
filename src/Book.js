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

    renderAuthors = () => {
        return (
            <div className="book-author">
            {Array.isArray(this.props.book.authors) && (this.props.book.authors.length !== 1) && (
                <div className="author">
                    {this.props.book.authors.map( (anAuthor) => ( anAuthor + " " ))} 
                </div>
            )}

            {Array.isArray(this.props.book.authors) && (this.props.book.authors.length === 1) && (
                <div className="author">
                    {this.props.book.authors[0]}
                </div>
            )}      
            </div>

        )
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
                {this.renderAuthors()}
            </div>
        )
    }
}

export default Book

/* Left for learning: Code that prints out authors as a list
                   
                   <ul className="author-list">
                    {this.props.book.authors.map( (anAuthor) => (
                            <li  className="author-item" key={anAuthor}> 
                                {anAuthor}
                            </li>
                  ))} 
                    </ul>
*/