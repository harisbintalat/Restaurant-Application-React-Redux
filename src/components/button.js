import React from "react";

const Button = (props) => {
    
    // const {id,title,completed} = props.todo;
    // const h1= <h1>{props.title}</h1>
    // const test = completed? <strike>{h1}</strike> :h1;
    return(
        <React.Fragment>
        {/* <div data-testid="todo-1">
            {props.title}
        </div> */}
        <div data-testid='button'>
           {props.label}
        </div>
        </React.Fragment>
    );

}
export default Button;