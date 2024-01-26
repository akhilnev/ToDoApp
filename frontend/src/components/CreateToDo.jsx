
// export functin() -> is modern synrax rather than module.exports = function(
    
export function CreateToDo() {
  return (
    <div>
        <input type="text" placeholder="Enter Title please" /><br/>
        <input type="text" placeholder="Enter Description please" /><br/>
        <button>Add to-do</button>
    </div>
  )
}