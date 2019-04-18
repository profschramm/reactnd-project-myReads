import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route} from 'react-router-dom'
import SearchBooks from './SearchBooks'
import Bookshelf from './Bookshelf'

class BooksApp extends React.Component {
  state = {
    books: [],
  }

  refresh = () => {
    console.log ("refresh")
    return this.getAllBooks()
  }
  getAllBooks = () => {
    BooksAPI.getAll()
    .then( (books) => {
      this.setState( () => ({
        books
      }))
    })
  }
  
  filterBooks = (shelf) => {
    return this.state.books.filter( (book) => (
      book.shelf === shelf
    ))
  }

  componentDidMount() {
   return this.getAllBooks()
  }
  render() {

    const readList = this.filterBooks("read")
    const wantToReadList = this.filterBooks("wantToRead")
    const currentlyReadingList = this.filterBooks("currentlyReading")
    console.log ("In Render", readList.length)
    console.log ("In Render", wantToReadList.length)
    console.log ("In Render", currentlyReadingList.length)
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
            <Bookshelf bookshelfTitle="Read" bookshelfName="read" books={readList} refresh={this.refresh} />
            <Bookshelf bookshelfTitle="Currently Reading" bookshelfName="currentlyReading" books={currentlyReadingList} refresh={this.refresh} />
            <Bookshelf bookshelfTitle="Want To Read" bookshelfName="wantToRead" books={wantToReadList} refresh={this.refresh}/>
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
