import React from "react";
import {graphql, useStaticQuery} from'gatsby'
import * as S from './style'
import { Link } from 'gatsby'
import "./styles.css"

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
    <S.ContainerHeader href="#" id="header">
        <S.BoxLogo>
        <S.Links href="http://localhost:8000/"><S.LogoHeader src={logoheader.url} alt=""/></S.Links>
        </S.BoxLogo>
        <S.BoxButtons>
        <S.Links href="http://localhost:8000/"><S.ButtonsHeader>{btnhome}</S.ButtonsHeader></S.Links>
        <S.Links href="#about"><S.ButtonsHeader>{btnabout}</S.ButtonsHeader></S.Links>
        <S.Links href="#services"><S.ButtonsHeader>{btnservices}</S.ButtonsHeader></S.Links>
        <S.Links href="#reservation"><S.ButtonsHeader>{btnreservation}</S.ButtonsHeader></S.Links>
        <S.Links href="#footer"><S.ButtonsHeader>{btncontact}</S.ButtonsHeader></S.Links>
        <S.Links href="#"><S.ImgTel src={imglogotel.url} alt=""/></S.Links>
        <S.Links href="#"><S.ButtonsHeader>{btnnumber}</S.ButtonsHeader></S.Links>
        </S.BoxButtons>
    </S.ContainerHeader>
    </>
)
}