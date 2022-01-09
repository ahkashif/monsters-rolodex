import React from 'react'
import './card.styles.css'

export default function Card(props) {
    return (
        <div className='card-container'>
            <img 
                alt= 'monsters'
                src={`https://robohash.org/monster/${props.monster.id}/set=set2/size=180x180`} 
                />
            <h1> {props.monster.name} </h1>
        </div>
    )
}
