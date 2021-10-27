import { css } from '@emotion/react';
import styled from '@emotion/styled';

const MatchDetailStyle = styled.div`
    background-color: white;
    border: 1px solid gray;
    padding: 20px;
    max-width: 500px;

    .error {
        color: red;
    }

    table {
        width: 100%;
    }

    .ui-library {
        > label {
            display: inline-block;
            width: 70px;
        }
        > div {
            display: inline-block;
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
