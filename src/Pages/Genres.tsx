import styled from 'styled-components'
import { getVideos } from '../api/api'; 

const Genres = () => {
  return (
    <div> 
        <Container>
            <Nav bcc="fds" cl="ui" onClick={()=>{
              getVideos("All")
            }}>All</Nav>

            <Nav onClick={()=>{
              getVideos("News")
            }}>News</Nav>
            <Nav onClick={()=>{
              getVideos("Sasuke Uchiha")
            }}>Sasuke Uchiha</Nav>
            <Nav onClick={()=>{
              getVideos("computer programming")
            }}>computer programming</Nav>
        </Container>
    </div>
  )
}

export default Genres;

const Container = styled.div`
width:100%;
/* background-color:green; */
display:flex;`

const Nav = styled.div<{cl?:string, bcc?:string}>`
    padding:3px 6px;
    background-color: ${({bcc})=> (bcc ? "black" :  "#d1d0d0" )};
    margin-right:5px;
    cursor: pointer;
    color:${({cl})=> (cl ? "white" : "black")};
    border-radius:5px;
    transition:all ease-in 350ms;
    &:hover{
    background-color: #c4c1c1;
}
`