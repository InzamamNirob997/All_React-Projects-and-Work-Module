import React, { useState } from 'react';
import Appwork from './Appwork';
import style from './Home.module.css';
import Newtodo from './Newtodo';
import {v4 as uuidv4} from 'uuid'

const Home = () => {
  const [todos, settodos] = useState([]);

  // const HandleAddTodo = (todo) => {
  //   settodos((prevtodos)=>{
  //     return [...prevtodos, {id: uuidv4(), todo}]
  //   })
  //   console.log(todos)
  // };

  const HandleAddTodo = (todo) => {
    settodos((prevtodos) => {
      const newTodo = { id: uuidv4(), todo };
      console.log(newTodo); // Log the new todo
      return [...prevtodos, newTodo];
    });
  };
  








  return (
    <div className={style.container}>
      <h1 style={{ color: 'whitesmoke' }}>Todo App</h1>
      <Newtodo onAddTodo={HandleAddTodo} />
      <Appwork todos={todos} />
    </div>
  );
};

export default Home;

