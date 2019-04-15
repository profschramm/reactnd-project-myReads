import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Book extends Component {

    static propTypes = {
        book: PropTypes.object.isRequired
    }

    render() {

        const thumbnailURL = this.props.book.imageLinks.thumbnail
        const shelfOfBook = this.props.book.shelf
        const thumbnailString = '\'url("' + thumbnailURL + '")\''

        return (

            <div className="book">
               <p>Thumbnail = {shelfOfBook} {thumbnailString}</p>
               <div className="book-top">
                    <div 
                        className="book-cover" 
                        style={{ 
                            width: 128, 
                            height: 192, 
                            backgroundImage: {thumbnailString} }}>
                    </div>
                    <div className="book-shelf-changer">
                        <select>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title"> {this.props.book.title} </div>
                <div className="book-authors"> {this.props.book.author}</div>
            </div>
        )
    }
}

export default Book