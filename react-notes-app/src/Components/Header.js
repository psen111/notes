import React from "react";
import Fixedsidebar from "./FixedSideBar";

const Header = ({ handleSearchNote }) => {



    return (
        <nav className="navbar">
            <div className="container-fluid">
                <h1 className="navbar-brand ">Notes</h1>
                <div className="d-flex align-items-center">
                    <form className="d-flex">
                        <input onChange={(event) =>{ event.preventDefault(); handleSearchNote(event.target.value)}} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        
                    </form>
                    <Fixedsidebar/>
                </div>
                
            </div>
        </nav>
    )
}

export default Header;