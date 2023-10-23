import React from 'react'
import style from './ListFile.module.css'

const ListFile = (props) => {


    const {id,Name, Des} = props.todo
  return (
    <article className={style.todo}>
       <div>
        <h1>{id}</h1>
        <h2>{Name}</h2>
        <p>{Des}</p>
       </div>

       <div>
        <button className={style.btn}>
            <i className="fa fa-trash fa-2x"></i>
        </button>
       </div>
    </article>
  )
}

export default ListFile
