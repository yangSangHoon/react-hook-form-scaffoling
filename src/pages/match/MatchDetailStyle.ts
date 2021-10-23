import { css } from '@emotion/react';
import styled from '@emotion/styled';

const MatchDetailStyle = styled.div`
    border: 1px solid gray;
    padding: 20px;
    max-width: 500px;

    .error {
        color: red;
    }

    table {
        width: 100%;
    }

    td {
        display: flex;
        align-items: center;
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
    }

    button {
        width: 100px;
        height: 50px;
        text-align: center;
        margin: 0 auto;
        display: block;
        margin-top: 10px;
    }
`;

export default MatchDetailStyle;
