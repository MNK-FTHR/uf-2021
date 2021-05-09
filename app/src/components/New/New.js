import React from 'react'

function New(props) {
    return (
        <div>
            News n°{props.id}
            <br/>
            {props.content}
        </div>
    )
}

export default New
