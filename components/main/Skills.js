import styled from "styled-components"




const Skills = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;


.skills-colorblock {
    width: 433px;
    height: 95px;
    background: #596E45;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 99;
    margin-top: -135px;
    margin-left: -90px;
}

.skills-colorblock_shadow{
    width: 433px;
    height: 95px;
    margin-top: 90px;
    background: #B7BAA3;
    z-index: 3;
    margin-left: -200px;
}

.skills-h2{
    font-family: trochut;
    font-size: 81px;
    color: #F5EDE1;
    
}

.all-skill_icons{
    display: flex;
    flex-wrap: wrap;
    width: 1000px;
    align-items: center;
    justify-content: center;
}

.skill-icon{
    width: 150px;
    height: 150px;
    border-radius: 100px;
    background: #596E45;
    margin-top: 50px;
    font-size: 5.5rem;
    color: #F5EDE1;
    display: inline-block;
    margin-right: 25px;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin-bottom: -10px;
    
}

.figma {
   margin-top: 35px;
}

.html {
    margin-top: 35px;
}

.css {
    margin-top: 35px; 
}

.js {
    margin-top: 30px;
}

.wordpress{
    margin-top: 35px;
}

.trello {
    margin-top: 30px;
}

.sass {
    margin-top: 30px;
    margin-left: 5px;
}

.bootstrap {
    margin-top: 30px;
}


`;

export default Skills

