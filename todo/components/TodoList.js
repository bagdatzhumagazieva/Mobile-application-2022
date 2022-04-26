import { View } from 'react-native';
import Todo from './Todo';

const TodoList = ({todos,onCheck, onDelete}) => {
  return (
    <View>
      {todos.map((todo) => (<Todo key={todo.id} todo={todo} onCheck={onCheck} onDelete={onDelete} />))}
    </View>
  )
}

export default TodoList;