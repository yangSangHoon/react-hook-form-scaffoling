import { css } from '@emotion/react';

export const GlobalStyle = css`
    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
            'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: gray;
    }

    .App-header {
        background-color: #282c34;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        font-size: calc(10px + 2vmin);
        color: white;
    }
`;

export default GlobalStyle;
