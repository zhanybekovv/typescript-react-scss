import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    // <div className = "d-flex align-items-center flex-column" style={{width: "100%"}}>
    <div style={{width: "100%"}}>
        <div className="d-flex flex-row align-items-space-around">
            <div className="box"></div>
            <div className="d-flex ml-3 flex-column justify-content-end w-100">
                <h1 className="text-danger">My Account</h1>
                <nav className="navbar navbar-expand-md navbar-light bg-color rounded" >
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        data-toggle="collapse" 
                        data-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav col-12">
                        <li className="nav-item active">
                            <Link to="/main">
                                <div className="nav-link">Главная <span className="sr-only">(current)</span></div>
                            </Link>
                        </li>
                        <li className="vertical ml-3"></li>
                        <li className="nav-item active">
                            <Link to='/about'>
                                <div className="nav-link ml-3">О нас <span className="sr-only">(current)</span></div>
                            </Link>
                        </li>
                        <li className="vertical ml-3"></li>
                        <li className="nav-item active">
                            <Link to='/contacts'>
                                <div className="nav-link ml-3">Контакты <span className="sr-only">(current)</span></div>
                            </Link>
                        </li>
                        <li className="vertical ml-3"></li>
                        <li className="nav-item active">
                            <Link to='/'>
                                <div className="nav-link ml-3">Счета <span className="sr-only">(current)</span></div>
                            </Link>
                        </li>
                        <li className="vertical ml-3"></li>
                        <li className="nav-item active">
                            <Link to='/'>
                                <div className="nav-link ml-3">Платежи <span className="sr-only">(current)</span></div>
                            </Link>
                        </li>
                        <li className="vertical ml-3"></li>
                        <li className="nav-item active">
                            <Link to='/'>
                                <div className="nav-link ml-3">Переводы <span className="sr-only">(current)</span></div>
                            </Link>
                        </li>
                        <li className="vertical ml-3"></li>
                        <li className="nav-item active">
                            <Link to='/'>
                                <div className="nav-link ml-3">Заявка <span className="sr-only">(current)</span></div>
                            </Link>
                        </li>
                    </ul>
                </div>
                </nav>
            </div>
        </div>
    </div>
  );
}

export default Header;
