import React, { Component } from 'react'

export default class GifSearch extends Component {
    state = {
        input: ''
    }

    handleChange = (event) => {
        console.log(event.target.value)
        this.setState({
            input: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        
      }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' name='input' value={this.state.input} onChange={this.handleChange}></input>
                    <input type='submit' value='Submit' />
                </form>
            </div>
        )
    }
}
