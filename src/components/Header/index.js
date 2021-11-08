import React from "react";
import {graphql, useStaticQuery} from'gatsby'
import * as S from './style'

export function Header(){

const data = useStaticQuery(graphql`
query {
    alldata {
    headers {
      btncontact
      btnabout
      btnhome
      btnreservation
      btnservices
      logoheader {
        url
      }
      imglogotel {
          url
      }
      btnnumber
    }
  }
}  
`)

const {btncontact, btnabout, btnhome, btnreservation, btnservices, logoheader, btnnumber, imglogotel} = data.alldata.headers[0]

return(
    <>
    <S.ContainerHeader>
        <S.BoxLogo>
        <S.LogoHeader src={logoheader.url} alt=""/>
        </S.BoxLogo>
        <S.BoxButtons>
        <S.ButtonsHeader>{btnhome}</S.ButtonsHeader>
        <S.ButtonsHeader>{btnabout}</S.ButtonsHeader>
        <S.ButtonsHeader>{btnservices}</S.ButtonsHeader>
        <S.ButtonsHeader>{btnreservation}</S.ButtonsHeader>
        <S.ButtonsHeader>{btncontact}</S.ButtonsHeader>
        <S.ImgTel src={imglogotel.url} alt=""/>
        <S.ButtonsHeader>{btnnumber}</S.ButtonsHeader>
        </S.BoxButtons>
    </S.ContainerHeader>
    </>
)
}