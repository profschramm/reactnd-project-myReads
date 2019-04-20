import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import SearchBook from './SearchBook'

class SearchBooks extends Component {
    
   state = {
      query: '',
      searchedBooks: []
    }

    componentDidMount() {
      this.searchQuery()
    }

    updateQuery = (aQuery) => {
      this.setState( () => ({
        query: aQuery.trim()
      }))
      this.searchQuery()
    }

    refresh = () => {
      console.log ("search refresh")
      return this.searchQuery()
    }

    searchQuery = () => {
      console.log('searchQuery')
      BooksAPI.search(this.state.query)
        .then( (searchedBooks) => {
          this.setState( () => ({ searchedBooks}))
        })
    }

    render() {

        console.log("Search books render")
        /*const variable = this.searchQuery()*/
        /*console.log("After", {variable}) */

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
              <div className="search-books-input-wrapper">
              {/*
                NOTES: The search from BooksAPI is limited to a particular set of search terms.
                You can find these search terms here:
                https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                you don't find a specific author or title. Every search is limited by search terms.
              */}
                <input 
                  className="search-books"
                  type="text" 
                  placeholder="Search by title or author"
                  onChange={(event)=> this.updateQuery(event.target.value)}/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {this.state.searchedBooks.map( (aBook) => (
                  <li  className="book-item" key={aBook.id}> 
                      <SearchBook book={aBook} refresh={this.refresh}/>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        )
    }
}

export default SearchBooks

