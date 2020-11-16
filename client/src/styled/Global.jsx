import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
}

html {
    font-size: 10px;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif

    h1 {
        font-size: 4rem;
    }
    h2 {
        font-size: 2.8rem;
    }
    h3 {
        font-size: 2rem;
    }
    p {
        font-size: 1.6rem;
    }
}
${normalize}
`;

export { GlobalStyles };
