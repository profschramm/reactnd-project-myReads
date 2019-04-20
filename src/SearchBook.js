import React, {Component} from 'react'
import PropTypes from 'prop-types'

class SearchBook extends Component {

    static propTypes = {
        book: PropTypes.object.isRequired,
        refresh: PropTypes.func.isRequired        
    }

    render() {

        return (

            <div className="book">
                <div className="book-title"> {this.props.book.title} </div>
                <div className="book-authors"> {this.props.book.author}</div>
            </div>
        )
    }
}

export default SearchBook
