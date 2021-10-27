import styled from '@emotion/styled';

const InputStyle = styled.div`
    display: inline-flex;
    align-items: center;
    width: 100%;

    label {
        display: inline-block;
        width: 80px;
    }
    div {
        width: 100%;
    }
    input,
    select {
        width: 100%;
        height: 30px;
        padding: 0;
    }

    input {
        border: 1px solid blue;
        color: red;
    }
`;

export default InputStyle;
