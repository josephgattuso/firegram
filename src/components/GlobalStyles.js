import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

:root {
  --primaryColor: #fe3a5d;
  --textColor: #24292e;
  --errorInfo: #d73a49;
}

* {
  box-sizing: border-box;
  margin: 0;
}

html {
  font-size: 16px;
}

body {
  color: var(--textColor);
  font-family: -apple-system, "Helvetica Neue", sans-serif;
  font-size: 1rem;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
    color: var(--primaryColor);
    text-decoration: none;
    &:active {
      color: var(--primaryColor);
    }
    &:hover {
      color: var(--primaryColor);
    }
    &:visited {
      color: var(--primaryColor);
    }
  }

.app {
  background: #fafafa;
  height: 100vh;
  margin: 0 auto;
  max-width: 960px;
}
`;

export default GlobalStyles;
