import Head from 'next/head'
import Link from 'next/link'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCode, faHighlighter } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

import Body from "../components/body/Body"
import Header from "../components/header/Header"

import Main from "../components/main/Main"
import Hero from "../components/main/Hero"
import About from "../components/main/Aboutme"
import Projects from "../components/main/Projects"
import Skills from "../components/main/Skills"
import Learning from "../components/main/Learning"
import Footer from "../components/footer/Footer"
import Image from 'next/image'
import styles from '../styles/Home.module.css'



import H1 from "../components/heading";



// const Demo = styled.div`
// background: red;
// width: 200px;
// height: 250px; 
// `;


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>N/U</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>

      <Body>
        <Header id="home" >
          <div className="nav">
          <a href="#home"><Image className="logo" src="/img/logo.png" width="48px" height="59px" alt=""/> </a>
              <div className="nav-container">
                <nav className="nav-bar">
              <FontAwesomeIcon icon="fa-solid fa-bars" className="menu" />
                  <ul>
                    <li>
                      <a href="#about">About</a>
                    </li>
                    <li>
                      <a href="#projects">Projects</a>
                    </li>
                    <li>
                      <a href="#skills">Skills</a>
                    </li>
                    <li>
                      <a href="#contact">Contact</a>
                    </li>
                  </ul>
                </nav>
              </div>
          </div>
        </Header>
        
        <Main>
          <Hero className="hero">
            <div className="hero_content">
              <div className="hero-inline">
                  <div className="hero-img-container">
                    <Image className="hero-img" src="/img/heroimg.png"height="306.41px" width="577.45px"  alt=""/>
                  </div>
                  <div className="hero-main-text">
                    <h1 className="hero-text-light">My mom said I spend too much time on the internet,</h1>
                  </div>
              </div>
                <div className="hero-bold-container">
                  <h2 className="hero-text-bold">So I made it my career.</h2>
                </div> 
            </div>
          </Hero>

            <About id="about" className="about"> 
            <div className="about_textbox">
              <h2 className="about_h2">Hello,</h2>
            </div>
            <div className="aboutimg_container">
            <Image className="portrait_img" src="/img/portrait.png"height="376px" width="282px"  alt="" />
            </div>
           
              <div className="about_section">
              <div className="about-content">
              <div className="about_name">
              I´m
                  <h2 className="my_name">Nathalie</h2></div> 
                <div className="paragraph"> I´m a 22 year old UX-Design student who loves designing and finding creative ways to problem solve. I have previously studies Front-End development.</div>
              
              <div className="paragraph"> My interest in web development started when I was in primary school. I was struggeling with math and my cousin thought it would help with a more visual way and therefore tought me using Scratch.</div>
             
              <div className="paragraph"> In the last years of primary school and the beginning of high school, I started my own blog and got caught up in making my own HTML blog designs and ended up changing the design way to often.</div>
              
              <div className="paragraph"> Coding left my mind for several years and when I was done with high school I had no idea what I wanted to do. I was talking to a childhood friend about my future and he mentioned coding since he remembered that I enjoyed it when we were kids.</div>
             
              <div className="paragraph"> After that I simply just applied to Front-End Development at Noroff School of Technology. After finishing Front-End development I found that I enjoy the design process more and therefor decided to continue my studies at Noroff with UX-Design.</div>
             
              </div>
              </div>
            </About>

           <Projects id="projects" className="projects"> 
           <h2 className="projects_h2">My Projects</h2>
           <div className="projects-inline">
           <div className="projects-img">
           <Image className="projects_img" src="/img/newprojects.png"height="1039px" width="374.65px"  alt=""/>
             </div> 
           <div className="projects-info">
                <div className="projects-info_container">
                <h3 className="project-title">Aloe Skin</h3>
                <p className="projects-info_p">Lorem ipsum dolor 
sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
<div className="project-btn"><a href="https://github.com/nathalieutstumo/semester-project2-nathalieutstumo">See project</a></div>
                </div>
                <div className="projects-info_container">
                <h3 className="project-title">Villa SULT</h3>
                <p className="projects-info_p">Lorem ipsum dolor 
sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className="project-btn"><a href="https://github.com/nathalieutstumo/project-exam-2_nathalieutstumo">See project</a></div>
                </div>
                <div className="projects-info_container">
                <h3 className="project-title">JS frameworks CA</h3>
                <p className="projects-info_p">Lorem ipsum dolor 
sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
<div className="project-btn"><a href="https://github.com/nathalieutstumo/ca-js-frameworks-nathalieutstumo">See project</a></div>
                </div>
            
             </div>
           </div>
            </Projects>

<Skills id="skills">
  <div className="skills-title">
  <div className="skills-colorblock_shadow"></div>
<div className="skills-colorblock">
  <h2 className="skills-h2">Skills</h2>
</div>
  </div>

<div className="all-skill_icons">
  <div className="skill-icon"><FontAwesomeIcon icon="fa-brands fa-figma" className="figma"/></div>
  <div className="skill-icon"><FontAwesomeIcon icon="fa-brands fa-html5" className="html" /></div>
  <div className="skill-icon"><FontAwesomeIcon icon="fa-brands fa-css3-alt" className="css"/></div>
  <div className="skill-icon"><FontAwesomeIcon icon="fa-brands fa-js" className="js"/></div>
  <div className="skill-icon"><FontAwesomeIcon icon="fa-brands fa-wordpress" className="wordpress"/></div>
  <div className="skill-icon"><FontAwesomeIcon icon="fa-brands fa-trello" className="trello"/></div>
  <div className="skill-icon"><FontAwesomeIcon icon="fa-brands fa-sass" className="sass" /></div>
  <div className="skill-icon"><FontAwesomeIcon icon="fa-brands fa-bootstrap" className="bootstrap"/></div>
</div>

</Skills>

<Learning id="learning">
  <div className="learning-title">
  <div className="learning-colorblock_shadow"></div>
<div className="learning-colorblock">
  <h2 className="learning-h2">Learning</h2>
</div>
  </div>

<div className="all-learning_icons">
  <div className="learning-icon"><FontAwesomeIcon icon="fa-brands fa-react" className="react" /> </div>
  <div className="learning-icon"><div className="next">Next.js</div></div>
  
</div>

</Learning>

        </Main>

        <Footer id="contact">
          <div className="footer-title"> 
          <h2 className="contact-h2">Contact Me</h2>
          </div>

          <div className="all-contact_icons">
  <div className="contact-icon"><a href="https://www.instagram.com/nathalieutstumo/"><FontAwesomeIcon icon="fa-brands fa-instagram" className="instagram" /></a><p className="user-ig">nathalie.utstumo</p> </div>
  <div className="contact-icon"><FontAwesomeIcon icon="fa-solid fa-envelope" className="email" /><p className="user-mail">nathalie.utstumo@gmail.com</p></div>
  <div className="contact-icon"><a href="https://github.com/nathalieutstumo"><FontAwesomeIcon icon="fa-brands fa-github" className="github"/></a> <p className="user-git">nathalieutstumo</p></div>
 
</div>
        
        </Footer>

        
      </Body>

    </div>
  )
}
