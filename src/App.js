import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route} from 'react-router-dom'
import SearchBooks from './SearchBooks'
import Bookshelf from './Bookshelf'
import {Link} from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: [],
  }

  refresh = () => {
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
  
  filterBooksByShelf = (shelf) => {
    return this.state.books.filter( (book) => (
      book.shelf === shelf
    ))
  }

  filterBooksByTitle = (title) => {
    return this.state.books.filter( (book) => (
      book.title === title
    ))
  }


  componentDidMount() {
   return this.getAllBooks()
  }
  render() {

    const readList = this.filterBooksByShelf("read")
    const wantToReadList = this.filterBooksByShelf("wantToRead")
    const currentlyReadingList = this.filterBooksByShelf("currentlyReading")

    return (

      <div className="app">
            { /*JSON.stringify(this.state) */ /* If you want to peek at the JSON */ } 

        <Route path='/search' render = { ( {history} ) => (
          <div>
            <SearchBooks books={this.state.books} refresh={this.refresh} titleFilter={this.filterBooksByTitle}/>
            </div>
        )}/>

        <Route exact path='/' render={ () => (
          <div>
            <Bookshelf bookshelfTitle="Read" bookshelfName="read" books={readList} refresh={this.refresh} />
            <Bookshelf bookshelfTitle="Currently Reading" bookshelfName="currentlyReading" books={currentlyReadingList} refresh={this.refresh} />
            <Bookshelf bookshelfTitle="Want To Read" bookshelfName="wantToRead" books={wantToReadList} refresh={this.refresh}/>
            <div className="open-search">
              <Link 
                to='/search'
                className='search-books'
              >
                <button> Add Books</button>
              </Link>
            </div>
          </div>
        )}/>
      </div>
    ) 
  }
}

export default BooksApp

