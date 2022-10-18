import styled from "styled-components";

const TodoInput = ({
    input,
    setInput,
}: {
    input: string;
    setInput: (input: string) => void;
}) => {
    const handleChangeInput = (e: any) => {
        setInput(e.target.value);
    };

    return (
        <StyledInput
            placeholder="할일을 입력해주세요"
            value={input}
            onChange={handleChangeInput}
        />
    );
};

export default TodoInput;

const StyledInput = styled.input`
    width: 80%;
    height: 50px;
    border: none;
    border-radius: 5px;
    border: 1px solid #4fc3f7;
    font-size: 2rem;
    padding: 0px 20px;
`;
