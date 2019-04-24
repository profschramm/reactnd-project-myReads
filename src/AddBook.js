import React, {Component} from 'react'
import serializeForm from 'form-serialize'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'

class AddBook extends Component {

    static propTypes = {
        book: PropTypes.object.isRequired,
        refresh: PropTypes.func.isRequired
    }

    state = {
        currentShelf: 'None'
      }
  
    handleSubmit = (event) => {
        event.preventDefault()
        const values = serializeForm(event.target, { hash : true })
        if (this.props.onAddBook) {
            this.props.onAddBook(values)
        }
        BooksAPI.update(this.props.book, event.target.value)
        this.props.refresh();
    }

    render() {
        

        return (
           
            <div>
                                    <p> Already on {this.props.book.currentShelf} </p>
                {/* URL on selecting default value: https://stackoverflow.com/questions/21733847/react-jsx-selecting-selected-on-selected-select-option */}
                { (this.props.book.shelf === "None") && (
                    <form
                        onSubmit={this.handleSubmit}
                        className='add-book-form'>
                            <select value="add" onChange={this.handleSubmit}>
                                <option value="add" disabled>Add to..</option>
                                <option value="none">None</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                            </select>
                    </form>
                )}
                { (this.props.book.shelf !== "None") && (
                    <p> Already on {this.props.book.shelf} </p>

                )}
            </div>

        )
    }
}

export default AddBook
