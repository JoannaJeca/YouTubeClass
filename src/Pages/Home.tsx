import styled from 'styled-components'
import pix from "../assets/IMG_20210510_220010_405.jpg"

const Home = () => {
  return (
    <div>
        <Container>
            <Card>
                <Top>
                    <Img src={pix} alt=""/>
                </Top>
                <Bottom></Bottom>
            </Card>
            

        </Container>
    </div>
  )
}

export default Home;
const Bottom =styled.div`
height:23%;
background-color:yellow`

const Img = styled.img`
    width:100%;
    height:100%;
    object-fit: cover;
    border-radius:20px;
`

const Top =styled.div`
width:100%;
height:73.5%;
background-color:black;
border-radius:20px;`

const Card = styled.div`
width:340px;
height:350px;
background-color:blue;
display: flex;
flex-direction: column;
justify-content: space-between;
margin:20px 20px;
margin-left:0px;`

const Container = styled.section`
    width:100%;
    background-color: aliceblue;
    height:100%;
    display:flex;
    flex-wrap:wrap;
`