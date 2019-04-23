import React, {Component} from 'react'
import PropTypes from 'prop-types'
import AddBook from './AddBook'

class SearchBook extends Component {

    static propTypes = {
        book: PropTypes.object.isRequired,
        refresh: PropTypes.func.isRequired        
    }

    render() {
        return (
            <div className="searched-book">
                <div className="searched-book-top">
                {(this.props.book.imageLinks) && (
                    <div 
                        className="searched-book-cover" 
                        style={{ 
                            width: 128, 
                            height: 192, 
                            backgroundImage: `url("${this.props.book.imageLinks.thumbnail}")` }}>
                    </div>
                )}
                </div>
                <AddBook book={this.props.book} refresh={this.props.refresh}/>
                <div className="book-title"> {this.props.book.title} </div>
                {(this.props.book.author) && (
                <div className="book-authors"> {this.props.book.author}</div> )}
            </div>
        )
    }
}

export default SearchBook
