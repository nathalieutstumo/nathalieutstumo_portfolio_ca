import styled from "styled-components"

const Projects = styled.div`

.projects-inline{
    display: inline-flex;
}


.projects_h2 {
    font-family: Trochut;
    font-size: 81px;
    color: #404040;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 45px;
}


.projects-content{
    width: 700px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.projects-img{
    margin-top: 0px;
    margin-left: 225px;
    width: 400px;
    height: auto;
   
}

.projects-info{
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    margin-top: 50px;
    margin-left: -100px;
    
}

.projects-info_container{
    // display: flex;
    // justify-content: center;
    // flex-direction: column;
    margin-bottom: 55px;
    
}

.project-title {
    // display: flex;
    // justify-content: center;
    font-family: trochut;
    font-size: 36px;
    margin-left: 145px;
    margin-top: -10px;
    margin-bottom: -35px;
    
}

.projects-info_p{
    font-family: roboto;
    font-size: 24px;
    width: 250px
    
   
}

.project-btn{
    width: 240px;
    height: 50px;
    background: #596E45;
    font-family: trochut;
    font-size: 36px;
    color: #F5EDE1;
    text-align: center;
    margin-top: -23px;
    margin-left: 145px
    
}
`;

export default Projects
