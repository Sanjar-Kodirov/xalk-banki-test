import { memo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postTodo, getTodos } from '../model/services/todos.service'
import { getTodosIsLoading } from '../model/selectors/todos.selector'
import Input from 'src/shared/ui/Input/input'
import Button from 'src/shared/ui/Button/Button'


export const CreateTodos = memo(() => {
    const dispatch = useDispatch()

    const isLoading = useSelector(getTodosIsLoading)

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')


    const handleTitleChange = (e) => {
        setTitle(e)
    }

    const handleDescriptionChange = (e) => {
        setDescription(e)
    }

    function addTodo() {
        dispatch(postTodo({ title, description }))
        dispatch(getTodos())
    }

    return (
        <div>
            <Input onChange={handleTitleChange} type="text" placeholder="Title" />
            <br></br>
            <Input onChange={handleDescriptionChange} type="text" placeholder="Description" />
            <br></br>
            {isLoading ? <Button disabled={true}>Loading...</Button> : <Button onClick={addTodo}>Add</Button>}
        </div>
    )
})
