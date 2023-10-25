import styled from 'styled-components'
import {AiFillHome} from "react-icons/ai"
import {BiScreenshot} from "react-icons/bi"
import {MdOutlineSubscriptions} from "react-icons/md"
import {MdOutlineVideoLibrary} from "react-icons/md"
import {LiaDownloadSolid} from "react-icons/lia"
 
import {FC} from "react"
interface iProps{
    icon:any
    text:string
}

const Nav:FC<iProps> = ({text, icon}) => {
    return <Hold>
       <Icon>{icon}</Icon>
        <p>{text}</p>
    </Hold>;
}

const Sider = () => {
  return (
    <div>
        <Container>
            <Nav icon={<AiFillHome/>} text="home"/>
            <Nav icon={<BiScreenshot/>} text="Shorts"/>
            <Nav icon={<MdOutlineSubscriptions/>} text="Subsriptions"/>
            <Nav icon={<MdOutlineVideoLibrary/>} text="Library"/>
            <Nav icon={<LiaDownloadSolid/>} text="Downloads"/>
        </Container>
    </div>
  )

   
}

export default Sider;
const Icon = styled.div`
font-size:21px;`

const Hold = styled.div`
    width:100%;
    flex-direction:column;
    height:80px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover{
        background-color: #c4c1c1;;
    };
    border-radius: 7px;
    p{
        font-size:13px;
    }
`

const Container = styled.div`
    height:calc(100vh - 65px);
    width:80px;
    /* background-color: #d704d7; */
    position:fixed;
    @media screen and (max-width: 500px){
        opacity:1
    }
`