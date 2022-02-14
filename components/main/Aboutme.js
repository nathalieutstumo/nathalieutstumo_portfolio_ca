import styled from "styled-components"




const About = styled.div`

.about_textbox {
    width: 433px;
    height: 133px;
    background: #596E45;
    display: flex;
    justify-content: center;
    align-items: center;
     
    margin-left: 550px;
    position: sticky;
    z-index: 99;
}

.about_h2 {
    font-family: Trochut;
    font-size: 81px;
    color: #F5EDE1;
}


.aboutimg_container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -50px;
    
}

.about_name {
font-family: trochut;
font-weight: 700;
font-size: 81px;
margin-top: -45px
color: #404040;
}

.my_name{
font-family: trochut;
font-weight: 700;
font-size: 81px;
margin-bottom: 45px;
color: #404040;
}

.about_section {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #404040
    
}

.about-content{
    text-align: left;
    width: 652px;
    font-family: roboto;
    font-size: 24px;
    line-height: 30px;
    margin-top: -45px
    color: #404040;

}

.paragraph {
   margin-bottom: 25px;

}

@media (max-width: 767px){
    .about_h2 {
        font-family: Trochut;
        font-size: 91px;
        color: #F5EDE1;
    }

    .about_name {
        font-family: trochut;
        font-weight: 700;
        font-size: 111px;
        margin-top: -65px;
        color: #404040;
        }

        .my_name{
            font-family: trochut;
            font-weight: 700;
            font-size: 111px;
            margin-bottom: 45px;
            color: #404040;
            }

            .about-content{
                text-align: left;
                width: 752px;
                font-family: roboto;
                font-size: 36px;
                line-height: 50px;
                margin-top: -45px
                color: #404040;
            }
}

`;

export default About


