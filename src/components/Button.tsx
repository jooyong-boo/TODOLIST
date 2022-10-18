import styled from "styled-components";
import { AddTodoReq, getTodoListReq } from "../api/todo";

const Button = ({
    children,
    input,
    setTodoList,
    setInput,
}: {
    children: string;
    input: string;
    setTodoList: any;
    setInput: any;
}) => {
    const AddTodo = () => {
        AddTodoReq(input)?.then((res) => {
            if (res.data) {
                getTodoListReq()?.then((res) => {
                    if (res.data) {
                        setInput("");
                        setTodoList(res.data);
                    }
                });
            }
        });
    };

    return <StyledBtn onClick={AddTodo}>{children}</StyledBtn>;
};

export default Button;

const StyledBtn = styled.button`
    width: 50px;
    height: 50px;
    border: none;
    border-radius: 5px;
    background-color: #4fc3f7;
    transition: all 0.1s;
    :hover {
        background-color: limegreen;
    }
`;
