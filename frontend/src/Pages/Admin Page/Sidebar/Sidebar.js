import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import "./Sidebar.css"


function Sidebar() {
    const navigate = useNavigate()

    function handleClick(choice) {
        if (choice === "Customers")
            navigate('/Customers')
        if (choice === 'Dashboard') navigate('/Dashboard')
        if (choice === 'ShowProducts') navigate('/ShowProducts')
    }
    return (
        <>
            <div className='sidebar-main'>
                <p style={{ fontSize: "2.5rem", fontWeight: "600", paddingLeft: "1rem", margin: 0 }}>Furniro</p>
                <div className='sidebar-buttons'>
                    <a onClick={() => handleClick('Dashboard')}>DASHBOARD</a>
                    <a onClick={() => handleClick("Customers")}>CUSTOMERS</a>
                    <a onClick={() => handleClick("ShowProducts")}>PRODUCTS</a>
                    <a>ORDERS</a>
                </div>
                <div className='sidebar-settings'>
                    <p style={{ color: "grey" }}>Additionals</p>
                    <a>Profile</a>
                    <a>Settings</a>
                </div>
            </div>


        </>
    )
}

export default Sidebar