import React, {Component} from 'react'
import serializeForm from 'form-serialize'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'

class AddBook extends Component {

    static propTypes = {
        book: PropTypes.object.isRequired,
        refresh: PropTypes.func.isRequired
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
                <form
                    onSubmit={this.handleSubmit}
                    className='add-book-form'>
                        <select onChange={this.handleSubmit}>
                            <option selected value="add" disabled>Add to..</option>
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
