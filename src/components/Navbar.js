import React from "react";

export default function Navbar({ title, address }) {
    return (
        <div className="mx-6 lg:mx-6 ">
            <a className = "" href='/'>
                <p className='hidden sm:inline my-2 text-sm text-gray-400 hover:text-amber-600'>{title}</p>
            </a>
        </div>
    )
}