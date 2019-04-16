import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import BookGrid from './BookGrid'


class SearchBooks extends Component {

    state = {
      query: 'Li',
      showingBooks: []
    }

    componentDidMount() {
      this.searchQuery()
    }

    updateQuery = (aQuery) => {
      this.setState( () => ({
        query: aQuery.trim()
      }))
      /*this.searchQuery()*/

    }

    searchQuery = () => {
      console.log('searchQuery')
      BooksAPI.search(this.state.query)
        .then( (showingBooks) => {
          this.setState( () => ({ showingBooks}))
        })
    }
    render() {

        console.log("before")
        /*const variable = this.searchQuery()*/
        /*console.log("After", {variable}) */

        return (

            <div className="search-books">

             <p>length =  {this.state.showingBooks.length}</p>
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
                 <BookGrid books={this.state.showingBooks}/>
              </ol>
            </div>
          </div>
        )
    }
}

export default SearchBooks