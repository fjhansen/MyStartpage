import styled from 'styled-components'

const theme = {
  primary: '#030303',
  secondary: '#646464',
  highlight: '#0E7AEE',
  sunrise: '#ffd400',
  retro: '#D41BB9',
  blinded: '#fff'

}

export const Wrap = styled.section `
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: space-around;

`

export const H1 = styled.h1 `
background-image: linear-gradient(to left, #020d22, #052143, #043467, #02488e, #035db6, #6264cb, #9d66d8, #d566dc, #ff5bae, #ff7375, #ffa33b, #ffd400);
`

export const UL = styled.ul `
list-style: none;
border: 2px solid ${props => props.theme.highlight};
width: 300px;
height: 150px;



`

export const LI = styled.li `
color: ${props => props.theme.sunrise};
border: 2px solid ${props => props.theme.highlight};
background-color: #406adf;



`

export default theme