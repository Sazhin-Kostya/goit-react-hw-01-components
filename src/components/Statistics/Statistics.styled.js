import styled from 'styled-components';

const randomColor = function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
 
}

export const Container = styled.section`
width:300px;
display:flex;
flex-wrap:wrap;
justify-content: center;
border:1px solid black;
`;

export const List = styled.ul`
list-style:none;
display:flex;
gap:10px;
padding-left:0;
`;

export const Item = styled.li`
background-color: ${randomColor};
`;