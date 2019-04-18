import React, {Component} from 'react'
import PropTypes from 'prop-types'

class BookShelfChanger extends Component {

    static propTypes = {
        shelf: PropTypes.string.isRequired,
        handleMoveShelf: PropTypes.func.isRequired 
    }

    onThisShelf = (shelf) => {
        if (this.props.shelf === shelf)
         { return true}
        else 
        { return "enabled" }
    };
    
    handleInput = (event) => {
        console.log("input", event.target.value)
    }
    
    render () {
        const currentlyReadingDisable = this.onThisShelf("currentlyReading")
        const readDisable = this.onThisShelf("read")
        const wantToReadDisable = this.onThisShelf("wantToRead")
        /*
        console.log( 'log', currentlyReadingDisable)
        console.log( 'log', readDisable)
        console.log( 'log', wantToReadDisable)
        */

        /* Advice on select https://reactjs.org/docs/forms.html */
        return (
            <select onChange={this.props.handleMoveShelf}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        )
    }
}

export default BookShelfChanger

/* 

                <option value="currentlyReading" {currentlyReadingDisable} >Currently Reading</option>
 
     <option value="currentlyReading" {this.onThisShelf("currentlyReading")} >Currently Reading</option>
*/

/* Eduardo's

               <option value="currentlyReading" disable={this.props.shelf==="currentlyReading"}>Currently Reading</option>

               */
