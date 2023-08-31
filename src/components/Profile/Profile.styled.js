import styled from 'styled-components';

export const Profilee = styled.div`

margin-top:20px;
margin-left:auto;
`;

export const Card = styled.div`
width:450px;
display:flex;
flex-wrap:wrap;
flex-direction: column;
border: 1px solid black;
padding-top: 20px;
padding-bottom:20px;
background-color: beige;
`;

export const Photo = styled.img`
margin-top:20px;
margin-left:auto;
margin-right:auto;
width:150px;
border-radius:100%;
border: 1px solid black;
`;

export const Text = styled.p`
font-size:20px;
text-align: center;
font-family: cursive;
color:grey;
`;

export const List = styled.ul`
width:450px;
height:40px;
list-style:none;
display:flex;
padding-left:0;
margin-top:0;

justify-content: space-around;
border-bottom: 1px solid black;
border-right: 1px solid black;
border-left: 1px solid black;
`;

export const Item = styled.li`
width:150px;
font-size:16px;
font-family: cursive;
color:grey;
border:1px solid black;
text-align:center;
display:flex;
flex-direction:column;
background-color: azure;
`;