import AddTodo from 'components/molecules/AddTodo';
import { FilterType } from 'components/molecules/FilterList';
import TodoList from 'components/molecules/TodoList';
import Footer from 'components/organism/Footer';
import { useTodo } from 'contexts/TodoContext';
import { useState } from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';

const Main = () => {
  const [filterStatus, setFilterStatus] = useState<FilterType>('all');
  const { todos, dispatch } = useTodo();

  const filteredTodos = todos.filter((todo) => {
    if (filterStatus === 'all') return todo;
    return filterStatus === 'active' ? !todo.completed : todo.completed;
  });
  
  const remainingTodos =
    filteredTodos.length === 0
      ? ('no todo' as const)
      : filteredTodos.length === 1
      ? (`${filteredTodos.length} item left` as const)
      : (`${filteredTodos.length} items left` as const);

  const handleOnDragEnd = (result: DropResult) => {

    if (!result.destination) return;
    const items = filteredTodos.slice();
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    dispatch({ type: 'SET_TODO_ORDER', payload: items });
  };

  const onFilterChange = (type: FilterType) => {
    setFilterStatus(type);
  };

  return (
    <main>
      <AddTodo />
      <div className="wrapper">
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="droppable">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                <TodoList filteredTodos={filteredTodos} />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        <Footer
          filterType={filterStatus}
          onFilterChange={onFilterChange}
          remainingTodos={remainingTodos}
        />
      </div>
    </main>
  );
};

export default Main;
