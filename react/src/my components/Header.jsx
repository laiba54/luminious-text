// sfc
import {Link} from 'react-router-dom'
const Header = () => {
    return ( 
        <div className="navbar">
            <div className="logo" style={{fontWeight : 'bold'}}>
                Luminious Text
            </div>
            <div className="lists">
                <Link to="/">Home</Link>
                <Link to="/">About</Link>
            </div>
        </div>
     );
}
 
export default Header;