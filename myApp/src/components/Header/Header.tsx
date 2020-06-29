import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    const [title, setTitle] = useState('Мой аккаунт');

    return (
    // <div className = "d-flex align-items-center flex-column" style={{width: "100%"}}>
    <div className="w-100">
        <div className="d-flex flex-row align-items-space-around">
            <div className="box"></div>
            <div className="d-flex ml-3 flex-column justify-content-end w-100">
            <h1 className="text-danger">{title}</h1>
                <nav className="navbar navbar-expand-md navbar-light border border-light rounded" style={{backgroundColor:"rgb(230, 230, 230)", boxShadow: "0 0 4px rgba(0,0,0,0.5)"}}>
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
                            <Link to="/main" onClick={()=>setTitle('Мой аккаунт')}>
                                <div className="nav-link">Главная <span className="sr-only">(current)</span></div>
                            </Link>
                        </li>
                        <li className="vertical ml-3"></li>
                        <li className="nav-item active">
                            <Link to='/about' onClick={()=>setTitle('О нас')}>
                                <div className="nav-link ml-3">О нас <span className="sr-only">(current)</span></div>
                            </Link>
                        </li>
                        <li className="vertical ml-3"></li>
                        <li className="nav-item active">
                            <Link to='/contacts' onClick={()=>setTitle('Контакты')}>
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
