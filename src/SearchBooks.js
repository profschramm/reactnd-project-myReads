import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import SearchBook from './SearchBook'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

class SearchBooks extends Component {
  
  static propTypes = {
    refresh: PropTypes.func.isRequired,
    titleFilter: PropTypes.func.isRequired
  }

   state = {
      query: '',
      searchedBooks: []
    }

    updateQuery = (aQuery) => {
      this.setState( () => ({
        query: aQuery
      }))
      BooksAPI.search( aQuery)
      .then( (searchedBooks) => {
        /* When you have a POST, it is possible that it fails (e.g. no books found)
         * In this case, the returned object will not be an array, but an object with an error field.
         *  (Corresponds to Error 403)  For further study look up "truthy falsy"
         * This is why the next if-clause first checks whether the returned result is a defined object
         * and then whether the object has a field called error*/
        if (!searchedBooks || searchedBooks.error) {
          this.setState( {searchedBooks: []})
        } else {
          this.setState(() => ( {searchedBooks})) 
        }
        })
    }

    render() {
        // Debugging code: Testing whether a variable is defined. Let here as a lesson to myself
         if (this.state.searchedBooks === undefined) {
             console.log ("undefined")
         } 
         return (
            <div className="search-books">
             <div className="search-books-bar">
              <Link  className="search-back-button" to='/'> 
                <button className="close-search"> Close </button>
              </Link>            
              <div className="search-books-input-wrapper">
                <input 
                  className="search-books"
                  type="text" 
                  placeholder="Search by title or author"
                  value={this.state.query}
                  onChange={(event)=> this.updateQuery(event.target.value)}/>
              </div>
            </div>

            {this.state.searchedBooks !== undefined && this.state.searchedBooks.length !== 0 && (
              <div className="search-books-results">
              <ol className="books-grid">
                {this.state.searchedBooks.map( (aBook) => (
                  <li  className="book-item" key={aBook.id}> 
                      <SearchBook book={aBook} refresh={this.props.refresh} titleFilter={this.props.titleFilter}/>
                  </li>
                ))}
              </ol>
            </div>
            )}
          </div>
        )
    }
}

export default SearchBooks