export interface TodoModel {
    id: string | number
    title: string
    description: string
    status: TodoStatus
}

export enum TodoStatus {
    PENDING,
    FULFILLED,
    IDL
}

export interface TodoListContextModel {
    todos: TodoModel[],
    addTodo: (todo: AddTodoPropType) => void,
    removeTodo: (id: string | number) => void,
    editTodo: (todo: EditTodoPropType) => void,
}

export type AddTodoPropType = Pick<TodoModel , "description" | "title">
export type EditTodoPropType = Pick<TodoModel, "id" | "title" | "description">