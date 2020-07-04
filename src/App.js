import React from 'react';
import {useDispatch,useSelector} from 'react-redux';
import './App.css';
import {incrementAsync,decrementAsync,fetchTodos} from './actions'

function App(){
    const counter = useSelector(state => state.counter);
    const Todos = useSelector(state => state.todos)
    const dispatch = useDispatch();

    const _OnSubstract=() =>{
       dispatch(decrementAsync());


    }
    const _OnAdd=() =>{
        dispatch(incrementAsync());


    }

    const _onFetchApi =(event) =>{
        console.log(Todos)
        dispatch(fetchTodos(counter))
    }
    return(
        <div className="App">
            <h1>Counter Buttons</h1>

            <div className="counter">
                <h3>Counter : {counter}</h3>
                <div className="buttons">
                    <button className="min" onClick={_OnSubstract}>Substract</button>
                    <div className="or"></div>
                    <button className="plus" onClick={_OnAdd}>Add</button>
                </div>
            </div>
             <button onClick={_onFetchApi}>Fetch Api </button>

        </div>
    )
}

export default App;