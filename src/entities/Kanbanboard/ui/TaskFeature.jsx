import React, { memo, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import Button from 'src/shared/ui/Button/Button'
import { deleteTodo, getTodos } from '../model/services/todos.service'
import { useSelector } from 'react-redux'
import { getTodosIsLoading } from '../model/selectors/todos.selector'
const TaskFeature = memo((props) => {
    const { task } = props
    const loading = useSelector(getTodosIsLoading)
    const dispatch = useDispatch()


    const handleDelete = useCallback(() => {
        dispatch(deleteTodo(task.id))
        dispatch(getTodos())
    }, [])

    return (
        <div>
            {loading ? <Button disabled={true}>Delete</Button> : <Button onClick={handleDelete} >Delete</Button>}
            <Button>Edit</Button>
        </div>
    )
})

export default TaskFeature