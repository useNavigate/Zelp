import { useDispatch } from "react-redux"
import * as sessionActions from "../../store/session";
import "./demoLogin.css"
const DemoLogin=()=>{
    const dispatch =useDispatch()

    const handleClick=(e)=>{
        e.preventDefault()
        return dispatch(sessionActions.login({ credential: "demo@demo.com",password:"123456" }));
    }
    return(

        <span onClick={handleClick} className="demoLogin">Demo</span>

    )
}


export default DemoLogin
