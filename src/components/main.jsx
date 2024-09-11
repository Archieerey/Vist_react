import { Container } from "react-bootstrap";
import { publicRoutes } from "../config/routes";
import { Route, Routes } from "react-router-dom";
 
const Main=() => {
    return(
        <Container>
        <Routes>
            {publicRoutes.map((el, i)=>{
                return (
                    <Route key={i} path={el.path} Component={el.component}></Route>
                )
            })}
        </Routes>
        </Container>
    )
}
export default Main;