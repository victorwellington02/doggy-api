import React from "react";
import {graphql, useStaticQuery} from'gatsby'
import * as S from './style'
import "./styles.css"

export function Footer(){

const data = useStaticQuery(graphql`
query {
    alldata {
    footers {
      logofooter {
        url
      }
      paragraphabout
      paragraphcontact
      paragraphcopyright
      paragraphemail
      paragraphfacebook
      paragraphgoogle
      paragraphhome
      paragraphmd
      paragraphname
      paragraphnmbrp
      paragraphnmbrs
      paragraphnort
      paragraphpinterest
      paragraphreservation
      paragraphservices
      paragraphstd
      paragraphtwitter
      titlesocials
      titlelocation
      titlelinks
      titlecare
    }
  }
}  
`)

const {logofooter, paragraphabout, paragraphcontact, paragraphcopyright, paragraphemail, paragraphfacebook, 
    paragraphgoogle, paragraphhome, paragraphmd, paragraphname, paragraphnmbrp, 
    paragraphnmbrs, paragraphnort, paragraphpinterest, paragraphreservation, 
    paragraphservices, paragraphstd, paragraphtwitter, titlesocials, 
    titlelocation, titlelinks, titlecare} = data.alldata.footers[0]

    return(
        <>
        <S.ContainerFooter href="#" id="footer">
        <S.BoxLogo>
        <S.Links href="#"><S.LogoFooter src={logofooter.url} alt=""/></S.Links>
        </S.BoxLogo>
        <S.BoxTitle>
            <S.TitleFooter>{titlelocation}</S.TitleFooter>
            <S.BoxParagraph>
            <S.Links href="#"><S.ParagraphFooter>{paragraphnort}</S.ParagraphFooter></S.Links>
            <S.Links href="#"><S.ParagraphFooter>{paragraphname}</S.ParagraphFooter></S.Links>
            <S.Links href="#"><S.ParagraphFooter>{paragraphnmbrp}</S.ParagraphFooter></S.Links>
            <S.Links href="#"><S.ParagraphFooter>{paragraphnmbrs}</S.ParagraphFooter></S.Links>
            <S.Links href="#"><S.ParagraphFooter>{paragraphemail}</S.ParagraphFooter></S.Links>
            </S.BoxParagraph>
        </S.BoxTitle>
        <S.BoxTitle>
            <S.TitleFooter>{titlecare}</S.TitleFooter>
            <S.BoxParagraph>
            <S.ParagraphFooter>{paragraphmd}</S.ParagraphFooter>
            <S.ParagraphFooter>{paragraphstd}</S.ParagraphFooter>
            </S.BoxParagraph>
        </S.BoxTitle>
        <S.BoxTitle>
            <S.TitleFooter>{titlelinks}</S.TitleFooter>
            <S.BoxParagraph>
            <S.Links href="#header"><S.ParagraphFooter>{paragraphhome}</S.ParagraphFooter></S.Links>
            <S.Links href="#about"><S.ParagraphFooter>{paragraphabout}</S.ParagraphFooter></S.Links>
            <S.Links href="#services"><S.ParagraphFooter>{paragraphservices}</S.ParagraphFooter></S.Links>
            <S.Links href="#reservation"><S.ParagraphFooter>{paragraphreservation}</S.ParagraphFooter></S.Links>
            <S.Links href="#footer"><S.ParagraphFooter>{paragraphcontact}</S.ParagraphFooter></S.Links>
            </S.BoxParagraph>
        </S.BoxTitle>
        <S.BoxTitle>
            <S.TitleFooter>{titlesocials}</S.TitleFooter>
            <S.BoxParagraph>
            <S.Links href="#"><S.ParagraphFooter>{paragraphtwitter}</S.ParagraphFooter></S.Links>
            <S.Links href="#"><S.ParagraphFooter>{paragraphfacebook}</S.ParagraphFooter></S.Links>
            <S.Links href="#"><S.ParagraphFooter>{paragraphgoogle}</S.ParagraphFooter></S.Links>
            <S.Links href="#"><S.ParagraphFooter>{paragraphpinterest}</S.ParagraphFooter></S.Links>
            </S.BoxParagraph>
        </S.BoxTitle>
        </S.ContainerFooter>
        <S.BoxCopyright>
            <S.TitleCopyright>{paragraphcopyright}</S.TitleCopyright>
        </S.BoxCopyright>
        </>
    )
}