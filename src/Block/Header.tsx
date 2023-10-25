import styled from 'styled-components'
import {AiOutlineMenu} from 'react-icons/ai'
import logo from "../assets/youtubeLogo.jpg"
import {GrSearch} from "react-icons/gr"
import {HiMicrophone} from "react-icons/hi"
import {BiVideoPlus} from "react-icons/bi"
import {BsBell} from "react-icons/bs"
import { useState } from 'react'
import Sider from '../Pages/Sider'


const Header = () => {
    const [show, setShow] = useState<boolean>(false)
    const Toggle =()=>{
        setShow(!show)
    }

  return (
    <div>
        <Container>
            <Wrapper>
                <LogoArea>
                    <OutlineMenu onClick={Toggle} style={{marginLeft:"7.5px"}}/>
                    <Hold>
                        <Logo src={logo} alt="youtube_logo"/>
                        <h6>NG</h6>
                    </Hold>
                </LogoArea>
                <SearchArea>
                    <InputDiv>
                    {/* <Microphone/> */}
                    <Input/>
                    <Search/>
                    </InputDiv>
                    <Circle bcc="#d8d8d8" op="0">
                        <HiMicrophone size={21}/>
                    </Circle>
                </SearchArea>
                <CreateArea>
                    <Circle bcc="white"><BiVideoPlus size={21}/></Circle>
                    <Circle bcc="white"><BsBell size={21}/></Circle>
                    <Circle bcc="purple" cl="white">J</Circle>
                </CreateArea>
            </Wrapper>
        </Container>
        {show ? (
            <Sider/>
        ) : (<div style={{opacity:"0"}}><Sider/></div>)}
    </div>
  )
}

export default Header;
const CreateArea = styled.div`
width:13%;
height:100%;
/* background-color:green; */
display:flex;
justify-content:space-between;
align-items: center;
@media screen and (max-width: 768px){
width:16%;
};
@media screen and (max-width: 500px){
width:19%;
};
`

const Circle = styled.div<{bcc:string, cl?:string, op?:string}>`
width:45px;
height:45px;
border-radius:50%;
color:${({cl})=>cl};
font-size:16px;
background-color:  ${({bcc})=>bcc};
&:hover{
    background-color: #c4c1c1;
};
display: flex;
justify-content: center;
align-items: center;
@media screen and (max-width: 768px){
width:40px;
height:40px;    
};
@media screen and (max-width: 500px){
opacity:${({op})=>op};
width:30px;
height:30px;
};

`
// const Microphone = styled(HiMicrophone)`
//     font-size:21;
//     opacity:0;
//     @media screen and (max-width: 500px){
//     display:flex;
//     font-size:15px;
//     margin:0px 10px
// }
// `

const Search = styled(GrSearch)`
    margin:0px 24px;
    font-size:21px;

@media screen and (max-width: 500px){
    display:flex;
    font-size:15px;
    margin:0px 10px
}`

const Input = styled.input`
height:83%;
flex:1;
border-radius:30px;
border-bottom-right-radius:0px;
border-top-right-radius:0px;
border:none;
@media screen and (max-width: 768px){
    width:80%;
        
    };
    @media screen and (max-width: 500px){
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}
    `

const InputDiv = styled.div`
width:90%;
height:63%;
padding-left:1px;
border-radius:30px;
border:1px solid darkgrey;
background-color: #d8d8d8;
&:hover{ 
    background-color: #c4c1c1;
}
display: flex;
align-items: center;
@media screen and (max-width: 768px){
width:80%;
flex:1;
};
@media screen and (max-width: 500px){

width:100%;

};
@media screen and (max-width: 425px){
    width:45%;
    height:50%;
    margin-left:17px
};
@media screen and (max-width: 375px){
    width:45%;
    height:70%;
    margin-left:17px
}

`

const SearchArea = styled.div`
width:54%;
display: flex;
justify-content: space-around;
align-items: center;
height:100%;
@media screen and (max-width: 768px){
width:50%;   
};
@media screen and (max-width: 500px){
    width:50%;
    height:80%;
    margin-left:17px
};
@media screen and (max-width: 425px){
    width:45%;
    height:70%;
    margin-left:17px
};
@media screen and (max-width: 375px){
    width:45%;
    height:70%;
    margin-left:17px
}
`

const OutlineMenu = styled(AiOutlineMenu)`
font-size:23px;
cursor: pointer;
justify-items:start;
@media screen and (max-width: 500px){

font-size:21px;

};
`

const Logo =styled.img`
object-fit:contain;
width:78%;
margin-top:7px;
height:80%;
object-position: center;
@media screen and (max-width: 768px){
    width:100px;
    height:60px;
    object-fit:contain;
    margin-top:0;
object-position: center;

};
@media screen and (max-width: 500px){
    width:75px;
    /* margin-right: 10px; */
}

`

const Hold= styled.div`
position:relative;
width:70%;
height:100%;
align-items: center;
/* background-color: red; */
justify-content:center;
h6{
    position:absolute;
    top:6px;
    right:20%;
};
@media screen and (max-width: 768px){
    width:40%;
    h6{
        right:10px;
        opacity:0
    }
};
@media screen and (max-width: 500px){

width:45%;
/* margin-left: 5px; */

};
`

const LogoArea = styled.div`
width:13%;
height:100%;
/* background-color: green; */
display: flex;
justify-content: space-between;
align-items: center;
@media screen and (max-width: 768px){
    justify-content: space-around;
    margin-left: 5px;
};
@media screen and (max-width: 500px){

width:23%;

};
`

const Wrapper = styled.div`
width:97%;
height:100%;
display: flex;
align-items: center;
justify-content:space-between
`



const Container=styled.div`
    width:100%;
    height:65px;
    /* background-color:purple; */
    display: flex;
align-items: center;
justify-content:center;
/* position:fixed; */
// z-index:1
`
