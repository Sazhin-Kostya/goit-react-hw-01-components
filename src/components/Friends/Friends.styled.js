import styled from 'styled-components';

export const List = styled.ul`
width:450px;
padding:0;
`;

export const Item = styled.li`
width:450px;
display:flex;
gap: 40px;
border: 1px solid black;
backgraund-color:azure;
height:80px;
`;

export const Photo = styled.img`
height:50px;
margin-top:auto;
margin-bottom:auto;
margin-left:50px;
`;

export const Text = styled.p`
margin-top:auto;
margin-bottom:auto;
font-size:40px;
font-family: cursive;
`;


const getBgColor = function (props) {
    switch (props.Status) {
        case true:
        return 'green'  
        case false:
        return 'red'      
    
        default:
            return null;
    }
}

export const IsOnline = styled.span`
width: 20px;
height: 20px;
margin-top: auto;
margin-bottom: auto;
margin-left: 30px;
background-color: ${getBgColor};
border-radius:100%;


`;