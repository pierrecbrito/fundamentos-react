import React from "react"

export default (props) => {
    const style = {
        'display': 'flex',
        'justifyContent': 'center'
    }

    return (
        <div style={style}>
            {props.children}
        </div>
    )
}