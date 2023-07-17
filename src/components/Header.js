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
                <Navbar title='Home' address='/' />
                <Navbar title='Destinations' address='/' />
                <Navbar title='About' address='/' />
                <Navbar title='Partner' address='/' />
                
                <Button text='Login' styleName='font-inter text-amber-500  border-2 border-amber-500 py-2 px-6 rounded-lg mr-1' ></Button>
                <Button text='Register' styleName='font-inter text-white bg-amber-500 py-2 px-6 rounded-lg mr-1'></Button>
            </div>

        </div>
    )
}

export default Header




