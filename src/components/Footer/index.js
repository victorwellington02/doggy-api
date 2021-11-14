import React from "react";
import {graphql, useStaticQuery} from'gatsby'
import * as S from './style'

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
        <S.ContainerFooter>
        <S.BoxLogo>
            <S.LogoFooter src={logofooter.url} alt=""/>
        </S.BoxLogo>
        <S.BoxTitle>
            <S.TitleFooter>{titlelocation}</S.TitleFooter>
            <S.BoxParagraph>
            <S.ParagraphFooter>{paragraphnort}</S.ParagraphFooter>
            <S.ParagraphFooter>{paragraphname}</S.ParagraphFooter>
            <S.ParagraphFooter>{paragraphnmbrp}</S.ParagraphFooter>
            <S.ParagraphFooter>{paragraphnmbrs}</S.ParagraphFooter>
            <S.ParagraphFooter>{paragraphemail}</S.ParagraphFooter>
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
            <S.ParagraphFooter>{paragraphhome}</S.ParagraphFooter>
            <S.ParagraphFooter>{paragraphabout}</S.ParagraphFooter>
            <S.ParagraphFooter>{paragraphservices}</S.ParagraphFooter>
            <S.ParagraphFooter>{paragraphreservation}</S.ParagraphFooter>
            <S.ParagraphFooter>{paragraphcontact}</S.ParagraphFooter>
            </S.BoxParagraph>
        </S.BoxTitle>
        <S.BoxTitle>
            <S.TitleFooter>{titlesocials}</S.TitleFooter>
            <S.BoxParagraph>
            <S.ParagraphFooter>{paragraphtwitter}</S.ParagraphFooter>
            <S.ParagraphFooter>{paragraphfacebook}</S.ParagraphFooter>
            <S.ParagraphFooter>{paragraphgoogle}</S.ParagraphFooter>
            <S.ParagraphFooter>{paragraphpinterest}</S.ParagraphFooter>
            </S.BoxParagraph>
        </S.BoxTitle>
        </S.ContainerFooter>
        <S.BoxCopyright>
            <S.TitleCopyright>{paragraphcopyright}</S.TitleCopyright>
        </S.BoxCopyright>
        </>
    )
}