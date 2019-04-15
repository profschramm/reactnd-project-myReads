import React, {Component} from 'react'
import BookGrid from './BookGrid'
import PropTypes from 'prop-types'


class Bookshelf extends Component {

    static propTypes = {
        bookshelfTitle:PropTypes.string.isRequired,
        books:PropTypes.array.isRequired
    }

    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.bookshelfTitle}</h2>
                <BookGrid books={this.props.books}/>
            </div>
        )
    }
}

export default Bookshelf