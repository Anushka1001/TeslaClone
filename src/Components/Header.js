import React ,{useState} from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';


function Header() {
    const [SideMenuStatus, setSideMenuStatus] = useState(false)


    return (
        <Container>
            <a href="#">
                <img src="/images/tesla.jpg" />
            </a>
            <Menug>
                <div>Model X</div>
                <div>Model Y</div>
                <div>Model Z</div>
                <div>Solar Panels</div>
            </Menug>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
                <MenuIconContainer onClick={()=>setSideMenuStatus(true)}>
                    <MenuIcon />
                </MenuIconContainer>
            </RightMenu>
            <SideMenu status={SideMenuStatus}>
                <CloseIconContainer>
                    <CloseIcon onClick={()=>setSideMenuStatus(false)}/>
                </CloseIconContainer>
                <li><a href="#">Model S</a></li>
                <li><a href="#">Model Y</a></li>
                <li><a href="#">Model X</a></li>
                <li><a href="#">Model Z</a></li>
                <li><a href="#">Solar Panels</a></li>
                <li><a href="#">CyberTruck</a></li>
            </SideMenu>
        </Container>
    )
}

export default Header

const Container = styled.div`
    display: flex;
    min-height: 60px;
    align-items:center;
    justify-content:space-between;
    padding: 0 20px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index:10;
`
const Menug = styled.div`
    display:flex;
    text-transform: uppercase;
    margin-left:auto;
    padding-left:auto;
    div{
        font-weight: 600;
        padding: 0 20px;
        cursor: pointer;
    }
    @media(max-width: 960px){
        display:none;
    }
`
const Menu = styled.div`

`
const RightMenu = styled.div`
    display: flex;
    align-items: center;
    margin-left: auto;
    a{
        font-weight:600;
        text-transform: uppercase;
        padding-right: 20px;
        color: #393c41;
    }
`
const MenuIconContainer = styled.div`
    display: flex;
    cursor:pointer;
`

const SideMenu = styled.div`
    position:fixed;
    width:250px;
    top:0;
    right:0;
    bottom:0;
    background-color:white;
    padding:20px;
    font-family: Rubik;
    list-style: none;
    text-align:center;
    transform: ${props => props.status ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease-in;
    li{
        padding:15px 0;
        border-bottom: 1px solid silver;
        a{
            font-weight: 500px;
        }
    }
`

const CloseIconContainer = styled.div`
    display:flex;
    justify-content:flex-end;
    cursor:pointer;
`