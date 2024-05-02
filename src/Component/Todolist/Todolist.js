import React, { useEffect, useState } from "react";
import './Todolist.css'
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiSolidEdit } from "react-icons/bi";
import { TiTick } from "react-icons/ti";

const Todolist = () => {
    
    
    const Fun = () => {
        return JSON.parse(localStorage.getItem("array") || "[]")
    }

    const CompletedTodos = () => {
        return JSON.parse(localStorage.getItem("completedtodo") || "[]")
    }



    const [todovalue, Settodovalue] = useState("")
    const [tododescription, setTododescription] = useState("")
    const [arrvalues, Setarrvalues] = useState(Fun())
    const [arrvalues1, Setarrvalues1] = useState(CompletedTodos())
    const [edit, setEdit] = useState(false)
    const [empty, setEmpty] = useState(false)
    const [emptyvalue, setEmptyvalue] = useState("")
    const [completedTodos, setCompletetodos] = useState(false)
    console.log(arrvalues);


    // assign input value in state
    
    const handle = (e) => {
        if (e.target.name === "todo") {
            Settodovalue(e.target.value)
        }
        else if (e.target.name === "description") {
            setTododescription(e.target.value)
        }
    }

    
    // set values in localstorage

    const handleEvent = () => {
        let obj = { todovalue, tododescription, colorChange: false }
        console.log(obj);

        obj.todovalue === "" ? Setarrvalues(arrvalues) || setEmpty(true) : Setarrvalues([...arrvalues, obj]) || setEmpty(false)
        Settodovalue("")
        setTododescription("")
        console.log(emptyvalue);
    }

    useEffect(() => {
        localStorage.setItem("array", JSON.stringify(arrvalues))
        localStorage.setItem("completedtodo", JSON.stringify(arrvalues1))

    }, [arrvalues])


    // handle delete function here

    const handleDelete = (todovalue) => {
        console.log("delete", todovalue);
        let a = arrvalues.filter((e) => {
            console.log(e.todovalue, todovalue);
            return e.todovalue !== todovalue
        })
        Setarrvalues(a)

        let b = arrvalues1.filter((e) => {
            console.log(e.todovalue, todovalue);
            return e.todovalue !== todovalue
        })
        Setarrvalues1(b)
    }



    // handle edit function here

    const handleEdit = (todovalue) => {
        console.log("edit");

        let a = arrvalues.find((e) => {
            return e.todovalue === todovalue
        })
        console.log(a);

        let b = arrvalues.filter((e) => {
            return e.todovalue !== todovalue
        })

        Settodovalue(a.todovalue)
        setTododescription(a.tododescription)
        setEdit(true)
        Setarrvalues(b)
    }

    // add completed todos in completed section

    const handleTick = (todovalue, tododescription) => {
        let a = arrvalues.filter((e, i) => {
            console.log(e.todovalue, todovalue);
            return e.todovalue !== todovalue
        })
        Setarrvalues(a)

        let obj = { todovalue, tododescription, colorChange: false }
        console.log(obj.tododescription);
        Setarrvalues1([...arrvalues1, obj])
        console.log(arrvalues1);
      
    }

    // todos and completed todos

    let color = {
        backgroundColor: "green"
    }

    const todoslist = () => {
        setCompletetodos(false)
    }
    const completetodos = () => {
        setCompletetodos(true)
    }

    return (
        <section className="todo-sec">
            <div className='todo-container'>
                <div className='todo-row'>
                    <div className='todo-col'>
                        <input type='text' placeholder='Enter your lists' id="inputvalue" value={todovalue} name="todo" onChange={handle}></input>
                        <input type='text' placeholder='Enter your description' id="inputvalue" value={tododescription} name="description" onChange={handle}></input>
                        <button onClick={handleEvent}>Add</button>
                    </div>
                    {
                        empty === true ? <p className="error-msg">Please Enter your totdos</p> : ""
                    }
                    <div className="todos">
                        <button onClick={todoslist} style={completedTodos === false ? color : null}>todos</button>
                        <button onClick={completetodos} style={completedTodos === true ? color : null}>completed</button>
                    </div>
                    {
                        completedTodos === false ? <div className="todo-col1">
                            {
                                arrvalues.map((e, i) => {
                                    console.log(e);
                                    return <div className="todo-value" key={i}>
                                        <div className="todo-content">
                                            <h1>{e.todovalue}</h1>
                                            <p>{e.tododescription}</p>
                                        </div>
                                        <div className="icons">
                                            <RiDeleteBin6Line onClick={() => handleDelete(e.todovalue)} className="del-icon" />
                                            <BiSolidEdit onClick={() => handleEdit(e.todovalue)} className="edit-icon" />
                                            <TiTick onClick={() => handleTick(e.todovalue, e.tododescription)} style={{ color: "green" }} />
                                        </div>
                                    </div>
                                })
                            }
                        </div> :
                            <div className="todo-col1">
                                {
                                    arrvalues1.map((e, i) => {
                                        console.log(e);
                                        return <div className="todo-value" key={i}>
                                            <div className="todo-content">
                                                <h1>{e.todovalue}</h1>
                                                <p>{e.tododescription}</p>
                                                <p id="demo"></p>
                                            </div>
                                            <div className="icons">
                                                <RiDeleteBin6Line onClick={() => handleDelete(e.todovalue)} className="del-icon" />
                                            </div>
                                        </div>
                                    })
                                }
                            </div>
                    }
                </div>
            </div>
        </section>
    )
}

export default Todolist