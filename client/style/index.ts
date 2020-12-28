import { createGlobalStyle, DefaultTheme, keyframes } from 'styled-components';

export const breakPoint = {
        xs: `only screen and (max-width: 480px)`,
        sm: `only screen and (max-width: 576px)`,
        md: `only screen and (max-width: 768px)`,
        lg: `only screen and (max-width: 992px)`,
        xl: `only screen and (max-width: 1200px)`,
        xll: `only screen and (max-width: 1600px)`,
};

const rotateAnimation = keyframes`
	0%   { -webkit-transform: rotate(0deg); }
	100% { -webkit-transform: rotate(360deg); }
`;

export const variable: DefaultTheme = {
        colors: {
                primary: {
                        one: '#5375E2',
                        two: '#7591E8',
                        three: '#98ACEE',
                        four: '#BAC8F3',
                        five: '#234dd3',
                },
                secondary: {
                        one: '#7791A1',
                        two: '#92A7B4',
                        three: '#ADBDC7',
                        four: '#C9D3D9',
                },
                red: {
                        one: '#F65868',
                        two: '#F87986',
                        three: '#F87986',
                },
                grey: {
                        one: '#5C616E',
                        two: '#7D818B',
                        three: '#9DA0A8',
                },
                orange: {
                        one: '#F3AA92',
                        two: '#F5BBA8',
                        three: '#F8CCBE',
                },
                white: {
                        one: '#fefefe',
                },
                font: {
                        black: '#171717',
                        white: '#fefefe',
                },
        },
        background: {
                one: 'linear-gradient(97.8deg, #5375e2 0.25%, #5375e2 49.61%, #f87986 100%)',
        },
        fontSize: {
                h1: 40,
                h2: 32,
                h3: 24,
                h4: 16,
                h5: 13,
                p1: 16,
                p2: 14,
                p3: 13,
        },
        ruler: 8,
        animation: {
                rotate: rotateAnimation,
        },
};

export const GlobalStyle = createGlobalStyle`

   @font-face {
    font-family: "SFPro";
    src: url("/font/SF-Pro-Display-Regular.otf");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "SFPro";
    src: url("/font/SF-Pro-Display-Semibold.otf");
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: "SFPro";
    src: url("/font/SF-Pro-Display-Medium.otf");
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: "SFPro";
    src: url("/font/SF-Pro-Display-Light.otf");
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: "SFPro";
    src: url("/font/SF-Pro-Display-Bold.otf");
    font-weight: bold;
    font-style: normal;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
     font-family:"SFPro", Arial, Helvetica, sans-serif;
  }

  a,li {
        text-decoration: none;
  }

  button, input {
        border: none;
        outline: none;
        background-color: transparent;
  }

  body {
    min-height: 100vh;
    width: 100%;
    position: relative;
  }

`;