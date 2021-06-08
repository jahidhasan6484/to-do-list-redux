import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, removeTodo } from '../actions/index';
import './todo.css';

const Todo = () => {
    const [inputData, setInputData] = useState('');
    const list = useSelector((state) => state.todoReducers.list)
    const dispatch = useDispatch();
    return (
        <div className="main-div">
            <div className="child-div">
                <figure>
                    <figcaption className="text-center title">To Do List</figcaption>
                </figure>

                <div className="addItems">
                    <input type="text" className="form-control" placeholder="Add items" value={inputData} onChange={(event) => setInputData(event.target.value)} />
                    <i className="fa fa-plus button" onClick={() => dispatch(addTodo(inputData), setInputData(''))}></i>
                </div>

                <div className="mt-2">
                    <ol class="list-group list-group-numbered items">
                        {
                            list.map((elem) => {
                                return (

                                    <li class="list-group-item d-flex justify-content-between align-items-start" key={elem.id}>
                                        <div class="ms-2 me-auto">
                                            <div class="fw-bold">{elem.data}</div>
                                        </div>
                                        <i className="fa fa-trash-alt button" title="Delete Item" onClick={() => dispatch(deleteTodo(elem.id))}></i>
                                    </li>

                                )
                            })
                        }

                    </ol>
                </div>

                {
                    list.length > 1 && <div className="showItems">
                        <button className="button mt-2 btn btn-outline-danger btn-sm" data-sm-link-text="remove All" onClick={() => dispatch(removeTodo())}>
                            <span>Remove All</span>
                        </button>
                    </div>
                }


            </div>
        </div>
    );
};

export default Todo;