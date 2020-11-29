import React from 'react'

const ListItem = (props) => {
    return (
        <div>
            <div>{props.element.readingTime}</div>
            <div>{props.element.readingValue}</div>
        </div>
    )
}

export default ListItem