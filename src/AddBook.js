import React, {Component} from 'react'
import serializeForm from 'form-serialize'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'

class AddBook extends Component {

    static propTypes = {
        book: PropTypes.object.isRequired,
        books: PropTypes.array.isRequired,
        refresh: PropTypes.func.isRequired,
        titleFilter: PropTypes.func.isRequired
    }
 
    handleSubmit = (event) => {
        event.preventDefault()
        const values = serializeForm(event.target, { hash : true })
        if (this.props.onAddBook) {
            this.props.onAddBook(values)
        }
        BooksAPI.update(this.props.book, event.target.value)
        .then( () => {
           this.props.refresh();
          })

    }

    /* Alternative function: If you want to pass down books, instead of a function */

    findShelf = () => {
        const booksAlreadyOnShelf = this.props.books.filter( (book) => ( book.title === this.props.book.title ))
        if ((booksAlreadyOnShelf !== undefined) && (booksAlreadyOnShelf.length !== 0)) {
            // console.log ("AddBooks: found shelf ", booksAlreadyOnShelf[0].currentShelf)
            return booksAlreadyOnShelf[0].currentShelf
        } else {
            return "none"   // I prefer to return "add" to have a default display of "Add to " in the select
        }  
    }
    
    render() {
        const booksAlreadyOnShelf = this.props.titleFilter(this.props.book.title);

        var selectDefault

        if ((booksAlreadyOnShelf !== undefined) && (booksAlreadyOnShelf.length !== 0) ) {
            // console.log("AddBook: On the shelf", this.props.book.title, booksAlreadyOnShelf[0].shelf)
            selectDefault = booksAlreadyOnShelf[0].shelf
        } else {
            selectDefault = "none"  // I prefer to return "add" to have a default display of "Add to " in the select
           // console.log("Not on shelf", this.props.book.title)
        }

        return (
            <div>
                {/* URL on selecting default value: https://stackoverflow.com/questions/21733847/react-jsx-selecting-selected-on-selected-select-option */}
                    <form
                        onSubmit={this.handleSubmit}
                        className='add-book-form'>
                            <select value={selectDefault} onChange={this.handleSubmit}>
                                <option value="add" disabled>Add to..</option>
                                <option value="none">None</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                            </select>
                    </form>
            </div>

        )
    }
}

export default AddBook

