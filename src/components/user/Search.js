import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Search extends Component {

    state = {
        text: ''
    }

    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClearBtn: PropTypes.bool.isRequired,
        setAlert: PropTypes.func.isRequired,
    }

    onSubmit = (event) => {
        event.preventDefault()
        if (this.state.text === '') {
            this.props.setAlert('something', 'light')
        } else {
            this.props.searchUsers(this.state.text)
            this.setState({ text: '' })
        }

    }

    onChange = (event) => this.setState({ [event.target.name]: event.target.value })

    render() {
        const { showClearBtn, clearUsers } = this.props
        return (
            <div>
                <form onSubmit={this.onSubmit} className='form'>
                    <input
                        type="text"
                        name='text'
                        placeholder='Search name ...'
                        value={this.state.text}
                        onChange={this.onChange} />
                    <input type="submit" value='Search' className='btn btn-dark btn-block' />
                </form>
                {showClearBtn && <button
                    className="btn btn-light btn-block"
                    onClick={clearUsers}>Clear
                </button>}

            </div>
        )
    }
}

export default Search
