import axios from "axios";

export const AddTodoReq = (content: string) => {
    try {
        const result = axios.post("http://localhost:3001/todo", {
            content,
            checked: false,
        });
        console.log(result);
        return result;
    } catch (err) {
        console.log(err);
    }
};

export const getTodoListReq = () => {
    try {
        const result = axios.get("http://localhost:3001/todo");
        return result;
    } catch (err) {
        console.log(err);
    }
};

export const editTodoListReq = (id: number, content: string) => {
    try {
        const result = axios.patch(`http://localhost:3001/todo/${id}`, {
            content,
            checked: false,
        });
        return result;
    } catch (err) {
        console.log(err);
    }
};

export const deleteTodoListReq = (id: number) => {
    try {
        const result = axios.delete(`http://localhost:3001/todo/${id}`);
        return result;
    } catch (err) {
        console.log(err);
    }
};
