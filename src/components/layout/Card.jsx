import React from "react";
import '../../css/Card.css'

export default (props) => {
    return (
        <div className="Card">
            <div className="Title">
                {props.titulo}
            </div>
            <div className="Content">
                {props.children}
            </div>
        </div>
    )
}