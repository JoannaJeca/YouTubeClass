import styled from "styled-components"
import { Outlet } from "react-router-dom";
import Header from "../Block/Header"
import Sider from "../Pages/Sider"
import Genres from "../Pages/Genres";



const Layout = () =>{
    return(
        <div>
            <Header/>
            <Hold>
            {/* <Sider/> */}
                <Holder>
                  <Div>
                    <Genres/>
                     <Outlet/>
                  </Div>
            </Holder>
            </Hold>
        </div>
    )
}

export default Layout;

const Div = styled.div`
width:calc(100% - 80px);
`;

const Holder = styled.div`
    width:calc(100%);
    /* background-color: red; */
    display: flex;
    justify-content: end;
`

const Hold = styled.div`
display:flex;
width:100%;
`





