import React, { useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { useDispatch, useSelector } from "react-redux";
import Column from "./Column";
import { getTodos } from "../model/services/getTodos.service";
import { getTodosCompleted, getTodosIncomplete } from "../model/selectors/getTodos.selector";
import { todosAction } from "../model/slice/todosSlice";
export function KanbanBoard() {
  const completed = useSelector(getTodosCompleted);
  const incomplete = useSelector(getTodosIncomplete);
  const dispatch = useDispatch();

  const { removeItemByIdCompeted, removeItemByIdInCompeted, setCompleted, setIncomplete } = todosAction;

  useEffect(() => {
    dispatch(getTodos());
  }, [])

  const handleDragEnd = (result) => {
    const { destination, source, draggableId } = result;


    if (source.droppableId == destination.droppableId) return;


    //REMOVE FROM SOURCE ARRAY
    if (source.droppableId == 2) {
      dispatch(removeItemByIdCompeted(draggableId));
    } else {
      dispatch(removeItemByIdInCompeted(draggableId, incomplete));
    }

    // GET ITEM
    const task = findItemById(draggableId, [...incomplete, ...completed]);

    //ADD ITEM
    if (destination.droppableId == 2) {
      dispatch(setCompleted([{ ...task, completed: !task.completed }, ...completed]));
    } else {
      dispatch(setIncomplete([{ ...task, completed: !task.completed }, ...incomplete]));
    }
  };

  function findItemById(id, array) {
    return array.find((item) => item.id == id);
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <h2 style={{ textAlign: "center" }}>PROGRESS BOARD</h2>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Column title={"TO DO"} tasks={incomplete} id={"1"} />
        <Column title={"DONE"} tasks={completed} id={"2"} />
        <Column title={"BACKLOG"} tasks={[]} id={"3"} />
      </div>
    </DragDropContext>
  );
}
