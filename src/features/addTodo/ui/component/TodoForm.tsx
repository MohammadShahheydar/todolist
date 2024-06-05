"use client"
import React from 'react';
import styles from "@/features/addTodo/ui/cssModule/TodoForm.module.css"
import Button from "@/kit/button/Button";
import {TodoModel} from "@/store/data/TodoListModels";
import {SubmitHandler, useForm} from "react-hook-form";

const TodoForm = ({onSubmit, initialVal}: {
    initialVal?: Partial<Pick<TodoModel, "title" | "description">>,
    onSubmit: SubmitHandler<Partial<Pick<TodoModel, "title" | "description">>>
}) => {

    let {
        handleSubmit,
        register,
        formState: {
            errors
        }
    } = useForm<Partial<Pick<TodoModel, "title" | "description">>>({values: initialVal});

    return (
        <form onSubmit={handleSubmit(onSubmit)} style={{width: '100%'}}>
            <div className={styles.todoForm}>
                <p>عنوان</p>
                <input {...register("title", {required: true})} className={styles.todoInput} type="text"/>
                {errors.title && (<p style={{color: "red"}}>این فیلد اجباری است</p>)}
                <p>توضیحات</p>
                <textarea {...register("description", {required: true})} rows={3}
                          className={styles.todoInput}></textarea>
                {errors.description && (<p style={{color: "red"}}>این فیلد اجباری است</p>)}
                <Button variant={'success'}><h3>ثبت</h3></Button>
            </div>
        </form>
    )
        ;
};

export default TodoForm;