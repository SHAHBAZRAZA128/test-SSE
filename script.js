console.log("Welcome to todolist app")

const addbutton = document.getElementById("add");
const todotask = document.getElementById("todotask");
const Itemscontainer = document.getElementById("itemscontainer");
const form = document.getElementById("form");
const inputerror = document.getElementById("inputerror");
form.addEventListener("submit", function(e) {
    e.preventDefault();     
  });

const getAllTodos = () => {
  try {
    fetch("http://localhost:5000/todos")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      Itemscontainer.innerHTML = "";
      if (Array.isArray(data) && data.length > 0) {
        data.forEach((item) => {
          const newItem = document.createElement("div");
          newItem.className =
            "w-[300px] bg-red-600 text-white p-4 m-4 flex justify-between items-center";
          
          const textSpan = document.createElement("span");
          textSpan.textContent = item.todoDescription;

          const buttonsContainer = document.createElement("div");

          const editButton = document.createElement("button");
          editButton.textContent = "✏️";
          editButton.className = "mr-2";
          editButton.addEventListener("click", async () => {
            if (editButton.textContent === "✏️") {
              const inputField = document.createElement("input");
              inputField.type = "text";
              inputField.value = textSpan.textContent;
              inputField.className = "p-1 text-black";
              newItem.insertBefore(inputField, textSpan);
              textSpan.style.display = "none";
              editButton.textContent = "💾";
              
              inputField.focus();
            } else if (editButton.textContent === "💾") {
              const inputField = newItem.querySelector("input");
              const updatedText = inputField.value.trim();
              
              if (!updatedText) return;
              await handleUpdate(item._id, updatedText);
              newItem.removeChild(inputField);
              textSpan.textContent = updatedText;
              textSpan.style.display = "inline";
              editButton.textContent = "✏️";
              getAllTodos();
            }
          });
          
          const deleteButton = document.createElement("button");
          deleteButton.textContent = "✖";
          deleteButton.addEventListener("click", () => handleDelete(item._id));

          buttonsContainer.appendChild(editButton);
          buttonsContainer.appendChild(deleteButton);
          
          newItem.appendChild(textSpan);
          newItem.appendChild(buttonsContainer);
          
          Itemscontainer.appendChild(newItem);
        });
      } else {
        Itemscontainer.innerHTML = "<p>No data to show</p>";
      }
    })
  } catch (error) { 
    console.error("Error fetching todos:", error)
  }
 
    
};
addbutton.addEventListener('click' , ()=> {
  const todoString =  todotask.value;
  const todoObject = {todoDescription : todoString}
    insertTodo(todoObject)
   
 })
 todotask.addEventListener("input", () => {
  if (todotask.value.trim() !== "") {
    inputerror.textContent = ""; // Error message hata do
  }
});
const insertTodo = async(todo)=>{
  if (todotask.value === "") {
   inputerror.textContent = "*This is a required field"
    return;
  }
  try {
   const response = await fetch("http://localhost:5000/todos" , {
    method : "POST" ,
    headers : {
     "Content-Type": "application/json"
    },
    body:JSON.stringify(todo)
   });
   const data = await response.json();
   console.log(data);
   todotask.value = ""
   getAllTodos();
  } catch (error) {
   console.error("Error inserting todo : " , error)
  }
 }
  
  const handleUpdate = async(id , newDescription)=> {
    const updatedObject = {todoDescription : newDescription}
    console.log(id);
    console.log(updatedObject)
    try {
      const response = await fetch(`http://localhost:5000/todos/${id}` , {
       method : "PUT" ,
       headers : {
        "Content-Type": "application/json"
       },
       body:JSON.stringify(updatedObject)
      });
      const data = await response.json();
      // getAllTodos();
      console.log(data);
     } catch (error) {
      console.error("Error Deleting todo : " , error)
     }
  }
const handleDelete = async(id)=> {
  try {
    const response = await fetch(`http://localhost:5000/todos/${id}` , {
     method : "DELETE" ,
     headers : {
      "Content-Type": "application/json"
     },
     body:JSON.stringify()
    });
    const data = await response.json();
    getAllTodos();
    
    console.log(data);
   } catch (error) {
    console.error("Error Deleting todo : " , error)
   }
}

  
getAllTodos();
 

