import { useDispatch } from "react-redux"
import * as sessionActions from "../../store/session";
import "./demoLogin.css"
const DemoLogin=({className,string})=>{
    const dispatch =useDispatch()

    const handleClick=(e)=>{
        e.preventDefault()
        return dispatch(sessionActions.login({ credential: "demo@demo.com",password:"123456" }));
    }
    return(

        <span onClick={handleClick} className={`${className}`}>{string}</span>

    )
}


export default DemoLogin
