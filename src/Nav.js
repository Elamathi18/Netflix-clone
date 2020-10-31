import React,{useState,useEffect} from 'react';
import "./Nav.css";


function Nav() {
    const[show,handleShow]=useState(false);
    useEffect(()=>{
       window.addEventListener("scroll",()=>{
           if(window.scroll>100){
               handleShow(true);
           }
           else handleShow(false);
       });
       return () =>{
           window.removeEventListener("scroll");
       };
    }, []);

    return (
        <div className={`nav ${ show && "nav_balck"}`}>
            <img class="nav_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix Logo"
            />
            <img class="nav_avatar"
            src="https://i.pinimg.com/564x/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.jpg"
            alt="Netflix Logo"
            />
            
        </div>
    )
}

export default Nav
