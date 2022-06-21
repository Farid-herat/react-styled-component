import styled from "styled-components";



export const StyledHeader = styled.header`
background-color: ${({theme})=>theme.colors.header};
padding:40px 0;
margin: 0;

`


export const Nav  =styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 40px;

@media(max-width:${({theme})=>theme.mobile}){
    flex-direction: column;
}
`

export const Logo=styled.div`
h1{
    font-size: 4rem;
    font-weight: bolder;
}
`

export const Image = styled.img`
width: 375px;
margin-left: 40px;
`
