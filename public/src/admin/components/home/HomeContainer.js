import { Home } from './Home'
import { useHistory } from 'react-router-dom'
import { logout } from '../../services/auth.service';

export function HomeContainer(props) {
    
    const history = useHistory();

    function handleClick() {
        logout();
        history.push("/admin");
    }

    return (
        <Home onClick={handleClick} />
    );
    
}