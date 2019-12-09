import styled from 'styled-components';
// we create the style for the element we are trying to reach
const HeaderStyles = styled.div`
   border: 1px solid orange;
   .main-nav {
       bordeR: 1px solid green;
       max-width: 1140px;
       margin: 0 auto;
       .logo {
           flex-grow: 1;
           font-family: 'Bebas Neue', cursive;
           h3 {
               line-height: 1.6;
               margin: 0;
           }
       }
   }
`;
// you may notice all we are doing is appending the HTML tag to the styled object, from there on it's regular CSS
export { HeaderStyles };