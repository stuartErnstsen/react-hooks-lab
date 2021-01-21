import {useState} from 'react';

const Addtodo = props => {
    const [todoInput, setTodoInput] = useState('')

    const submitTodoInput = () => {
        props.addTodoFn(todoInput);
        setTodoInput('');
    }

    return (
        <div>
            <input value={todoInput} onChange={e=>setTodoInput(e.target.value)}></input>
            <button onClick={submitTodoInput}>Submit</button>
        </div>
    )
}

export default Addtodo;