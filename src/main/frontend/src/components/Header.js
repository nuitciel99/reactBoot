import '../assets/css/style.scss'
import { Routes, Route, Link, NavLink } from 'react-router-dom'
import Members from '../routes/Member/Members.js';


function Header(){

    return(
        <>
            <header className="navHeader">
                <ul className="navBarMain">
                    <div className="logo">.</div>
                    <li className="navBarLi"><a href="">Home</a></li>
                    <li className="navBarLi"><a href="">Movie</a></li>
                    <li className="navBarLi"><a href="">Tv</a></li>
                    <li className="navBarLi"><a href="">Search</a></li>
                    <li className="navBarLi"><NavLink to='/login'>LogIn</NavLink></li>
                </ul>
                <div className="headerContent">
                </div>
            </header> 
            <Routes> 
                <Route path='/login' element={<Members />} />
            </Routes>
        </>
        )
}

export default Header