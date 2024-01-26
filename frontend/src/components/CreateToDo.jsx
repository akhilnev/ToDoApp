import { useState } from "react"; // We need to import this to use the useState hook

// export functin() -> is modern synrax rather than module.exports = function(

// WIDELY USED WAY INSTEAD OF USING THE document.getElementById("inp").value WAY ( DOM MANIPULATION)

export function CreateToDo() {
    // note while adding style it is a double bracket ( one for JS and two for the CSS part )
    const[title,setTitle] = useState("");
    const[description,setDescription] = useState("");
  return (
    <div>
        <input style = {{
            padding: 10,
            margin: 10,
        }}type="text" id = "inp" placeholder="Enter Title please" onChange = {function(event){
            // This is called when the input field is changed
            // We will get the value of the input field and store it in the title variable
            const value = event.target.value;
            setTitle(value);
        }}/><br/>
        <input style = {{
            padding: 10,
            margin: 10,
        }}type="text" id = "desc" placeholder="Enter Description please" onChange={function(event){
            // This is called when the input field is changed
            // We will get the value of the input field and store it in the description variable
            const value = event.target.value;
            setDescription(value);
        }}/><br/>
        <button onClick = {()=>{
                // This function will be called when the button is clicked
    // We will get the title and description from the input fields
    fetch("http://localhost:3000/todo",{
        method : "POST",
        body: JSON.stringify({
            title: title,
            description: description
    }), 
    headers : {
        "Content-Type": "application/json" // This is the type of data we are sending
    }
     // Cant directly put a JSON we need to tweak it using JSON.stringify! -> FOR USING FETCH
    // IF WE WERE USING an AXIOS lib we dont need this! 
    }).then(async function(res){
        const json = await res.json();
        alert("To-do is added successfully!");
})
        }} style = {{
            padding: 10,
            margin: 10,
        }}>Add Todo</button>
    </div>
  )
}