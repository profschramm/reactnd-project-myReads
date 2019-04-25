import React, {Component} from 'react'
import PropTypes from 'prop-types'
import AddBook from './AddBook'

class SearchBook extends Component {

    static propTypes = {
        book: PropTypes.object.isRequired,
        books: PropTypes.array.isRequired,
        refresh: PropTypes.func.isRequired,      
        titleFilter: PropTypes.func.isRequired      
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

        return (

            <div className="searched-book">

                <div className = "searched-book-top"> 
                {(this.props.book.imageLinks) && (
                    <div className="searched-book-cover" 
                        style={{ 
                            width: 128, 
                            height: 192, 
                            backgroundImage: `url("${this.props.book.imageLinks.thumbnail}")` }}>
                    </div>
                )}
                     <AddBook book={this.props.book} books={this.props.books} refresh={this.props.refresh} titleFilter={this.props.titleFilter}/>
                     <div className="book-title"> {this.props.book.title} </div>
                     {this.renderAuthors()}            
                </div>
         
            </div>
        )
    }
}

export default SearchBook

/* To display only those books NOT on a shelf at the moment (My original interpretation)

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


            */
