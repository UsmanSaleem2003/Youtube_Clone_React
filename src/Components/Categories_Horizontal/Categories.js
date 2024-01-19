import React from 'react'
import "./Categories.css";


export default function Categories(props) {
    return (
        <div>
            <button className='categoriez'>{props.name}</button>
        </div>
    )
}
