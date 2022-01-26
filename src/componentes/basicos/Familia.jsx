import React from "react";
import FamiliaMembro from "./FamiliaMembro";

export default props => {
    return (
        <div>
            <FamiliaMembro nome = "Pedro" {...props}/>
            <FamiliaMembro nome = "Ana" {...props}/>
            <FamiliaMembro nome = "Thiago" {...props}/>
        </div>
    )
}