import React, {Component} from 'react'
import PropTypes from 'prop-types'
import AddBook from './AddBook'

class SearchBook extends Component {

    static propTypes = {
        book: PropTypes.object.isRequired,
        refresh: PropTypes.func.isRequired        
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
     
        const booksAlreadyOnShelf = this.props.titleFilter(this.props.book.title);
        /* Debugging Code 
        console.log("list", booksAlreadyOnShelf)
        if ((booksAlreadyOnShelf !== undefined) && (booksAlreadyOnShelf.length !== 0) ) {
            console.log("On the shelf", this.props.book.title, booksAlreadyOnShelf[0].shelf)
        } else {
            console.log("Not on shelf", this.props.book.title)
        }
        */
 
        return (

            <div className="searched-book">

            {(booksAlreadyOnShelf === undefined) || (booksAlreadyOnShelf.length === 0) && (
                <div className = "searched-book-top"> 
                {(this.props.book.imageLinks) && (
                    <div className="searched-book-cover" 
                        style={{ 
                            width: 128, 
                            height: 192, 
                            backgroundImage: `url("${this.props.book.imageLinks.thumbnail}")` }}>
                    </div>
                )}

                     <AddBook book={this.props.book} refresh={this.props.refresh} titleFilter={this.props.titleFilter}/>
                     <div className="book-title"> {this.props.book.title} </div>
                     {this.renderAuthors()}
                    
                </div>
            )}
              
            </div>
        )
    }
}

export default SearchBook
