import { useState } from "react";
import styled from "styled-components";
import { deleteTodoListReq, getTodoListReq } from "../api/todo";
import Button from "./Button";
import List from "./List";

const TodoLists = ({
    content,
    checked,
    id,
    setTodoList,
}: {
    content: string;
    checked: boolean;
    id: number;
    setTodoList: any;
}) => {
    const [edit, setEdit] = useState(false);

    const handleDeleteTodo = (id: number) => {
        console.log(id);
        deleteTodoListReq(id)?.then((res) => {
            if (res.status === 200) {
                getTodoListReq()?.then((res) => {
                    if (res.data) {
                        setTodoList(res.data);
                    }
                });
            }
        });
    };

    const onChangeEdit = () => {
        setEdit(!edit);
    };

    console.log(edit);
    return (
        <div
            style={{
                width: "100%",
                padding: "0px 10px",
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px",
            }}
        >
            <List content={content} checked={checked} edit={edit} />
            <ListButton
                onClick={() => {
                    onChangeEdit();
                }}
            >
                {edit ? "수정완료" : "수정"}
            </ListButton>
            <ListButton
                onClick={() => {
                    handleDeleteTodo(id);
                }}
            >
                삭제
            </ListButton>
        </div>
    );
};

export default TodoLists;

const ListButton = styled.button`
    width: 50px;
    height: 50px;
    border: none;
    border-radius: 5px;
    background-color: #4fc3f7;
    margin-left: 0.5rem;
    transition: all 0.1s;
    :hover {
        background-color: limegreen;
    }
`;
