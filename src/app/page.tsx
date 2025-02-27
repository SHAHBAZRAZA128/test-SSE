"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [todos, setTodos] = useState<any[]>([]); 
  const [inputValue, setInputValue] = useState(""); 
    const [editId, seteditId] = useState(null); 
  const [editText, seteditText] = useState(""); 
  const [inputerror, setinputerror] = useState(false); 

  
  useEffect(() => {
    getAllTodos();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 
    insertTodo(inputValue)
  };
  const handleEditClick=(todo:any)=>{
    seteditId(todo._id);
    seteditText(todo.todoDescription)
  }

  //GET Request
  const getAllTodos = async() => {
    try {
     const response =  await axios.get("/api/todos")
     if (Array.isArray(response.data)) {
      setTodos(response.data); 
    } 
    else {
      setTodos([]); 
       }
    } 
    catch (error) {
      console.error("Error fetching todos", error);
    }
   
    
  }
  //POST Request
  const insertTodo = async (todoDescription: string) => {
    if (!inputValue.trim()) {
      setinputerror(true)
      return;
    }
    try {
      const response = await axios.post("/api/todos", { todoDescription } , {
        
          headers: { "Content-Type": "application/json" } 
      
      });
  
      if (response.data) {
        const newTodo = { _id: response.data.id, todoDescription: todoDescription };
  
        
        setTodos((prevTodos) => [...prevTodos, newTodo])
        setInputValue("");
        setinputerror(false)
      }
    } catch (error) {
      console.error("Error inserting todo", error);
    }
  };
  //PUT Request
  const handleUpdate = async() =>{
    if (!editText.trim()) return;
    try {
      await axios.put(`/api/todos/${editId}`, { todoDescription: editText } , {
        
          headers: { "Content-Type": "application/json" } 
      
      });
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo._id === editId ? { ...todo, todoDescription: editText } : todo
        )
      );

      seteditId(null); 
      seteditText("");
    } catch (error) {
      console.error("Error updating todo", error);
    }
  }
  //DELETE Request
  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`/api/todos/${id}`);
      setTodos((prevTodos) => prevTodos.filter((todo) => todo._id !== id));  
    } catch (error) {
      console.error("Error deleting a todo", error);
    }
  };
  

  return (
    <div className="w-full h-screen flex justify-center">
      <div className="bg-blue-300 max-h-full p-20 w-[600px]">
        <h1 className="text-center font-bold text-4xl mb-14">To-Do List</h1>

        <form onSubmit={handleSubmit}>
          <div className="flex space-x-2">
            <input
              className="w-[300px] p-1.5 ml-14 focus:outline-none"
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)} 
            />
            <button  type="submit" className="bg-blue-900 text-white px-2">
              Add
            </button>
          </div>
          {inputerror &&
            <p  className="text-[12px] text-red-600 pl-14 font-bold">
              *This is a required field</p>
            }
        </form>

        <div className="pl-10">
          {todos.length === 0 ? (
            <div className="flex justify-center pt-20 font-bold text-2xl">No data to show</div>
          ) : (
            todos.map((todo) => (
              <div
                key={todo._id} 
                className="w-[300px] bg-red-600 text-white p-4 m-4 flex justify-between items-center"
              >
                {editId === todo._id? (
                  <input 
                  type="text" 
                  value={editText}
                  className="p-1 text-black"
                  onChange={(e)=>seteditText(e.target.value)}/>
                ): (
                  <div>{todo.todoDescription}</div>

                )}
                <div>
                  {editId ===todo._id ? (
                    <button onClick={handleUpdate}>
                      💾
                    </button>

                  ): (
                    <button onClick={()=> handleEditClick(todo)}>
                      ✏️
                    </button>
                  )}
                  <button onClick={() => handleDelete(todo._id)}>✖</button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
