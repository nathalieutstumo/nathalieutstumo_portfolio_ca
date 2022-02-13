import styled from "styled-components"




const Learning = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin-top: 50px;


.learning-colorblock {
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

.learning-colorblock_shadow{
    width: 433px;
    height: 95px;
    margin-top: 90px;
    background: #B7BAA3;
    z-index: 3;
    margin-left: -200px;
}

.learning-h2{
    font-family: trochut;
    font-size: 81px;
    color: #F5EDE1;
    
}

.all-learning_icons{
    display: flex;
    flex-wrap: wrap;
    width: 1000px;
    align-items: center;
    justify-content: center;
}

.learning-icon{
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

.react {
   margin-top: 35px;
}

.next {
    margin-top: 50px;
    font-size: 2.5rem;
    color: #F5EDE1;
    font-family: roboto;
}


`;

export default Learning


