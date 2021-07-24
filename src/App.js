import React from "react";
import "./style.css";
import Header from "./MyComponents/Header";
import {Todos} from "./MyComponents/Todos";
import {Footer} from "./MyComponents/Footer";
import {AddTodo} from "./MyComponents/AddTodo"
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import {About} from "./MyComponents/About";

export default function App() {
  const onDelete = (todo) => {
    console.log("I am OnDelete ", todo);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));

    const AddTodo=(title,desc)=>{
      let sno;
      if(todos.length===0){
        sno=0;
      }
      else{
        sno = todo[todos.length-1].sno+1;
      }
      const myTodo={
        sno: sno,
        title: title,
        desc: desc,
      }
    }
  }
  const [todos, setTodos] = useState([
    {
      sno:1,
      title:"Go to the market",
      desc:"you need to go to the market to get the job1 done " 
    },
    {
      sno:2,
      title:"Go to the mall",
      desc:"you need to go to the market to get the job2 done " 
    },
    {
      sno:3,
      title:"Go to the Hotel",
      desc:"you need to go to the market to get the job3 done " 
    }
  ]);
  return (
    <>
    <Router>
      <Header title = "My Todos List" searchBar={true}/>
         <Switch>
          <Route exact path="/" render={()=>{
            return(
          <>
            <AddTodo addTodo={AddTodo}/>
            <Todos todos={todos} onDelete={onDelete}/>
          </>)
          }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      <Footer/>
      </Router> 
    </>
  );
}

export default App;