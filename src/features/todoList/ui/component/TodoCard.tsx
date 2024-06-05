import React from 'react';
import styles from "@/features/todoList/ui/cssModule/TodoCard.module.css"
import Button from "@/kit/button/Button";
import {Check, CheckCheck, ListTodo, Pencil, Trash2} from "lucide-react";
import Card from "@/kit/card/Card";
import {TodoModel, TodoStatus} from "@/store/data/TodoListModels";
import {useTodoList} from "@/store/StoreProvider";

const TodoCard = ({id , status ,description ,title}: TodoModel) => {
    
    let {updateStatus , removeTodo} = useTodoList();

    /**
     * @description update todo status by id 
     * if todo status is equal to IDL then its change to PENDING 
     * and if its not equal to IDL it must be PENDING so status should change to FULFILLED
     */
    const handleUpdateTodoStatus = () => {
        updateStatus(id , status == TodoStatus.IDL ? TodoStatus.PENDING : TodoStatus.FULFILLED)
    }
    
    return (
        <Card bg={'gradient'}>
            <div className={styles.title}>
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
            <div className={styles.actions}>
                {(status != TodoStatus.FULFILLED) && (
                    <Button variant={'success'} onClick={handleUpdateTodoStatus}>
                        {status == TodoStatus.IDL ? (
                            <ListTodo size={20} strokeWidth={1}/>
                        ) : (status == TodoStatus.PENDING) ? (
                            <Check size={20} strokeWidth={1} />
                        ) : (<CheckCheck size={20} strokeWidth={1} />)}
                    </Button>  
                )}
                <Button variant={'info'}>
                    <Pencil size={20} strokeWidth={1}/>
                </Button>
                <Button variant={'danger'} onClick={() => removeTodo(id)}>
                    <Trash2 size={20} strokeWidth={1}/>
                </Button>
            </div>
        </Card>
    );
};

export default TodoCard;