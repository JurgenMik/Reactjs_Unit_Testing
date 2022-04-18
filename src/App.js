import './App.css';
import Todo from "./components/todo";


function App() {
    const todos = [
        {id: 1, title: 'wash dishes' , completed: false },
        {id: 2, title: 'make dinner' , completed: true}
    ]
  return (
      // for each separate  obj we render the component
    <div className="App">
        { todos.map((todos) => {
           return (<Todo todo={todos}/>)
        })
        }
    </div>
  );
}

export default App;
