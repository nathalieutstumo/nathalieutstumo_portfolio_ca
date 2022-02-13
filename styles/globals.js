import {createGlobalStyle} from "styled-components";
import media from "styled-media-query";

const GlobalStyle = createGlobalStyle`

html {
    background: #F5EDE1;
}

body {
    margin: 0;
    padding: 0;
}

.Home_container__bCOhY{
    margin: 0;
    padding: 0;
}

p {
    margin-left: 150px;
    margin-right: 150px;
    margin-top: 50px;
    margin-bottom: 50px;
    font-family: Roboto;
    font-weight: 300;
    font-size: 3 81px;
}

// h1{
//     font-family: Roboto;
//     font-weight: 300;
//     font-size: 2 121px;
// }

// h2{
//     font-family: Roboto;
//     font-weight: 700;
//     font-size: 2 121px;
// }






${media.lessThan('huge')`
html {
    background: #F5EDE1;
}
`};

${media.lessThan('large')`
html {
    background: red;
}
`};


${media.lessThan('medium')`
html {
    background: blue;
}
`};

${media.lessThan('small')`
html {
    background: pink;
}
`};

`;


export default GlobalStyle