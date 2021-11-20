import React from "react"
import {graphql, useStaticQuery} from'gatsby'
import * as S from "./style"
import "./styles.css"

export function Main(){

const data = useStaticQuery(graphql`
query {
    alldata {
    mains {
        backgroundmaintop {
            url
        }
        titledoggy
        subtitledoggy
        paragraphdoggy
        btnreserve
        imgboard {
            url
        }
        imgday {
            url
        }
        imgtrain {
            url
        }
        imggroom {
            url
        }
        titleboard
        titleday
        titletrain
        titlegroom
        btnlearn
        backgroundmainbottom {
            url
        }
        titlewhy
        subtitlewhy
        circleparagraph {
            url
        }
        paragraphwhyp
        paragraphwhys
        paragraphwhyt
        paragraphwhyf
        titlewhat
        imgdogp {
            url
        }
        imgdogs {
            url
        }
        imglogostart {
            url
        }
    }
  }
}  
`)

const {backgroundmaintop, titledoggy, subtitledoggy, paragraphdoggy, btnreserve, imgboard, imgday, imgtrain,
    imggroom, titleboard, titleday, titletrain, titlegroom, btnlearn, backgroundmainbottom, titlewhy, subtitlewhy, 
    circleparagraph, paragraphwhyp, paragraphwhys, paragraphwhyt, paragraphwhyf, titlewhat, imgdogp, 
    imgdogs, imglogostart} = data.alldata.mains[0]

    return(
        <>
        <S.ContainerMain backgroundImage={backgroundmaintop.url}>
        <a href="#" id="reservation"/>    
            <S.BoxBackground>
                <S.TitleMain>{titledoggy}</S.TitleMain>
                <S.SubtitleMain>{subtitledoggy}</S.SubtitleMain>
                <S.ParagraphBackground>{paragraphdoggy}</S.ParagraphBackground>
                <S.ButtonBackground className="AnimationButtonMain" href="#">{btnreserve}</S.ButtonBackground>
            </S.BoxBackground>
        </S.ContainerMain>
        <a href="#" id="services"/>
        <S.BoxDogs>
            <S.BoxDogBoard>
                <S.ImageDogBoard src={imgboard.url} alt="" />
                <S.TitleDogBoard>{titleboard}</S.TitleDogBoard>
                <S.Links href="#"><S.BtnDogBoard>{btnlearn}</S.BtnDogBoard></S.Links>
            </S.BoxDogBoard>

            <S.BoxDogDay>
                <S.ImageDogDay src={imgday.url} alt="" />
                <S.TitleDogDay>{titleday}</S.TitleDogDay>
                <S.Links href="#"><S.BtnDogDay>{btnlearn}</S.BtnDogDay></S.Links>
            </S.BoxDogDay>

            <S.BoxDogTrain>
                <S.ImageDogTrain src={imgtrain.url} alt="" />
                <S.TitleDogTrain>{titletrain}</S.TitleDogTrain>
                <S.Links href="#"><S.BtnDogTrain>{btnlearn}</S.BtnDogTrain></S.Links>
            </S.BoxDogTrain>

            <S.BoxDogGroom>
                <S.ImageDogGroom src={imggroom.url} alt="" />
                <S.TitleDogGroom>{titlegroom}</S.TitleDogGroom>
                <S.Links href="#"><S.BtnDogGroom>{btnlearn}</S.BtnDogGroom></S.Links>
            </S.BoxDogGroom>
        </S.BoxDogs>
        <S.BoxHouse backgroundImg={backgroundmainbottom.url}>
        <a href="#" id="about"/>  
            <S.BoxWhy>
                <S.TitleWhy>{titlewhy}</S.TitleWhy>
                <S.SubtitleWhy>{subtitlewhy}</S.SubtitleWhy>
            </S.BoxWhy>
            <S.BoxLorem>
                <S.ImageParagraph className="AnimationCircleMain" src={circleparagraph.url} alt=""/>
                <S.ParagraphLorem>{paragraphwhyp}</S.ParagraphLorem>
            </S.BoxLorem>

            <S.BoxLorem>
                <S.ImageParagraph className="AnimationCircleMain" src={circleparagraph.url} alt=""/>
                <S.ParagraphLorem>{paragraphwhys}</S.ParagraphLorem>
            </S.BoxLorem>

            <S.BoxLorem>
                <S.ImageParagraph className="AnimationCircleMain" src={circleparagraph.url} alt=""/>
                <S.ParagraphLorem>{paragraphwhyt}</S.ParagraphLorem>
            </S.BoxLorem>

            <S.BoxLorem>
                <S.ImageParagraph className="AnimationCircleMain" src={circleparagraph.url} alt=""/>
                <S.ParagraphLorem>{paragraphwhyf}</S.ParagraphLorem>
            </S.BoxLorem>
        </S.BoxHouse>
        <S.BoxWhat>
            <S.TitleWhat>{titlewhat}</S.TitleWhat>
        <S.BoxVideo>
            <S.BoxInfosVideo backgroundDogs={imgdogp.url}>
            <S.Links href="#"><S.ImageStart src={imglogostart.url} /></S.Links>
            <S.ParagraphVideo>Jane Doe, New York</S.ParagraphVideo>
            </S.BoxInfosVideo>
            <S.BoxInfosVideo backgroundDogs={imgdogs.url}>
            <S.Links href="#"><S.ImageStart src={imglogostart.url} /></S.Links>
            <S.ParagraphVideo>Jane Doe, New York</S.ParagraphVideo>
            </S.BoxInfosVideo>
        </S.BoxVideo>
        </S.BoxWhat>
        </>
    )
}