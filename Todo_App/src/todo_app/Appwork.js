import React from 'react'
import ListFile from './ListFile'
import style from './Appwork.module.css'


const Appwork = (props) => {
    console.log(props.todos)

  return (
  <section className={style.todos}>
   {props.todos.map((todo)=>(
    <ListFile todo = {todo.todo} key={todo.id}/>

   ))}



   </section>
  )
}

export default Appwork
