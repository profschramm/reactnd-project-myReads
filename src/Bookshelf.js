import React, {Component} from 'react'
import BookGrid from './BookGrid'
import PropTypes from 'prop-types'

class Bookshelf extends Component {

    static propTypes = {
        bookshelfTitle:PropTypes.string.isRequired,
        bookshelfName:PropTypes.string.isRequired,
        books:PropTypes.array.isRequired,
        refresh:PropTypes.func.isRequired
    }

    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.bookshelfTitle}</h2>
                <BookGrid books={this.props.books} refresh={this.props.refresh}/>
            </div>
        )
    }
}

export default Bookshelf
