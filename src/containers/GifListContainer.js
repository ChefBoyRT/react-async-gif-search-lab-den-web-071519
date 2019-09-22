import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {
    state = {
        gifs: []
    }

    componentDidMount() {
        fetch('http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g')
            .then(response => response.json())
            .then(res => this.setState({gifs: res.data}))
    }

    render() {
        return (
            <div>
                <GifSearch />
                <ul>
                    <GifList gifs={this.state.gifs}/>
                </ul>
            </div>
        )
    }
}
