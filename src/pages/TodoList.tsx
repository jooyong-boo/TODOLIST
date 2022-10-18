import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AddTodoReq, getTodoListReq } from "../api/todo";
import Button from "../components/Button";
import TodoInput from "../components/TodoInput";
import TodoLists from "../components/TodoLists";

const TodoList = () => {
    const [input, setInput] = useState("");
    const [todoList, setTodoList] = useState([]);

    console.log(input);
    console.log(todoList);

    useEffect(() => {
        getTodoListReq()?.then((res) => {
            if (res.data) {
                setTodoList(res.data);
            }
        });
    }, []);

    return (
        <Background>
            <MainTitle>TodoList</MainTitle>
            <TodoContainer>
                <TodoInputContainer>
                    <TodoInput input={input} setInput={setInput} />
                    <Button
                        input={input}
                        setTodoList={setTodoList}
                        setInput={setInput}
                    >
                        +
                    </Button>
                </TodoInputContainer>
                {todoList
                    ? todoList.map((todo) => {
                          const { content, checked, id } = todo;
                          return (
                              <React.Fragment key={id}>
                                  <TodoLists
                                      content={content}
                                      checked={checked}
                                      setTodoList={setTodoList}
                                      id={id}
                                  />
                              </React.Fragment>
                          );
                      })
                    : null}
            </TodoContainer>
        </Background>
    );
};

export default TodoList;

const Background = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const TodoContainer = styled.div`
    width: 600px;
    height: 400px;
    background-color: aliceblue;
    display: flex;
    justify-content: start;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
    padding: 10px;
    overflow: auto;
    overflow-x: hidden;
    border: 1px solid #eaeaea;
`;

const TodoInputContainer = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 10px;
    padding-bottom: 10px;
    justify-content: space-between;
    border-bottom: 1px solid #eaeaea;
`;

const MainTitle = styled.span`
    font-size: 4rem;
    color: #0098ee;
    font-weight: bold;
    margin-bottom: 1rem;
`;
