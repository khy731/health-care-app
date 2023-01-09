import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    const navigateHandler = () => {
        navigate('/');
    }

    return(
        <div onClick={navigateHandler}>
            <h2>Header</h2>
        </div>
    )
}

export default Header;