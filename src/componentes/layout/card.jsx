import React from "react";
import './card.css'

export default props => {

    return(
        <div className="card" style={{ 
            backgroundColor : props.color  ,
            borderColor: props.color }}>
            <div className="title">{props.title}</div>
            <div className="content">{props.children}</div>
        </div>
    )
}