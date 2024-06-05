'use client'
import React, {createContext, ReactNode, useCallback, useContext, useEffect, useState} from 'react';
import {
    AddTodoPropType,
    EditTodoPropType,
    TodoListContextModel,
    TodoModel,
    TodoStatus
} from "@/store/data/TodoListModels";
import {v4} from 'uuid';

let TodoListContext = createContext<TodoListContextModel | undefined>(undefined);

/**
 * @description todo list store
 * @param {ReactNode} children
 * @return {ReactNode}
 */
const StoreProvider = ({children}: { children: ReactNode }): ReactNode => {

    const [todos, setTodos] = useState<TodoModel[] | undefined>()

    /**
     * @description get todos data from local storage and populate state when component mount
     */
    useEffect(() => {
        if (localStorage) {
            setTodos(localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos') ?? "[]") : undefined);
        }
    }, []);

    /**
     * @description update local storage with new todos array after todos state change
     */
    useEffect(() => {
        if (localStorage && todos)
            localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);


    /**
     * @description add todo item in the end of todos list state
     * @param {AddTodoPropType} todo title and description of todo item
     * @example actionAddTodo({title: "title" , description: "description" })
     * @return {void}
     */
    const actionAddTodo = useCallback((todo: AddTodoPropType) => {
        const newTodo = {
            id: v4(),
            status: TodoStatus.IDL,
            ...todo
        } as TodoModel

        setTodos(prevState => [...(prevState ?? []), newTodo])
    }, [])

    /**
     * @description edit todo item -> find by id and update
     * @param {EditTodoPropType} todo id , title and description of updated todo item
     * @example actionEditTodo({id: <uuid> ,title: "title" , description: "description" })
     * @return void
     */
    const actionEditTodo = useCallback((todo: EditTodoPropType) => {
        setTodos(prevState => prevState?.map(val => {
            if (val.id == todo.id)
                return {
                    ...val,
                    title: todo.title!,
                    description: todo.description!,
                }
            return val
        }))
    }, [])

    /**
     * @description delete todo item
     * @param {string | number} id id of deleted todo item
     * @example actionRemoveTodo(id)
     * @return {void}
     */
    const actionRemoveTodo = useCallback((id: string | number) => {
        setTodos(prevState => prevState?.filter(val => val.id != id))
    }, [])

    const actionUpdateStatus = useCallback((id: string | number, status: TodoStatus) => {
        setTodos(prevState => prevState?.map(val => {
            if (val.id == id)
                return {
                    ...val,
                    status
                }
            return val
        }))
    }, [])

    return (
        <TodoListContext.Provider
            value={{todos, addTodo: actionAddTodo, editTodo: actionAddTodo, removeTodo: actionRemoveTodo , updateStatus: actionUpdateStatus}}>
            {children}
        </TodoListContext.Provider>
    );
};

export default StoreProvider;

export const useTodoList = () => useContext(TodoListContext)!;