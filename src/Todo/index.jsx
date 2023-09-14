import React, { Component, createRef } from 'react'

export default class Todo extends Component {
    state = {
        todoList: []
    }

    inputRef = createRef();


    addTodo = (event) => {
        event.preventDefault()
        const todoText = this.inputRef.current;
        this.setState(({ todoList }) => ({ 
            todoList: [...todoList, {text:todoText.value, id: new Date().valueOf()}],
         }), () => {
            this.inputRef.current.value = "";
         })
    }

  render() {

    console.log("render");
    const {  todoList } = this.state

    return (
      <main className='flex flex-col items-center h-screen'>
        <h1>Todo App</h1>
        <form className='flex my-10' onSubmit={this.addTodo}>
            <div>
                <label htmlFor="todoText" className='sr-only'>Todo Text</label>
                <input ref={this.inputRef} type="text" id='todoText' className='rounded-l-md' />
            </div>
            <button type="submit" className='btn rounded-l-none'>Add Todo</button>
        </form>
        <div className='todoList w-full flex-1'>
            {todoList.map((item)  => <div key={item.id} className='todoItem flex items-center m-4'>
                <div>
                    <label htmlFor="isCompleted" className='sr-only'>Is Completed</label>
                    <input type="checkbox" name="isCompleted" id="isCompleted" />
                </div>
                <p className='flex-1 mx-4 line-clamp-1'>{item.text}</p>
                <button type="button" className='btn'>Delete</button>
            </div>)}
            
           
        </div>
        <div className='filter w-full flex'>
            <button type="button" className='btn rounded-none flex-1'>ALL</button>
            <button type="button" className='btn rounded-none flex-1'>Pending</button>
            <button type="button" className='btn rounded-none flex-1'>Completed</button>
        </div>
      </main>
    )
  }
}
