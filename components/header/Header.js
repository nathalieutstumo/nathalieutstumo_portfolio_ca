import styled from "styled-components";

const Header = styled.header`
    width: 100vw;
   
.nav {
    display: flex;
    height: 82px;
    flex-direction: row;
    background: #F5EDE1;
    align-items: center;
    padding-left: 25px;
    flex: 0 0 auto;
}

.nav-bar{
   
    width: 50%;
    background: #F5EDE1;
}

nav ul {
    text-align: right;
    width: 100%;
    justify-content: right;
}

nav li {
    display: inline-flex;
    padding: 30px;  
}

nav li a {
    font-size: 1.2rem;
    font-family: Roboto;
    color: #596E45;

}

.nav-container{
    display: flex;
    text-align: right;
    width: 92%;
    justify-content: right;
    align-items: right;
    
}

.menu {
    font-size: 3rem;
    color: #596E45;
    margin-right: -20px;
    position: absolute;
    text-align: center;
    align-items: center;
    justify-content: center;  
    margin-top: 35px;  
    display: none; 
}

@media (max-width: 767px){


    nav ul {
        // display: none;
        text-align: center;
        width: 700px;
        justify-content: center;
    }

    nav li {
        display: inline-flex;
        padding: 20px;  
    }
    nav li a {
        font-size: 2.2rem;
        font-family: Roboto;
        color: #596E45;
    
    }
}




`;

export default Header;