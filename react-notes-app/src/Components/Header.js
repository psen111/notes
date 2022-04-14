import React from "react";

const Header=({handleSearchNote})=>{
    
    return(
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <h1 className="navbar-brand ">Notes</h1>
                <form className="d-flex">
                <input onChange={(event)=>handleSearchNote(event.target.value)} className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                </form>
            </div>
        </nav>
    )
}

export default Header;