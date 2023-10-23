import React, {useState} from 'react'
import Style from './Newtodo.module.css'

const Newtodo = (props) => {

const [todo, Settodo] = useState({title: " ",  desc: " ",})

const { title, desc } = todo;

const handlechange =(event)=>{
    const name = event.target.name;

    Settodo((oldtodo)=>{
        return{...oldtodo, [name]: event.target.value}
    })

}



const handleclick = (event)=>{
    event.preventDefault();
    props.onAddTodo(todo)
    Settodo({title: "", desc: ""})
    
}



  return (
   <form className={Style.form} onSubmit={handleclick} >
    <div className= {Style["div1-div2"]}>
        <label htmlFor='title'>Title:</label>
        <input type='text' name='title' id='title'  value={title} onChange={handlechange}></input>
    </div>
    <div className={Style["div1-div2"]}>
        <label htmlFor='Desc'>Add Todo description:</label>
        <textarea type ="text" id='desc' name='desc' value={desc} onChange={handlechange}></textarea>
    </div>
    <button type='submit'>Add Todo</button>


   </form>
  )
}

export default Newtodo
