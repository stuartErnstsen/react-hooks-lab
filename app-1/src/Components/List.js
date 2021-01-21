import Todo from './Todo';

const List = props => {
    const listDisplay = props.todoList.map((todo, i) => {
        return <Todo todoText={todo} key={i}/>
    })

    return (
        <div>
            {listDisplay}
        </div>
    )
}

export default List;