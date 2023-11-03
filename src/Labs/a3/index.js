import Classes from "./Classes";
import ConditionalOutput from "./ConditionalOutput";
import JavaScript from "./JavaScript";
import PathParameters from "./PathParameters";
import Styles from "./Styles";
import TodoList from "./todos/TodoList";
import { useSelector } from "react-redux";

function Assignment3() {
    const { todos } = useSelector((state) => state.todosReducer);

    return (
        <div>
            <h2>Assignment 3</h2>
            <TodoList />
            <ConditionalOutput />
            <Styles />
            <Classes />
            <PathParameters />
            <JavaScript />
            <ul className="list-group">
                {todos.map((todo) => (
                    <li className="list-group-item" key={todo.id}>
                        {todo.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Assignment3;