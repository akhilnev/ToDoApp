
// export functin() -> is modern synrax rather than module.exports = function(

export function CreateToDo() {
    // note while adding style it is a double bracket ( one for JS and two for the CSS part )
  return (
    <div>
        <input style = {{
            padding: 10,
            margin: 10,
        }}type="text" placeholder="Enter Title please" /><br/>
        <input style = {{
            padding: 10,
            margin: 10,
        }}type="text" placeholder="Enter Description please" /><br/>
        <button style = {{
            padding: 10,
            margin: 10,
        }}>Add to-do</button>
    </div>
  )
}