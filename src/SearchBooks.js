import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import SearchBook from './SearchBook'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

class SearchBooks extends Component {
  
  static propTypes = {
    refresh: PropTypes.func.isRequired
  }

   state = {
      query: '',
      searchedBooks: []
    }

    updateQuery = (aQuery) => {
      this.setState( () => ({
        query: aQuery.trim()
      }))
      BooksAPI.search( aQuery)
      .then( (searchedBooks) => {
        this.setState(() => ( {searchedBooks})) 
        if (typeof this.state.searchedBooks === undefined) { 
          this.setState( {searchedBooks: [] })
       }
        console.log ("updated", this.state.searchedBooks)
      })
      if (typeof this.state.searchedBooks === undefined) { 
        this.setState( {searchedBooks: [] })
      console.log ("updating", this.state.searchedBooks)
      }
    }

    render() {

         console.log("render in SearchBooks", this.state.searchedBooks.length)
         if (typeof this.state.searchedBooks === undefined) {
             console.log ("undefined")
         } 

         return (

            <div className="search-books">

             <p>length =  {this.state.searchedBooks.length}</p>
             <p>query = {this.state.query}</p>

             <div className="search-books-bar">
             <button
                className="close-search"
                onClick={() => this.setState({ showSearchPage: false })}>
                Close
              </button>
             <Link  className="search-back-button"
                    to='/'> 
                <button>Close</button>
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

            {typeof this.state.searchedBooks !== undefined && this.state.searchedBooks.length !== 0 && (
              <div className="search-books-results">
              <ol className="books-grid">
                {this.state.searchedBooks.map( (aBook) => (
                  <li  className="book-item" key={aBook.id}> 
                      <SearchBook book={aBook} refresh={this.props.refresh}/>
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

/*

<button
  className="close-search"
  onClick={() => this.setState({ showSearchPage: false })}>
  Close
  </button>
                */