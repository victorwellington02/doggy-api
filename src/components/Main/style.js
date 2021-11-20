import styled from 'styled-components'

export const ContainerMain = styled.div`
background-image: url(${props => props.backgroundImage});
background-size: 100%;
background-repeat: no-repeat;
height: 660px;
opacity: 1;
`

export const BoxBackground = styled.div`
display: flex;
justify-content: center;
align-items: flex-start;
flex-direction: column;
height: 56%;
width: 38%;
padding-left: 96px;
`

export const TitleMain = styled.h1`
font-size: 30px;
text-align: left;
font: normal normal bold Malgun Gothic;
letter-spacing: 0px;
color: #6D4545;
opacity: 1;
margin-bottom: 0.4rem;
`

export const SubtitleMain = styled.p`
font-size: 20px;
font: normal normal normal Malgun Gothic;
letter-spacing: 0px;
color: #6D4545;
opacity: 1;
margin-bottom: 1rem;
`

export const ParagraphBackground = styled.p`
font-size: 15px;
font: normal normal normal Malgun Gothic;
letter-spacing: 0px;
color: #6D4545;
opacity: 1;
margin-bottom: 1.5rem;
`

export const ButtonBackground = styled.a`
font-size: 20px;
background: #FEAF02 no-repeat padding-box;
background-size: 50% auto;
border-radius: 4px;
padding: 15px 30px;
font: normal 16px Malgun Gothic;
letter-spacing: 0px;
color: #FFFFFF;
text-transform: uppercase;
opacity: 1;
cursor: pointer;
text-decoration:none;
&:hover { 
    color: #000;
}
`

export const BoxDogs = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
padding-right: 80px;
padding-left: 80px; 
height: 70vh;
margin-bottom: 3rem;
`

export const BoxDogBoard = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`

export const TitleDogBoard = styled.h2`
text-align: left;
font: normal normal bold 20px Malgun Gothic;
letter-spacing: 0px;
color: #373737;
opacity: 1;
margin-top: 1rem;
`

export const BtnDogBoard = styled.p`
background: #FEAF02 0% 0% no-repeat padding-box;
border-radius: 4px;
opacity: 1;
text-align: left;
padding: 15px 45px;
font: normal 12px Malgun Gothic;
letter-spacing: 0px;
color: #FFFFFF;
opacity: 1;
cursor: pointer;
margin-top: 0.5rem;
&:hover { 
    color: #000;
}
`

export const ImageDogBoard = styled.img`
width: 224px;
`

export const BoxDogDay = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`

export const TitleDogDay = styled.h2`
text-align: left;
font: normal normal bold 20px Malgun Gothic;
letter-spacing: 0px;
color: #373737;
opacity: 1;
margin-top: 1rem;
`

export const BtnDogDay = styled.p`
background: #FEAF02 0% 0% no-repeat padding-box;
border-radius: 4px;
opacity: 1;
text-align: left;
padding: 15px 45px;
font: normal 12px Malgun Gothic;
letter-spacing: 0px;
color: #FFFFFF;
opacity: 1;
cursor: pointer;
margin-top: 0.5rem;
&:hover { 
    color: #000;
}
`

export const ImageDogDay = styled.img`
width: 224px;
`

export const BoxDogTrain = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`

export const TitleDogTrain = styled.h2`
text-align: left;
font: normal normal bold 20px Malgun Gothic;
letter-spacing: 0px;
color: #373737;
opacity: 1;
margin-top: 1rem;
`

export const BtnDogTrain = styled.p`
background: #FEAF02 0% 0% no-repeat padding-box;
border-radius: 4px;
opacity: 1;
text-align: left;
padding: 15px 45px;
font: normal 12px Malgun Gothic;
letter-spacing: 0px;
color: #FFFFFF;
opacity: 1;
cursor: pointer;
margin-top: 0.5rem;
&:hover { 
    color: #000;
}
`

export const ImageDogTrain = styled.img`
width: 224px;
`

export const BoxDogGroom = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`

export const TitleDogGroom = styled.h2`
text-align: left;
font: normal normal bold 20px Malgun Gothic;
letter-spacing: 0px;
color: #373737;
opacity: 1;
margin-top: 1rem;
`

export const BtnDogGroom = styled.p`
background: #FEAF02 0% 0% no-repeat padding-box;
border-radius: 4px;
opacity: 1;
text-align: left;
padding: 15px 45px;
font: normal 12px Malgun Gothic;
letter-spacing: 0px;
color: #FFFFFF;
opacity: 1;
cursor: pointer;
margin-top: 0.5rem;
&:hover { 
    color: #000;
}
`

export const ImageDogGroom = styled.img`
width: 224px;
`

export const BoxHouse = styled.div`
background-image: url(${props => props.backgroundImg});
background-size: 100%;
background-repeat: no-repeat;
height: 456px;
`

export const BoxWhy = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
width: 43%;
height: 36%;
padding-top: 12%;
padding-bottom: 5%;
padding-left: 96px;
`

export const BoxLorem = styled.div`
display: flex;
align-items: flex-start;
justify-content: center;
float: left;
padding-left: 7%;
padding-right: 62%;
padding-bottom: 1%;
`

export const TitleWhy = styled.h2`
margin-bottom: 15px;
text-align: left;
font: normal normal bold 32px/32px Malgun Gothic;
letter-spacing: 0px;
color: #373737;
opacity: 1;
`

export const SubtitleWhy = styled.p`
margin-bottom: 15px;
text-align: left;
font: normal normal normal 16px Malgun Gothic;
letter-spacing: 0px;
color: #373737;
opacity: 1;
`

export const ParagraphLorem = styled.p`
margin-left: 8px;
text-align: left;
font: normal normal normal 14px Malgun Gothic;
letter-spacing: 0px;
color: #373737;
opacity: 1;
`

export const ImageParagraph = styled.img`
height: 20px;
`

export const BoxWhat = styled.div`
text-align: center;
height: 451px;
background: #FEAF02 0% 0% no-repeat padding-box;
opacity: 1;
`

export const BoxVideo = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding-top: 46px;
`

export const ImageDogs = styled.img`
height: 230px;
`

export const BoxInfosVideo = styled.div`
background-image: url(${props => props.backgroundDogs});
margin-right: 50px;
background-color: white;
background-size: 100%;
background-repeat: no-repeat;
height: 280px;
width: 385px;
`

export const TitleWhat = styled.h2`
padding-top: 46px;
color: white;
`

export const ParagraphVideo = styled.p`
margin-top: 5.6rem;
text-align: center;
font: normal normal normal 16px Malgun Gothic;
letter-spacing: 0px;
color: #373737;
opacity: 1;
`

export const ImageStart = styled.img`
margin-top: 5rem;
height: 71px;
cursor: pointer;
`

export const Links = styled.a`
text-decoration: none;
`