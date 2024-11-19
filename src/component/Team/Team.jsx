import React, { Children } from 'react'
import './Team.scss'
import { BiLogoFacebookCircle } from "react-icons/bi";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { FaSquareXTwitter } from "react-icons/fa6";

import team_img_1 from './../../assets/img/team/01.webp'
import team_img_2 from './../../assets/img/team/02.webp'
import team_img_3 from './../../assets/img/team/03.webp'
import team_img_4 from './../../assets/img/team/04.webp'


const Team = () => {
  return (
    <>
      <div className="row_col">
        <Team_card img={team_img_1} name='Angelika' position='Software Engineer' />
        <Team_card img={team_img_2} name='David Brown' position='Data Analyst' />
        <Team_card img={team_img_3} name='Shira' position='UX Designer' />
        <Team_card img={team_img_4} name='Olivia White' position='Project Manager' />
      </div>
    </>
  )
}

const Team_card = ({ name = "n/a", position = "###", img }) => {
  return (
    <>
      <div className=" team_card">
        <div className="team_img">
          <img src={img} alt="Team Member" />
          <ul className="social_link_list">
            <Social_Icon link="#">
              <BiLogoFacebookCircle />
            </Social_Icon>
            <Social_Icon link="#">
              <BiLogoInstagramAlt />
            </Social_Icon>
            <Social_Icon link="#">
              <BiLogoLinkedinSquare />
            </Social_Icon>
            <Social_Icon link="#">
              <FaSquareXTwitter />
            </Social_Icon>
          </ul>
        </div>
        <div className="team_content">
          <h2>{name}</h2>
          <p>{position}</p>
        </div>

      </div>
    </>
  )
}



const Social_Icon = ({ children, link = "#" }) => {
  return (
    <li>
      <a href={link} className='social_link' target='_blank'>
        {children}
      </a>
    </li>
  )
}

export default Team
