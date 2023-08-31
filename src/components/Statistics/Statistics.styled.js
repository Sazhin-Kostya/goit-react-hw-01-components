import styled from 'styled-components';

const randomColor = function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
 
}

export const Container = styled.section`
width:450px;
display:flex;
flex-wrap:wrap;
justify-content: center;
border:1px solid black;
`;

export const Title = styled.h2`
width: 450px;
border-bottom:1px solid black;
text-align:center;
margin: 0;
line-height: 60px;
font-family: cursive;
`;

export const List = styled.ul`
list-style:none;
display:flex;
padding-left:0;
margin: 0;
height: 130px;
text-align: center;
line-height: 45px;
`;

export const Item = styled.li`
background-color: ${randomColor};
width:90px;
height:100%;
text-size:30px;
display:flex;
flex-direction:column;
justify-content: center;
font-family: cursive;
font-weight: bold;
`;