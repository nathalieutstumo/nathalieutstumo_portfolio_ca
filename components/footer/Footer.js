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
    // display: flex;
    // flex-wrap: wrap;
    // width: 100vw;
    align-items: center;
    // justify-content: space-between;
    // margin-left: 100px;
    // margin-top: 0px;
    // padding: 0px;
    padding-left: 150px;
    
}

.contact-icon{
    width: 125px;
    height: 125px;
    border-radius: 100px;
    background: #596E45;
    margin-top: 150px;
    font-size: 4.5rem;
    color: #F5EDE1;
    display: inline-block;
    margin-right: 150px;
    text-align: center;
  
    
}

.instagram {
   margin-top: 25px;
}

.email {
    margin-top: 25px;
    
}

.github {
    margin-top: 25px;
 }

 .contact-icon p{
     font-size: 1.5rem;
     color: #404040;
     font-family: roboto;
     font-weight: 400;
     margin-left: -60px;
     
     
 }

 .contact-icon .user-git{
    margin-left: -25px;
 }

 .contact-icon .user-ig{
    margin-left: -30px;
 }

 .contact-icon .user-mail{
     margin-left: -85px;
 }

 @media (max-width: 767px){
    width: 1200px;
        height: 566px;
        display: flex;
        justify-content: center;
        background: #B7BAA3;
        padding-left: 50px;
        flex: 0 0 auto;
        margin-top: 100px;
        margin-bottom: 200px;
        
 }

 .all-contact_icons{
    display: flex;
    flex-wrap: wrap;
    width: 1000px;
    align-items: center;
    justify-content: space-evenly;
    margin-left: -50px;
    margin-top: -150px;
    
}

`;

export default Footer
