import { useState } from "react";
import styled from "styled-components";
import Button from "./Button";

const List = ({
    content,
    checked,
    edit,
}: {
    content: string;
    checked: boolean;
    edit: boolean;
}) => {
    const [check, setCheck] = useState(false);

    const onChangeCheckBox = (e: any) => {
        setCheck(!check);
    };

    return (
        <ListContainer>
            <CheckBox
                type="checkbox"
                checked={check}
                onChange={onChangeCheckBox}
            />
            {edit ? <input /> : <Content>{content}</Content>}
        </ListContainer>
    );
};

export default List;

const ListContainer = styled.div`
    width: 85%;
    display: flex;
    align-items: center;
    padding-left: 10px;
    background-color: white;
    border-radius: 5px;
    transition: all 0.1s;
    /* :hover {
        background-color: #eaeaea;
    } */
`;

const CheckBox = styled.input`
    appearance: none;
    /* background-color: #4fc3f7; */
    border: 1px solid #eaeaea;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 5px;

    &:checked {
        border-color: transparent;
        background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
        background-size: 100% 100%;
        background-position: 50%;
        background-repeat: no-repeat;
        background-color: #0098ee;
    }
`;

const Content = styled.span`
    font-size: 1.25rem;
    margin-left: 1rem;
`;
