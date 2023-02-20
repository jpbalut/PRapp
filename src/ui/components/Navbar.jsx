import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';


export const Navbar = () => {

    const navigate = useNavigate()
    
    const onLogout = () =>{
        navigate('/login', {replace: true});
    }

    const {user} = useContext(AuthContext)
    console.log(user)
    
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={({isActive}) => `nav-item nav-link ${ isActive ? 'active':''}`} 
                        to="/weighlifting"

                    >
                        Weighlifting
                    </NavLink>

                    <NavLink 
                        className={({isActive}) => `nav-item nav-link ${ isActive ? 'active':''}`} 
                        to="/gymnastic"
                    >
                        Gymnastic
                    </NavLink>

                    <NavLink 
                        className={({isActive}) => `nav-item nav-link ${ isActive ? 'active':''}`} 
                        to="/calculate"
                    >
                        Calculate
                    </NavLink>

                    <NavLink 
                        className={({isActive}) => `nav-item nav-link ${ isActive ? 'active':''}`} 
                        to="/platesbyside"
                    >
                        Plates By Side
                    </NavLink>

                    <NavLink 
                        className={({isActive}) => `nav-item nav-link ${ isActive ? "active":""}`} 
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-primary'>
                        {user?.name}
                    </span>

                    <button 
                        className="nav-item nav-link btn"
                        onClick = {onLogout}
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}