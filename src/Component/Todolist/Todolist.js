import React, { useEffect, useReducer, useState } from "react";
import './Todolist.css'
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiSolidEdit } from "react-icons/bi";
import { TiTick } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { handleArr } from "../Slice";


const Todolist = () => {


    const dispatch = useDispatch()
    const state = useSelector(samp => samp)

    const [array, setArray] = useState(state.data.arr)
    const [completeArr, setCompletearr] = useState([])
    const [startArr, setStartarr] = useState([])
    const [progressArr, setProgressarr] = useState([])
    const [pendingArr, setPendingarr] = useState([])
    const [todovalue, Settodovalue] = useState("")
    const [tododescription, setTododescription] = useState("")
    const [startDate, setStartdate] = useState("")
    const [endDate, setEnddate] = useState("")
    const [edit, setEdit] = useState(false)
    const [empty, setEmpty] = useState(false)
    const [emptyvalue, setEmptyvalue] = useState("")
    const [allTodosactive, setAlltodosactive] = useState(false)
    const [startTodosactive, setStarttodosactive] = useState(false)
    const [progressTodosactive, setProgresstodosactive] = useState(false)
    const [pendingTodosactive, setPendingtodosactive] = useState(false)
    const [completeTodosactive, setCompletetodosactive] = useState(false)
    const [id, setId] = useState("")

    // assign input value in state

    const handle = (e) => {
        if (e.target.name === "todo") {
            Settodovalue(e.target.value)
        }
        else if (e.target.name === "description") {
            setTododescription(e.target.value)
        }
        else if (e.target.name === "start") {
            setStartdate(e.target.value)
        }
        else if (e.target.name === "end") {
            setEnddate(e.target.value)
        }
    }

    console.log(startDate, endDate);

    // set values in localstorage

    const handleEvent = () => {

        if (edit === true) {
            let obj = { todovalue, tododescription, startDate, endDate }
            console.log(obj);
            let a = array.map((e, i) => {
                return i === id ? obj : e
            })
            setArray(a)
        }
        else {
            let obj = { todovalue, tododescription, startDate, endDate }
            console.log(obj);

            obj.todovalue === "" ? setArray(array) || setEmpty(true) : setArray([...array, obj]) || setEmpty(false)
        }

        Settodovalue("");
        setTododescription("");
        setStartdate("")
        setEnddate("")
        console.log(emptyvalue, "submit");
        console.log(state.data.arr);
    }

    // handle delete function here

    const handleDelete = (todovalue) => {
        console.log("delete", todovalue);
        let a = array.filter((e) => {
            console.log(e.todovalue, todovalue);
            return e.todovalue !== todovalue
        })
        setArray(a)
    }



    // handle edit function here

    const handleEdit = (index) => {
        console.log("edit");
        let a = array.find((e, i) => {
            console.log(i, index);
            return i === index
        })
        setId(index)
        Settodovalue(a.todovalue)
        setTododescription(a.tododescription)
        setStartdate(a.startDate)
        setEnddate(a.endDate)
        setEdit(true)
    }

    // add completed todos in completed section

    const handleTick = (todovalue, tododescription) => {
        let a = array.filter((e, i) => {
            console.log(e.todovalue, todovalue);
            return e.todovalue !== todovalue
        })
        setArray(a)
        var date = new Date();
        let time = date.toLocaleTimeString();
        const day = date.getDate()
        let days=day<10?'0'+day:day
        const month = date.getMonth() + 1
        let months=month<10?'0'+month:month;
        const year = date.getFullYear()
        let dates = days + "/" + months + "/" + year;
        console.log(time);

        let obj = { todovalue, tododescription, colorChange: false, timing: time, date: dates }
        console.log(obj.tododescription);
        setCompletearr([...completeArr, obj])
    }

    // todos active buttons

    let color = {
        backgroundColor: "green"
    }
    let color1 = {
        backgroundColor: "grey"
    }

    const todoslist = () => {
        setAlltodosactive(true)
        setStarttodosactive(false)
        setProgresstodosactive(false)
        setPendingtodosactive(false)
        setCompletetodosactive(false)
    }
    const completetodos = () => {
        setAlltodosactive(false)
        setStarttodosactive(false)
        setProgresstodosactive(false)
        setPendingtodosactive(false)
        setCompletetodosactive(true)
    }

    const date = new Date()

    // starting todos functionality here

    const startingtodos = () => {
        const date = new Date()
        const day = date.getDate()
        let days=day<10?'0'+day:day
        const month = date.getMonth() + 1
        let months=month<10?'0'+month:month;
        const year = date.getFullYear()
        let dates = days + "/" + months + "/" + year;
        let currentDate = dates.split("/").reverse().join("-")

        console.log(startDate);
        let a = array.filter((e) => {
            console.log(e.startDate);
            return e.startDate === currentDate
        })
        setStartarr(a)
        console.log(startArr);

        setAlltodosactive(false)
        setStarttodosactive(true)
        setProgresstodosactive(false)
        setPendingtodosactive(false)
        setCompletetodosactive(false)
    }


    // progress todos functionality here

    const progressTodos = () => {
        const date = new Date()
        const day = date.getDate()
        let days=day<10?'0'+day:day
        const month = date.getMonth() + 1
        let months=month<10?'0'+month:month;
        const year = date.getFullYear()
        let dates = days + "/" + months + "/" + year;
        let currentDate = dates.split("/").reverse().join("-")
        console.log(startDate, endDate);
        let a = array.filter((e) => {
            console.log(e.startDate, e.endDate);
            return currentDate > e.startDate && currentDate < e.endDate
        })

        setProgressarr(a)
        console.log(progressArr);
        setAlltodosactive(false)
        setStarttodosactive(false)
        setProgresstodosactive(true)
        setPendingtodosactive(false)
        setCompletetodosactive(false)
    }

    // pending todos functionality here

    const pendingtodos = () => {
        setAlltodosactive(false)
        setStarttodosactive(false)
        setProgresstodosactive(false)
        setPendingtodosactive(true)
        setCompletetodosactive(false)


        const date = new Date()
        const day = date.getDate()
        let days=day<10?'0'+day:day
        const month = date.getMonth() + 1
        let months=month<10?'0'+month:month;
        const year = date.getFullYear()
        let dates = days + "/" + months + "/" + year;
        let currentDate = dates.split("/").reverse().join("-")
        console.log(startDate, endDate);
        let a = array.filter((e) => {
            return currentDate > e.endDate
        })
        console.log(a);
        setPendingarr(a)

    }




    return (
        <section className="todo-sec">
            <div className='todo-container'>
                <div className="todo-title">
                    <h1>Todo List</h1>
                </div>
                <div className='todo-row'>
                    <div className='todo-col'>
                        <input type='text' placeholder='Enter your lists' id="inputvalue" value={todovalue} name="todo" onChange={handle}></input>
                        <input type='text' placeholder='Enter your description' id="inputvalue" value={tododescription} name="description" onChange={handle}></input>
                        <input type='date' placeholder='Enter your lists' id="inputvalue" value={startDate} name="start" onChange={handle}></input>
                        <input type='date' placeholder='Enter your lists' id="inputvalue" value={endDate} name="end" onChange={handle}></input>
                        <button onClick={handleEvent}>Add</button>
                    </div>
                    {
                        empty === true ? <p className="error-msg">Please Enter your totdos</p> : ""
                    }
                    <div className="todos">
                        <button onClick={todoslist} style={allTodosactive === true ? color : null}>All</button>
                        <button onClick={startingtodos} style={startTodosactive === true ? color : null}>Start</button>
                        <button onClick={progressTodos} style={progressTodosactive === true ? color : null}>Progress</button>
                        <button onClick={pendingtodos} style={pendingTodosactive === true ? color : null}>Pending</button>
                        <button onClick={completetodos} style={completeTodosactive === true ? color : null}>Completed</button>
                    </div>
                    {
                        allTodosactive === true ? <div className="todo-col1">
                            {
                                array.map((e, i) => {
                                    console.log(e);
                                    return <div className="todo-box" key={i}>
                                        <div className="todo-values">
                                            <div className="todo-content">
                                                <h1>{e.todovalue}</h1>
                                                <p>{e.tododescription}</p>
                                            </div>
                                            <div className="icons">
                                                <RiDeleteBin6Line onClick={() => handleDelete(e.todovalue)} className="del-icon" />
                                                <BiSolidEdit onClick={() => handleEdit(i)} className="edit-icon" />
                                                <TiTick onClick={() => handleTick(e.todovalue, e.tododescription)} style={{ color: "green" }} />
                                            </div>
                                        </div>
                                        <div className="completed-time">
                                            <h1 className="completed-head">Start date:</h1>
                                            <p>{e.startDate}</p>
                                            <h1 className="completed-head">End date:</h1>
                                            <p>{e.endDate}</p>
                                        </div>
                                    </div>
                                })
                            }
                        </div> : ""

                    }
                    {
                        startTodosactive === true ? <div className="todo-col1">
                            {
                                startArr.map((e, i) => {
                                    console.log(e);
                                    return <div className="todo-box">
                                        <div className="todo-values" key={i}>
                                            <div className="todo-content">
                                                <h1>{e.todovalue}</h1>
                                                <p>{e.tododescription}</p>
                                                <p id="demo"></p>
                                            </div>
                                            <div className="icons">
                                                <RiDeleteBin6Line onClick={() => handleDelete(e.todovalue)} className="del-icon" />
                                            </div>
                                        </div>
                                        <div className="completed-time">
                                            <h1 className="progress">started</h1>
                                        </div>
                                    </div>
                                })
                            }
                        </div> : ""
                    }
                    {
                        progressTodosactive === true ? <div className="todo-col1">
                            {
                                progressArr.map((e, i) => {
                                    console.log(e);
                                    return <div className="todo-box" key={i}>
                                        <div className="todo-values">
                                            <div className="todo-content">
                                                <h1>{e.todovalue}</h1>
                                                <p>{e.tododescription}</p>
                                                <p id="demo"></p>
                                            </div>
                                            <div className="icons">
                                                <RiDeleteBin6Line onClick={() => handleDelete(e.todovalue)} className="del-icon" />
                                            </div>
                                        </div>
                                        <div className="completed-time">
                                            <h1 className="progress">Progress...</h1>
                                        </div>
                                    </div>
                                })
                            }
                        </div> : ""
                    }

                    {
                        pendingTodosactive == true ? <div className="todo-col1">
                            {
                                pendingArr.map((e, i) => {
                                    console.log(e);
                                    return <div className="todo-box" key={i}>
                                        <div className="todo-values">
                                            <div className="todo-content">
                                                <h1>{e.todovalue}</h1>
                                                <p>{e.tododescription}</p>
                                                <p id="demo"></p>
                                            </div>
                                            <div className="icons">
                                                <RiDeleteBin6Line onClick={() => handleDelete(e.todovalue)} className="del-icon" />
                                            </div>
                                        </div>
                                        <div className="completed-time">
                                            <h1 className="pending">Pending!</h1>
                                        </div>
                                    </div>
                                })
                            }
                        </div> : ""
                    }
                    {
                        completeTodosactive === true ? <div className="todo-col1">
                            {
                                completeArr.map((e, i) => {
                                    console.log(e);
                                    return <div className="todo-box" key={i}>
                                        <div className="todo-values">
                                            <div className="todo-content">
                                                <h1>{e.todovalue}</h1>
                                                <p>{e.tododescription}</p>
                                            </div>
                                            <div className="icons">
                                                <RiDeleteBin6Line onClick={() => handleDelete(e.todovalue)} className="del-icon" />
                                            </div>
                                        </div>
                                        <div className="completed-time">
                                            <h1 className="completed-head">Completed:</h1>
                                            <p>{e.timing}</p>
                                            <p>{e.date}</p>
                                        </div>
                                    </div>

                                })
                            }
                        </div> : ""

                    }
                </div>
            </div>
        </section>
    )
}

export default Todolist