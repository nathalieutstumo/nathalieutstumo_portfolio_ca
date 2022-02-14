import styled from "styled-components";
// const About = styled.div`
//     height: auto;
//     min-width: 100vw;
//     background: blue;
//     margin: 0;
//     padding: 0;
// `;



// const Hero = () => {
//     return (
//         <About></About>
//     );
// };




const Hero = styled.div`
.hero-text-light {
    display: flex;
    font-size: 5rem;
    font-family: Roboto;
    font-weight: 300;
    text-align: right;
    width: 600px;
    color: #596E45;
   
   
}

h1{
    margin-top: 40px;
    padding-right: 50px;
   
}



.hero {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    

    
}

.hero_content {
    background: #F5EDE1;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 488;
    
    
   
}

.hero-img-container{
    width: 800px;
    height: 550px;
   margin: 0;
   padding: 0;
   display: flex;
   justify-content: left;
   align-items: center;
   margin-left: -120px;
  
}

.hero-inline{
    display: inline-flex;
    width: auto;
    padding-left: 0;
    margin-top: -50px
}

.hero-img{
    width: 600px;
    height: 500px;
    
}

.hero-text-bold{
    font-size: 6rem;
    font-family: Roboto;
    font-weight: 700;
    text-align: center;
    justify-content: center;
    align-items: center;
    width: 75%;
    color: #596E45;
}

.hero-bold-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -225px;
}

@media (max-width: 767px) {

    .hero-img-container{
    display: none;
    }

    .hero-text-light {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
      
    }

    h1{
   margin-left: 325px;
   
   
    }

    .hero-bold-container {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: -95px;
    }
}




`;

export default Hero;