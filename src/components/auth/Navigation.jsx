import {Link} from 'react-router-dom'

const MainNavigation = () => {
    return(
        <>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        </>
    )
}

export default MainNavigation;