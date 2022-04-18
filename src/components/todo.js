import React from 'react';


function Todo({ todo }){
    // destructing the properties
    const {id, title, completed} = todo;
    const h1 = <h1> {title} </h1>;
    // line through property <strike>
    // ternary operator -- conditional rendering
    const text = completed ? <strike>{h1}</strike> : h1;
    return <div data-testid={`todo-${id}`}> {text} </div>
}

export default Todo