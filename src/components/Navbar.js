import React from 'react'
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../actions/auth';

 const Navbar = () => {

    const history = useHistory();

    const onClickLogout = async (e) => {
        e.preventDefault();
        try {
            logout(dispatch);
            localStorage.removeItem('authToken');
            history.push("/");
          } catch (error) {
            console.log("Logout був неуспішний:", error);
          }
    }
    const dispatch = useDispatch();
    const {isAuth, username} = useSelector(state => state.auth);
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/users">Користувачі</Link>
                        </li>
                    </ul>
                    {!isAuth ?
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/register">Реєструватися</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Вхід</Link>
                            </li>
                        </ul>
                        :
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/profile">{username}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/logout" onClick={onClickLogout} >Вихід</Link>
                            </li>
                        </ul>
                    }

                </div>
            </div>
        </nav>
    );
    
};

export default Navbar;
