import { useNavigate } from 'react-router-dom';
import '../../signup/signin.css';
import Fnav from '../Fnav';
import { Button } from 'react-bootstrap';



const Acc = () => {

    const navigate = useNavigate();

    const accInUpHandler = () => {
        navigate('/signin')
    }
    return (
        <>
                <Fnav/>
                <div className="cont cccc">
                <div className="signin ssss">
                    <h1 style={{fontSize : "30px"}}>Account Created</h1>
                    <Button variant="primary" type="submit" className="sbtn" onClick={accInUpHandler}>Log In</Button>
                </div>
                </div>
        </>
    )
}

export default Acc;