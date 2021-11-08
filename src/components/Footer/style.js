import styled from 'styled-components'

export const ContainerFooter = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
background: #3C4049 0% 0% no-repeat padding-box;
opacity: 1;
height: 25rem;
width: 100%;
`

export const BoxLogo = styled.div`
display: flex;
align-items: center;
flex-direction: column;
height: 6rem;
width: 100%;
padding-left: 7.5rem;
padding-right: 2rem;
opacity: 1;
`

export const BoxTitle = styled.div`
height: 10rem;
width: 100%;
text-align: left;
font: normal normal bold 10px Malgun Gothic;
letter-spacing: 0px;
color: #FFFFFF;
opacity: 1;
margin-right: 1vw;
&:nth-child(5) {
    margin-right: 4vw;
  }
`

export const BoxParagraph = styled.div`
text-align: left;
`

export const LogoFooter = styled.img`
width: 30%;
`

export const TitleFooter = styled.h2`
margin-bottom: 1rem;
`

export const ParagraphFooter = styled.p`
margin-bottom: 0.5rem;
font: normal normal normal 10px Malgun Gothic;
letter-spacing: 0px;
color: #FFFFFF;
opacity: 1;
`