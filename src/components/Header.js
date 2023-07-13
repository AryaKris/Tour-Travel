import React from "react";
import Navbar from "./Navbar";
import Button from "./Button"

const Header = () => {
    return (
        <div className='flex justify-between mx-2 max-w-6xl sm:mx-auto items-right py-6'>
            <div className='flex' >
                <img src="../images/logo.png" alt="logo" />
            </div>
            <div className='flex items-center space-x-5' >
                <Navbar title = 'Home' address ='/'/>
                <Navbar title='Destinations' address='/' />
                <Navbar title='About' address='/' />
                <Navbar title='Partner' address='/' />

                <Button text = 'Login'/>
                <Button text='Register' />

           





            </div>

        </div>
    )
}

export default Header




