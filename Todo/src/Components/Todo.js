import React, { Component } from 'react'

class Todo extends Component {
    constructor() {
        super();
        this.state = {
            tasks: [{ task: 'check mails', id: 1 }, { task: 'Read artile', id: 2 }, { task: 'Complete HW', id: 3 }],
            currTask: ''
        }
    }
    handleChange=(e)=>{
        this.setState({
            currTask:e.target.value
        })
       
    }
    handleSubmit=()=>{
        this.setState({
            tasks:[...this.state.tasks,{task:this.state.currTask,id:this.state.tasks.length
            +1}],
            currTask:''
        })
    }
    handleDelete=()=>{
        let narr=this.state.task.filter((taskObj)=>{
            return taskObj.id!=id

        })
        this.setState({
            tasks:[...narr]
           
        })
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.currTask} onChange={this.handleChange}/>
                <button onClick={this.handleSubmit}>Submit</button>
                <ul>
                    {
                        this.state.tasks.map((taskObj) => (
                            <li key={taskObj.id}>
                                <p>{taskObj.task}</p>
                                <button onClick={()=> this.handleDelete(taskObj.id)}>Delete</button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}
export default Todo;
