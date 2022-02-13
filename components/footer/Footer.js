import styled from "styled-components"

const Footer = styled.footer`
width: 100vw;
height: 366px;
display: flex;
justify-content: center;
background: #B7BAA3;
padding-left: 50px;
flex: 0 0 auto;
margin-top: 100px;
margin-bottom: 200px;

.footer-title{
    margin-top: -50px;
    margin-left: -70px;
    width: 400px;
    height: 300px;
    position: absolute;
}

.contact-h2{
    font-family: trochut;
    font-size: 81px;
    color: #404040
    
}


.all-contact_icons{
    display: flex;
    flex-wrap: wrap;
    width: 1000px;
    align-items: center;
    justify-content: space-evenly;
    margin-left: -50px;
    margin-top: -50px;
    
}

.contact-icon{
    width: 125px;
    height: 125px;
    border-radius: 100px;
    background: #596E45;
    margin-top: 100px;
    font-size: 4.5rem;
    color: #F5EDE1;
    display: inline-block;
    margin-right: 25px;
    text-align: center;
   
   
    
}

.instagram {
   margin-top: 25px;
}

.mail {
    margin-top: 15px;
    font-size: 4.5rem;
    color: #F5EDE1;
    font-family: roboto;
}

.github {
    margin-top: 25px;
 }



`;

export default Footer
