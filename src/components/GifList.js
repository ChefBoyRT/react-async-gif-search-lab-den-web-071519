import React from 'react'

export default function GifList(props) {
    return (
        <div>
            {props.gifs.map((gif, index) => <li><img key={index} src={gif.images.original.url} alt={gif.type}/></li>)}
        </div>
    )
}
