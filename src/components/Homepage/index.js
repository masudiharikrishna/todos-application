import { Component } from "react";
import "./index.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {v4 as uuidV4} from "uuid"
import TodoItem from "../TodoItem/index"

class Homepage extends Component{
    state={
        title: "",
        errormsgtitle: false,
        text: "",
        errormsgtext: false,
        search: "",
        label: "",
        todoList:[],
        errormessage: ""
    }

    onToggle = (id) => {
        console.log(id)
        const updatedTodoList = this.state.todoList.map((eachItem) => {
          if (eachItem.id === id) {
            return { ...eachItem, completed: !eachItem.completed }; // Toggle completed status
          }
          return eachItem;
        });
        this.setState({ todoList: updatedTodoList });
      };

      onDelete = (id) => {
        console.log(id)
        const updatedTodoList = this.state.todoList.filter((eachTodo) => eachTodo.id !== id);
        console.log(updatedTodoList)
        this.setState({ todoList: updatedTodoList });
      };

    handleBlurtitle = () =>{
        const {title} = this.state
        if(title.trim().length === 0){
            this.setState({errormsgtitle: true})
        }
        else{
            this.setState({errormsgtitle: false})
        }
    }
    handleBlurtext = () =>{
        const {text} = this.state
        if(text.trim().length === 0){
            this.setState({errormsgtext: true})
        }
        else{
            this.setState({errormsgtext: false})
        }
    }
    addtodo = (event) =>{
        event.preventDefault()
        const {title, text, label, todoList} = this.state
        if (title.trim().length >0 && text.trim().length >0){
            const newTodo = {
                id : uuidV4(),
                title: title,
                text: text,
                label: label.split(","),
                completed: false
            }
            const newtodolist = [...todoList, newTodo]
            this.setState({todoList:newtodolist,
                title: "",
                text: "",
                label : "",
                errormessage: ""
            })
        }
        else{
            this.setState({errormessage:"Title and Description is require to create a new todo"})
        }
        
    }

    componentDidMount() {
        const storedTodos = JSON.parse(localStorage.getItem("todoList"));
        if (storedTodos) {
          this.setState({ todoList: storedTodos });
        }
    }
    componentDidUpdate(prevState) {
        if (prevState.todoList !== this.state.todoList) {
          localStorage.setItem("todoList", JSON.stringify(this.state.todoList));
        }
      }
    
    render(){
        const {title, text, todoList, search, label, errormsgtext, errormsgtitle, errormessage} = this.state

        const filteredTodos = todoList.filter((todo) => 
            todo.label.some((l) => l.toLowerCase().includes(search.toLowerCase()))
          );
        return(
            <div className="homepage-container">
                <h1><span className="span-element">T</span>odos <span className="span-element">A</span>pplication</h1>
                <div className="search-input-containers">
                    <div>
                        <input type="search" 
                        value={search} 
                        onChange={(e) =>this.setState({search:e.target.value})}
                        placeholder="Search for a todo"
                        className="form-control"
                        />
                    </div>
                    <form onSubmit={this.addtodo}>
                    <div className="add-todo-container">
                        <input type="text" 
                        className={`form-control ${errormsgtitle ? "is-invalid" : ""}`}
                        onChange={(e) =>this.setState({title:e.target.value})}
                        value={title}
                        placeholder="Add Title"
                        onBlur={this.handleBlurtitle}
                        />
                        <input type="text" 
                        className={`form-control ${errormsgtext ? "is-invalid" : ""}`}
                        onChange={(e) =>this.setState({text:e.target.value})}
                        value={text}
                        placeholder="Add Description"
                        onBlur={this.handleBlurtext}
                        />
                        <input type="text" 
                        className="form-control" 
                        onChange={(e) =>this.setState({label:e.target.value})}
                        value={label}
                        placeholder="Add Label"
                        />
                        {errormessage.length > 0 && <span className="span-element">Error while adding newtodo</span>}
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Add Todo
                    </button>
                </form>
                </div>
                <hr className="line"/>
                    {filteredTodos.length >=1 ? 
                    (<ul className="list-container">
                        {filteredTodos.map((eachtodo) => (
                            <TodoItem key = {eachtodo.id} 
                            itemDetails = {eachtodo}
                            onToggle={this.onToggle}
                            onDelete={this.onDelete}
                            />
                        ))}
                    </ul>) 
                    : 
                    (<div className="no-todos-container">
                        <h1>No todos yet!</h1>
                        <h4>Try adding new todos</h4>
                    </div>)}
            </div>
        )
    }
}
export default Homepage