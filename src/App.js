import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route} from 'react-router-dom'
import SearchBooks from './SearchBooks'
import Bookshelf from './Bookshelf'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then( (books) => {
        this.setState( () => ({
          books
        }))
      })
  }
  render() {

    return (

      <div className="app">
            { /*JSON.stringify(this.state) */ /* If you want to peek at the JSON */ } 
        { /*this.state.books.length */}

        <Route path='/search' render = { ( {history} ) => (
          <div>
            <p> Hello </p>
            <SearchBooks />
            </div>
        )}/>

        <Route exact path='/' render={ () => (
          <div>
            <Bookshelf bookshelfTitle="Read" bookshelfName="read" books={this.state.books} />
            <Bookshelf bookshelfTitle="Currently Reading" bookshelfName="currentlyReading" books={this.state.books} />
            <Bookshelf bookshelfTitle="Want To Read" bookshelfName="wantToRead" books={this.state.books}/>
            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>
          </div>
        )}/>
      </div>
    ) 
  }
}

export default BooksApp
