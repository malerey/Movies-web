import styled from 'styled-components';

export const CardContainer = styled.article`
width: 250px;
/* height: 550px; */
margin: 10px;
display: flex;
flex-direction: column;
color: #FAFAFA; 
img {
    width: 100%;
    height: auto;
    transition: all 0.3s;
    cursor: pointer;
    :hover {
        transform: scale(1.05);
    }
}
.image-not-available {
    width: 100%;
    height: 378px;
    display: flex;
    justify-content: center;
    align-items:center;
    .icon-img-card {
        width:40px;
        height:50px;
        fill:rgb(168, 170, 173);
    }
}
h3 {
    margin: 5px;
    font-size: 28px;
    font-weight: lighter;
}
h4{
    margin: 2px;
    font-size: 20px;
    font-weight: lighter;
}
`;