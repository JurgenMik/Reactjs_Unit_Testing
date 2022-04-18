import {render, screen, cleanup} from "@testing-library/react";
import renderer from 'react-test-renderer'
import Todo from '../todo'

// cleanup method to clean up renders
// no separate call - self invoke
afterEach(() => {
    cleanup();
})


test('should render non-completed todo', () => {
    const todo = {id: 1, title: 'wash dishes', completed: false};
    // pass  item as a prop to the component
    render(<Todo todo={todo}/>);
    // retrieve component by assigned testId
    const todoElement = screen.getByTestId('todo-1');
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent('wash dishes')
    // inverted - no <strike> if prop false
    expect(todoElement).not.toContainHTML('<strike>')
});

test('should render completed todo', () =>{
    const todo = {id: 2, title: 'make dinner' , completed: true };
    // pass  item as a prop to the component
    render(<Todo todo={todo}/>);
    // retrieve component by assigned testId
    const todoElement = screen.getByTestId('todo-2');
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent('make dinner')
    expect(todoElement).toContainHTML('<strike>')
});

test('matches snapshot', ()=>{
    const todo = {id: 1, title: 'wash dishes', completed: false};
    const tree = renderer.create(<Todo todo={todo}/>).toJSON();
    expect(tree).toMatchSnapshot();
});